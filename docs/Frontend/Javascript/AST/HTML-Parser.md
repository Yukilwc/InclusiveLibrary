# HTML语法树解析

## 准备工具

### babel 

```sh
npm i @babel/preset-env @babel/register -D

```

添加`.babelrc`

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}

```

重命名文件Rename gulpfile.js to gulpfile.babel.js

[支持ES6](https://stackoverflow.com/questions/43681396/syntaxerror-unexpected-token-import-import-as-gulp-from-gulp)
[支持TS](https://stackoverflow.com/questions/49847926/how-can-i-run-gulp-with-a-typescript-file/49849088#49849088)
### gulp

### Cheerio

[文档](https://github.com/cheeriojs/cheerio/wiki/Chinese-README)

核心api

* map
* each
* html
* parseHTML
* load
* attr

## 示例

### 自动化解析替换小程序wxml内中英文

流程:
* 遍历js节点
* 匹配双花括号内容，进行替换
* 匹配非双花括号内容，进行替换

[源码地址]()

### 计算相对路径并自动引入