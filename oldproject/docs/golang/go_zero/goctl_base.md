# goctl基础

## 指令收录


**api指令**

```sh
# 生成api文件
goctl api -o blog.api
# 根据api文件生成 api
goctl api go -api blog.api -dir .
```

**rpc指令**

```sh
# 创建greet rpc
goctl rpc new greet
# 生成proto模板
goctl rpc -o=user.proto
# 生成rpc服务代码
goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.
```

**model指令**

支持通过识别mysql ddl,来进行model层代码的生成。(ddl是数据定义语言的缩写，是SQL语句的一种缩写)。

```sh
# 从sql语句生成
goctl model mysql ddl -src="./*.sql" -dir="./sql/model" -c
goctl model mysql ddl -src ./*.sql -dir ./model -c
# 从数据源生成
goctl model mysql datasource -url="user:password@tcp(127.0.0.1:3306)/database" -table="*" -dir="./model"
```

**docker指令**

```sh
goctl docker -go hello.go
```


