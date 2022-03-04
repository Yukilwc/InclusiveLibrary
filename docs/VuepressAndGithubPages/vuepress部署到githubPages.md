# 使用vuepress2.0和github pages搭建个人博客

## 前言

## 基础工程搭建 

### 创建一个github仓库

在自己的账号上，任意创建一个github仓库，并将改仓库clone到本地。

### 创建vuepress项目

1. 在clone到本地的仓库文件夹中，安装vuepress框架

```sh
npm install -D vuepress@next
```

2. 在package.json文件中，配置启动和编译的脚本,个人喜欢使用```npm run dev```和```npm run build```

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

3. 别忘了添加一个.gitignore文件,用来忽略一些依赖和缓存的git版本控制

```
node_modules
.temp
.cache
```

4. 在根目录下，创建一个docs文件夹，并添加一个README.md文件,添加内容

```md
# hello vuepress
```
接着，在根目录下执行```npm run dev```,启动项目，可以在启动网址中看到初始画面

## 参考

[Vuepress v2](https://v2.vuepress.vuejs.org/)