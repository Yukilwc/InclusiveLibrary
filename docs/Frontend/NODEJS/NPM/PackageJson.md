# package.json配置

## 配置详解

### name

发布的包名，这里需要注意一些命名规则即可:
* 不可以点号，下划线开头，也不可出现大写字母。
* 由于要通过此名字，生成npm网址url，因此不可出现url非法字符，例如`#`,空格等等

### version

版本号,其必须能被 [node-semver](https://github.com/npm/node-semver)解析


## 参考

[文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#homepage)