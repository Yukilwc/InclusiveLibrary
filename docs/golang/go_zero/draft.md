# go zero草稿

单体服务与微服务文件层次区别？

考虑跟着这个做一轮？
[Link](https://www.cnblogs.com/kevinwan/p/15821971.html)

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


## api语法

主要分为：

* syntax语法声明
* import语法块
* info语法块
  * 包含多个key value的语法体，是对于一个api服务的描述
  * 是翻译成其它语言时，携带的meta元素
* type语法块
  * 定义一些request和response使用到的类型
  * 兼容go结构体定义语法，以及tag
* service语法块
  * 用于定义api服务
  * 主要是需要声明 handler，request，response

## 文件层次解析

### rpc目录

## 需要修改的

### rpc

* 服务中的配置文件： etc/xx.json,internal/config/config.go
* 服务中业务逻辑编写： internal/logic/xxlogic.go
* 服务中资源上下文编写： internal/svc/servicecontext.go

头部包含DO NOT EDIT的会被强制覆盖，不要修改。

## 一些理论

如果构造单体服务，则只需要使用api指令，把api网关层作为服务即可。

如果构造微服务，则api指令生成网关层，rpc指令生成远程服务层，
api网关层中，创建userclient.go，存放rpc服务对象，提供调用。

修改api文件后，例如修改了路由路径，可以发现，再次生成会覆盖只读文件，同时生成新的文件，并不会覆盖logic文件。

但是如果修改了类型名字，例如把返回类型从CommonResp修改为MsgResp，那么就需要手动调整logic逻辑了。