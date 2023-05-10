# golang操作收录

```sh
# go初始化项目使用module
go mod init <module_name>
# 下载需要的模块，移除未使用的模块
go mod tidy
# 把全局模块拷贝一份到项目中
go mod vendor

# 安装依赖 使用mod后，get会被接管，同步go.mod
go get -u module_name

# go install 是用来编译并安装代码包或可执行文件的命令，
# 它会将编译后的结果放到 $GOPATH/pkg 或 $GOPATH/bin 目录下，以便于重复使用或执行
go install name

# 查看全部环境变量
go env
# 查看指定环境变量
go env <variable name>
# 设置环境变量
go env -w 变量名=设置值
```