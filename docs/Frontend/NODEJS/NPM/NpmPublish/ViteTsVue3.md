# Vite+Typescript+Vue3发布npm组件

## vite工程搭建

首先，依据[Vite官方文档](https://vitejs.dev/guide/)，搭建工程。  
命令行执行过程中，选择使用vue3,typescript。  
搭建完成后，就可以在`/src/components`文件夹中，编写自己的组件。

```sh
# 创建项目
npm create vite@latest
```


## 编译

在编写完成组件后，接下来就是编译。  
对于此项目来说，需要
1. 提取全部`vue`,`ts`文件的类型声明，获取`.d.ts`文件，作为npm包的类型文件。
2. 编译打包`vue`,`js`文件为 `.es.js`和`.umd.js`文件，分别提供用于`import`和`require`来引入。
3. 提取`vue`文件中的样式为独立的`.css`文件,用于单独进行引入.当然也可直接打包进步骤2的js文件中,作为内联css,具体参考 [github issue](https://github.com/vitejs/vite/issues/1579) [知乎](https://www.zhihu.com/question/470701634)。

为了完成上述编译流程，需要配置以下三个文件

### package.json

导入导出:

导出样式包:

tag

sideEffects



### tsconfig.json

### vite.config.ts

如何配置编译vue组件，获取js文件，类型声明?


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

[参考](https://npm.github.io/publishing-pkgs-docs/publishing/the-npmignore-file.html)


## 参考资料

[Vite build library mode](https://vitejs.dev/guide/build.html#library-mode)
