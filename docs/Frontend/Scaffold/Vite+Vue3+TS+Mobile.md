# Vite搭建Vue3+Typescript移动端h5项目模板

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

### types依赖安装

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

## 核心依赖安装与封装

### CSS预处理器

```sh
# 选一个即可
npm add -D sass
# npm add -D less
# npm add -D stylus
```

## 类型技巧

### 全局变量

### 为js库添加类型定义


## 移动端支持

## 其它辅助配置

### console.log去除

### 打包分析工具

### 兼容性处理

### 环境变量配置