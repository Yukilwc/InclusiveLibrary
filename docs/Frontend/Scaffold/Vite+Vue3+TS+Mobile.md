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

TODO:最后添加

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

TODO:最后添加

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
* $patch修改state
* $subscribe使用与自动卸载
* storo之间的相互调用

**启动时/登录时载入基本信息**

### axios

**安装**

使用vueuse集成的useAxios即可  
接口调用也要适应composition api

**配置**

* 超时时间
* baseUrl
* 拦截器
* 错误处理
* header头
* 泛型
* get post formData等划分
* 文件上传下载支持


**API文件设计**

为了常用接口的统一使用管理，以及统一处理

**使用**

### 自动引入组件与方法

### vant ui

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

### 为js库添加类型定义

### 扩充一个带类型的三方库

vue-router 的 RouteMeta

### 引入已经定义的组件或方法的类型

## vue3特性
* plugins
* directives
* filters
* 全局变量与方法
* 全局组件



## 全局样式

### 覆盖样式

移除默认的全局样式，然后添加style文件夹  
内容见模板  
之后在main.ts中引入

### 工具样式

### 图标库

### 导入字体

## 权限体系

### 权限的存储与读取
其与全局store状态中的token同步  
权限的token存储到cookie中，当刷新或者调用接口时，如果cookie失效，则做相应处理  

### 接口控制

## 移动端支持

## 其它辅助配置

### console.log去除

### 打包分析工具
rollup-plugin-visualizer
### 兼容性处理

@vitejs/plugin-legacy

### 环境变量配置

## 优化

### Pre-bunding处理大量网络请求阻塞

## 单元测试