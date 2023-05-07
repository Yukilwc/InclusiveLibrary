# 本地调试微信公众号网页授权

## 概要

从[微信公众号网页授权文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)
中可知，设置授权后重定向的url，需要在公众平台官网的**网页授权域名**中配置，否则会报 10003 redirect_uri域名与后台配置不一致，
也就是开发过程中，配置的**redirect_uri**需要是线上环境的url，这就给开发带来了很多麻烦，我们更想让跳转的路径请求指向本地项目，
如此更加方便调试。  

本就主要记录了本地调试微信公众号网页授权的一种方法，以及过程中碰到的一些其它问题。

## 修改host

这一步主要是为了把线上域名，定向到本地的ip，从而能让请求指向本机。

使用vscode，打开`C:\Windows\System32\drivers\etc\hosts`文件，在其中添加一条：

```
127.0.0.1       your_config_host.com
```

这里前者是本机ip，后者就填在公众平台配置的网页授权域名。

接着，在命令行工具中执行以下指令，刷新DNS缓存：

```sh
ipconfig /flushdns
```

如此，通过各种web工具，例如浏览器，小程序开发工具等，对网页授权域名的访问，都会解析到本机了。

**注意**

修改host时，由于其只读，保存时为overwrite覆盖，同时需要管理员权限。

这里host的解析，只支持http，不支持https，也就是在前端项目中，配置redirect_uri时，需要配置成http协议，才能解析到本机。

```js
let redirectUri = 'http://your_config_host.com'
```

## 处理端口号

此时，直接在浏览器访问`http://your_config_host.com`，发现并不能指向本地启动好的前端项目，这是因为前端项目监听的端口号，
和请求的url不同。前端经常是3000,8080等，而浏览器访问的地址，一般都是走**80端口**，这里修改前端项目监听的端口号位80，此处以vite项目为例：

```ts
// vite.config.ts
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port:80
  },
} 
```

如此，在浏览器中再访问`http://your_config_host.com`，就能发现其请求命中了本地前端项目了。

## 前端项目授权

如此，跳转处可做如下配置即可，其重定向的域名合法，同时还能指向本地前端项目，进行实时调试。

```ts
let redirectUri = 'http://your_config_host.com'
let wechatUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${""}#wechat_redirect`;
```


## 其它一些问题

### vue项目hash路由模式拼接问题

授权成功后，微信会在redirect_uri上，拼接code，state等参数，其是作为query参数拼接，也就是跟随在 `?key=value` 后的。

当使用vue的hash模式时，前端项目是使用 `#route_name` 的方式来处理路由，其query参数也是放在 `#` 后，
例如：`http://your_config_host.com/#/route_name?key=value`，只有如此格式，通过`vue-router`的`route.query`，才能正确解析参数。

微信的code拼接，经过实验，发现并非是直接拼接到末尾，而是解析url后，把hash放到最后，然后query添加到origin后面：
`http://your_config_host.com/?code=123&state=456#/route_name`，同时此种方式 vue-router难以解析，而如果要把hash模式修改为history模式，
可能改动又过大。

这里我采用的一种方法，就是不使用vue-router解析路由参数，而是使用`new URL()`来解析。

以下是一个vue3中的例子：

```ts
// 注意，这里如果要自带参数，则一定需要拼接到hash前，放到hash后，会被微信莫名其妙的吞掉，所以hash后务必仅仅放路由名字就行
let redirectUri = `http://your_config_host.com?userInfoStr=编码后的JSON序列化字符串#route_name`
// 经过跳转拼接，后url会变成如下
// http://your_config_host.com?userInfoStr=编码后的JSON序列化字符串&code=123&state=456#route_name
export default function useParams() {
  let code = ref("");
  let userInfo: Ref<UserInfo> = ref(new UserInfo());
  let url = window.location.href;
  let searchParams = new URL(url).searchParams;
  code.value = searchParams.get("code") || "";
  let userInfoStr = searchParams.get("userInfoStr") || "";
  if(!userInfoStr) {
    throw new Error("searchParams.get('userInfoStr') is empty")
  }
  userInfo.value = JSON.parse(decodeURIComponent(userInfoStr)) as UserInfo;
  return {
    code,
    userInfo,
  };
}
```

如此，通过这种非hash的拼接query参数方式，以及通过URL解析的方式，就可以避免code拼接错误的问题。

### 不是微信公众号网页开发者

如果不是微信公众号网页开发者，那么在微信开发者工具中，访问授权会直接提示没有开发权限，而在浏览器访问又缺少微信环境。
这时有个方法，就是直接在PC端微信，打开链接，如此就能够做到走host解析，同时还能利用微信环境。

至于微信客户端无法F12查看日志的问题，[使用vconsole](https://github.com/Tencent/vConsole)即可

### 授权重定向后，返回时循环重定向

微信网页授权的核心流程，是跳转拼接好的微信授权链接，进入微信的授权页，在授权成功后，会重定向到链接参数redirect_uri指定的页面，
从而获取code来进行下一步操作。

此时如果手机左滑或者按返回键，在部分手机上，
会出现又回到了授权页，然后再次重定向回来的问题，如此循环，就无法通过返回来退出。

经过实验，最后找到了一个解决方法，就是通过session记录标记的方式，在一次会话的生命周期内，
让授权页面仅在首次进入时，解析code，再次进入时，进行主动回退。

首先梳理下流程：

* 触发某个交互后，拼接好微信授权链接，跳转进入**微信授权页**。
* 授权成功后，微信官方重定向到redirect_uri指定的**code解析页**(这里我的code解析页是纯空白页面，
  为了减少复杂度，没有和业务页面耦合在一起)。
* code解析页通过后台接口，完成解析后，接着跳转**业务页面**,例如首页，订单页等。

从上面流程可以发现，其主要涉及三个页面，授权页，解析页，业务页，其中**授权页**是微信官方页面，我们是没有对其操纵的权限的。
而死循环是发生在**业务页**，触发返回后，回到**空白解析页**的时候，这两个涉及到的页面，我们都可以对其进行改动，改动的核心思路，
就是避免**解析页**二次跳转到**业务页**。

可以发现，问题的核心矛盾，在于回退到**授权页**时，重复解析code并进行了一次重复定向，只要我们能够实现，授权一次后，
再进入**解析页**，就直接回退，而不走解析code和跳转的分支即可。

我们可以借助一个session标记位实现这个机制。

首先，我们知道，同一个会话session下，回退被认为是一个会话，所以session标记位是持久化的。
而再次通过正向跳转流程进入解析页，是算作一个新会话的。
如此，标记位就仅仅在回退情境中生效。

通过session标记位，在code解析空白页中，就可以标记授权状态。当已经授权一次后，再次进入此页面，就直接回退。

使用vue3，伪代码大概如下：

```ts
// code解析空白页逻辑
export default function useAuth() {
  const HAS_AUTH_KEY = "PAGE_HAS_AUTH";
  // 这里是直接把code作为了一个标记位，也可以使用true/false均可
  let authorizedCode = ref(sessionStorage.getItem(HAS_AUTH_KEY));
  watch(authorizedCode, (n, o) => {
    if (!n) {
      sessionStorage.removeItem(HAS_AUTH_KEY);
      return;
    }
    sessionStorage.setItem(HAS_AUTH_KEY, n);
  });
  const userIsAuthorized = () => {
    if (authorizedCode.value) {
      return true;
    } else return false;
  };
  // 已经在此次会话授权过了
  const doDecode = async (code: string | null) => {
      // 此处调用后台接口，解析code
      // 授权成功后，留存code作为授权了的标记位
      authorizedCode.value = code
  };
  return {
    doDecode,
    userIsAuthorized,
    authorizedCode,
  };
}
let { doDecode, userIsAuthorized, authorizedCode } = useAuth();
if (userIsAuthorized()) {
  // 保险起见，连续回退前清空标记。其实本来重新进入，也会算作一次新的会话，会清空session
  authorizedCode.value = null;
  // 如果是小程序，直接通过wx.miniProgram.navigateBack退出webview
  // 如果是h5，则可通过history连续回调，回调次数可以自己尝试
  history.go(-2)
} else {
  doDecode(code.value, userInfo.value);
}
```


**注意**:

微信浏览器中location.replace在IOS设备等同于window.location.href跳转，不能做到替换页面栈中的路由。
