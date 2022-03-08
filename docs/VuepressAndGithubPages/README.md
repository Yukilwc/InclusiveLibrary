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

5. 新建```/docs/.vuepress/config.ts```文件，作为配置文件
```ts
import {defineUserConfig,DefaultThemeOptions} from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'zh-CN',
  title: '我的博客',
  description: '学习，工作，生活',
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '',
  },
})
```
<!-- TODO: -->
6. 更多关于vuepress的配置与使用，可以看另一篇文章[Link]()

## 自动化部署

### 添加Github Actions

1. 根目录下创建```.github/workflows/deploy.yml```

2. 在github中生成secret key.

在github中，打开 ```setting--Developer Settings--Personal access tokens```,点击generate new token按钮,勾选一些工作流相关的权限后，点击生成token.

3. 给仓库添加Actions secrets.

打开博客仓库，打开```setting--secrets--actions```,点击创建仓库密钥按钮，name字段填入BLOG_TOKEN,该名称必须与yml脚本中的字段同步。之后，在下面填入上一步创建的token,点击完成。

4. 推送本地main分支到远程,在github对应仓库的actions下，可以看到流水线日志.最终应该在仓库中创建了一个新的gh-pages分支，作为vuepress编译的打包文件。

## 参考

[Vuepress v2](https://v2.vuepress.vuejs.org/)

[github docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)