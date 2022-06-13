# Vite+Typescript+vue3发布npm组件

## vite工程搭建

```sh
# 创建项目
npm create vite@latest
```

之后清除默认的components中的HelloWorld组件，添加自己的组件

## 配置

### vite.config.ts

如何配置编译vue组件，获取js文件，类型声明?

### package.json

导入导出:

导出样式包:

tag


## 编译

## 手动发布npm

需要提前注册准备好npm账号

```sh

npm login

npm publish

```

## 推送master分支自动发布npm与release

### NPM_TOKEN配置

### 关于release

## 问题

如何开发和生产分离，防止生产混入app.vue等类型声明

1. 配置`"typings": "./dist_types/components/main.d.ts"`,然后添加npmignore文件去除其它
