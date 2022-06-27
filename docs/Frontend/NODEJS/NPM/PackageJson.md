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
## 参考

[文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#homepage)