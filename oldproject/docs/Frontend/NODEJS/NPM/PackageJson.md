# package.json配置

## 概述

记录一部分package.json配置,用作日后使用时的快速查询。

## 配置详解

### name

发布的包名，这里需要注意一些命名规则及建议即可:
* 不可以点号，下划线开头，也不可出现大写字母。
* 由于要通过此名字，生成npm网址url，因此不可出现url非法字符，例如`#`,空格等等
* 需要在npm网站查询下，是否已经存在了同名包

### version

版本号,其必须能被 [node-semver](https://github.com/npm/node-semver)解析

### description,keywords

这两个字段配置后用来被检索查询

### homepage

项目首页的地址

### bugs

包含url和email的对象，分别对应github issue地址和邮箱地址

```json
{
  "url" : "https://github.com/owner/project/issues",
  "email" : "project@hostname.com"
}

```

### license

证书，可以直接是一个字符串，需要是标准的[协议identifier](https://spdx.org/licenses/),也可以配置为对象或者数组，指定协议的url.

### author,person,contributors

一些作者，贡献者的信息

### files

其类型是一个文件pattern的数组,其pattern解析规则和`.gitignore`一致  
其描述的是作为npm依赖所包含的全部文件，也就是发布时需要上传的文件  

`.npmignore`和`.gitignore`可以影响文件是否被包含，一般优先顺序是:
* 根目录存在`.gitignore`和`.npmignore`时，`.npmignore`会被忽略，npm会使用`.gitignore`
* 优先级上，子目录`.npmignore`>files数组>根目录`.npmignore`
* 部分文件必定被包含

### main


其作为外部调用的入口,如果没有设定，默认为`index.js`  
此处一般要放一个生产环境打包好的commonjs入口文件?提供给浏览器或者node端通过require导入时使用

### browser

如果库明确是在浏览器环境使用，则此字段竟会替代main字段，作为导入的入口  

### bin

其作为可执行指令的入口，`npm run vuepress dev docs`

```json

"bin": {
    "vuepress": "bin/vuepress.js"
},


```

如果直接作为字符串，例如rimraf的`"bin": "./bin.js",`，则默认包名作为指令运行`npm run rimraf`

### directories

用来指定一个目录的全部文件，而不需要挨个单独指定声明  

### repository

指定仓库路径

### config

用来设置一些包脚本需要使用到的参数，类似环境变量？例如下面的变量`npm_package_config_port`

```json
"config": {
    "port": "8080"
}
```

### dependencies

依赖项的map

### devDependencies

测试,框架,编译等非用于生产的依赖项

### type

### exports

Nodejs12+以后支持，作为main的替代选项  

[具体参考](https://nodejs.org/api/packages.html#conditional-exports)

### typings/types

声明类型文件的入口

[文档](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)

## 参考

[文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#homepage)

[browser，module，main](https://github.com/SunshowerC/blog/issues/8)


[Nodejs](https://nodejs.org/api/packages.html#packages_exports)