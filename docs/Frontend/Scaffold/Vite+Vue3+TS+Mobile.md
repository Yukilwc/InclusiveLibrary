# Vite搭建Vue3+Typescript移动端h5项目模板

## 引言

[模板](https://github.com/Yukilwc/ProjectTemplate/tree/master/vite3-vue3-typescript-mobile)

## 搭建

```sh
# 创建项目 选择vue vue-ts
npm create vite@latest
# 安装基础依赖
npm install
```

## IDE配置

首先安装Vue Language Features (Volar)  
之后开启take over mode,使用Volar的ts服务  
1. `ctrl+shift+p`,输入`Show Built-in Extensions`
2. 查询`TypeScript and JavaScript Language Features`,然后disabled(workspace)
3. 重启VSCODE

具体原因参考:

[Vue官方](https://vuejs.org/guide/typescript/overview.html#takeover-mode)

[Volar Issue](https://github.com/johnsoncodehk/volar/discussions/471)

## ts类型相关

### tsconfig

见模板

### types依赖安装

```sh
npm install --save-dev @types/node
```

### shim垫片

**添加vite类型声明**

```ts
/// <reference types="vite/client" />
```

其主要提供如下类型:
* 导入的静态资源，如svg的类型
* vite注入的环境变量类型，如`import.meta.env`
* HMR API类型，如`import.meta.hot`

### 参考

[Vite相关需要的配置](https://vitejs.dev/guide/features.html#typescript)



## vite.config.ts基础配置

见模板

* 开放ip和端口
* 类型别名

## 核心依赖安装与封装

### CSS预处理器

```sh
# 选一个即可,无需其它配置
npm add -D sass
# npm add -D less
# npm add -D stylus
```

**全局样式导入**
TODO:

### Vue Router

**安装**

```sh
npm install vue-router@4 --save
```

**配置**

详细配置见模板

* `<router-view></router-view>`
* `router/index.ts`配置
* `meta.d.ts`定义路由参数类型
* `main.ts`引入

**使用**

详细配置见模板router页面与usePermission

* 路由守卫
* 跳转与传参
* 页面内监听路由变化

### pinia

**安装**

```sh
npm install pinia --save
```

**配置**
一般来说，使用options的配置方法即可，而composition api风格的配置，过于自由，一般无需求不需要用吗?  
存在疑问  

* store定义
* action定义
* getter定义

**使用**

* state读取
* action调用
* getter读取
* $patch修改state 一般不要在业务组件内调用修改，而是定义actions
* $subscribe使用与自动卸载
* storo之间的相互调用

**启动时/登录时载入基本信息**

### axios

**思路**

还是不使用vueuse集成的useAxios了，而是自己封装一个  
接口调用也要适应composition api  
封装的use，其本质，要遵循封装一组data methods computed，  
类似之前用法，需要手动处理loading赋值，取消等，现在可以基于封装，把loading合并到  
useAxios中，直接在setup中使用  
当然如果还需更复杂的使用，那就需要封装进一步的业务use函数  

**安装**

```sh
npm install axios --save
npm i qs --save
```

**配置**

* 超时时间
* baseUrl
* 拦截器
* header及权限控制
* 错误处理
* header头
* 泛型
* get post formData等划分
* 文件上传下载支持


**API文件设计**

为了常用接口的统一使用管理，以及统一处理  
需要注册到全局，并且有类型提示  

**model文件设计**

**跨域配置**

[详细配置见](https://vitejs.dev/config/server-options.html#server-proxy)

**使用**


### 自动引入组件与方法

```sh
npm i unplugin-vue-components -D
npm i unplugin-auto-import -D
npm i vite-plugin-style-import -D
```

其中组件更希望自己导入全局，而非被动命名，因此不对components文件夹进行配置

### vant ui

```sh
npm i vant --save
```

在vite.config.ts中配置插件

**样式覆盖体系**

见全局样式部分

### element ui

暂不添加

```sh
npm install element-plus --save
```

**覆盖样式**

### 其它工具

```sh
#  vueuse
npm i @vueuse/core --save
npm i @vueuse/integrations --save
npm i universal-cookie --save
# ramda
```



## 类型技巧

### 全局变量

添加一个插件注册

* 新增window全局属性 除非是进行script脚本引入，否则不要在module体系内，定义全局属性
* 扩展window全局属性 .一般用来对一些三方脚本进行扩充强化
* Vue全局方法与属性
* Vue全局组件

### 为js库添加类型定义及类型扩展

vue-router 的 RouteMeta

### 引入已经定义的组件或方法的类型

使用`const computed: typeof import('vue')['computed']` `RouterLink: typeof import('vue-router')['RouterLink']`   

## vue3特性

* plugins
* directives 关于一点类型的参考 [Link](https://www.jianshu.com/p/68498f1bbd3b)
* filters
* 全局变量与方法
* 全局组件
* props与emit
* 全局指令，filter与组件内指令，filter

## 全局样式

### 覆盖样式

移除默认的全局样式，然后添加style文件夹  
内容见模板  
之后在main.ts中引入

### 工具样式

### 样式覆盖

使用此方法 [Link](https://vueuse.org/core/usecssvar/),封装一套控制elementui，vantui的样式控制器  
结合js化的css变量与自定义覆盖样式  


### 图标库

TODO:

### 导入字体

TODO:

## 权限体系

### 权限的存储与读取

其与全局store状态中的token同步  
权限的token存储到cookie中，当刷新或者调用接口时，如果cookie失效，则做相应处理  

### 接口控制

见模板

## 移动端支持

安装
```sh
npm install postcss postcss-pxtorem --save-dev
```
配置对应rem方案 见模板
## 其它辅助配置

### meta配置

```html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<meta name="format-detection" content="telephone=no, email=no, date=no, address=no">
```

### console.log去除

TODO:

### 打包分析工具

TODO:
rollup-plugin-visualizer
### 兼容性处理

**样式**

安装配置autoprefixer以及.browserslistrc

```sh
npm install autoprefixer -D
```

配置vite.config.ts和.browserslistrc

使用命令行可以查看支持的浏览器列表 `npx browserslist "last 1 version, >1%"`

最后使用如下代码查看测试  
```css
  input::placeholder {
    color: gray;
  }
```

[参考](https://zqianduan.com/pages/browserslist-config.html#%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95)


**javascript**

使用@vitejs/plugin-legacy

```
npm install @vitejs/plugin-legacy -D
npm install -D terser
```

```ts
import legacy from '@vitejs/plugin-legacy'
export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
}
```

### 环境变量配置

TODO:
## 优化

### Pre-bunding处理大量网络请求阻塞

## 单元测试

TODO:安装基本框架，泡通通用函数测试