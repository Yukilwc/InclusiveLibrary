# golang操作收录

```sh
# go初始化项目使用module
go mod init <module_name>
# 下载需要的模块，移除未使用的模块
go mod tidy
# 把全局模块拷贝一份到项目中
go mod vendor

# 查看全部环境变量
go env
# 查看指定环境变量
go env <variable name>
# 设置环境变量
go env -w 变量名=设置值
```