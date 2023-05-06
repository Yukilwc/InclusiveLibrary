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
