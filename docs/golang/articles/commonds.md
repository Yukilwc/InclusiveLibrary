# golang操作收录

```sh
# go初始化项目使用module
go mod init <module_name>
# 下载需要的模块，移除未使用的模块
go mod tidy
# 把全局模块拷贝一份到项目中
go mod vendor

```