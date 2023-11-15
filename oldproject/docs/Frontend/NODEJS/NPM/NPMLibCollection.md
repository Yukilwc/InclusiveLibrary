# NPM收录

## 简要库

| name   | description                                        |     |
| ------ | -------------------------------------------------- | --- |
| mkcert | 本地生成https证书，nuxtjs项目使用https访问时会用到 |     |
|        |                                                    |     |
## 详细库介绍
### npm-check

``` sh
npm install -g npm-check

```
参数参考:  
* -u, --update       显示一个交互式UI，用于选择要更新的模块，并自动更新"package.json"内包版本号信息
* -g, --global       检查全局下的包
* -s, --skip-unused  忽略对未使用包的更新检查
* -p, --production   忽略对"devDependencies"下的包的检查
* -d, --dev-only     忽略对"dependencies"下的包的检查
* -i, --ignore       忽略对指定包的检查.
* -E, --save-exact   将确切的包版本存至"package.json"(注意，此命令将存储'x.y.z'而不是'^x.y.z')