# rpc解析

## user.proto

请求与返回的类型定义.

```proto
syntax = "proto3";

package user;
option go_package="./user";

message ReqLoginUser {
  string username = 1;
  string password = 2;
}

message RespLoginUser {
  string token = 1;
}

message ReqAddUser {
  string username = 1;
  string password = 2;
  string email = 3;
}

message MsgResp {
  int64 code = 1;
  string msg = 2;
}

message UserId {
  int64 id = 1;
}

message UserInfo {
  int64 id = 1;
  string username = 2;
  string email = 3;
}

service User {
  rpc login(ReqLoginUser) returns(RespLoginUser);
  rpc add(ReqAddUser) returns(MsgResp);
  rpc get(UserId) returns(UserInfo);
}
```

## user.go

```go
// 命令行配置
var configFile = flag.String("f", "etc/user.yaml", "the config file")

func main() {
	flag.Parse()
    // 实例化配置文件
	var c config.Config
	conf.MustLoad(*configFile, &c)
    // 构造上下文，并把配置注入ctx中
	// 该上下文主要包含了config，model
	ctx := svc.NewServiceContext(c)
    // 通过config中的rpc服务配置，启动服务
	s := zrpc.MustNewServer(c.RpcServerConf, func(grpcServer *grpc.Server) {
    // 为启动的服务，注册业务服务，业务服务就是proto中定义的services
		user.RegisterUserServer(grpcServer, server.NewUserServer(ctx))

		if c.Mode == service.DevMode || c.Mode == service.TestMode {
			reflection.Register(grpcServer)
		}
	})
	defer s.Stop()

	fmt.Printf("Starting rpc server at %s...\n", c.ListenOn)
	s.Start()
}
```


## etc/user.yaml

其对应了rpc服务的配置，以及etcd配置，还有数据库配置，redis缓存配置

```yaml
Name: user.rpc
ListenOn: 0.0.0.0:8080
Etcd:
  Hosts:
  - 127.0.0.1:2379
  Key: user.rpc
DataSource: root:123456@tcp(localhost:3306)/gozerodemo
Table: user
Cache: 
  - Host: localhost:6379
```

## types/user/user.pb.go

pb是proto buffer，表示是proto生成得代码。

包含了proto中，参数请求与返回的类型定义，以及为其添加了一些基础方法。

## types/user/user_grpc.pb.go

### client定义

定义userClient,userServer相关的结构体，结构，方法定义

首先定义一组常量，描述定义得方法，在service中的具体路径。

接着，定义了UserClient这个interface，其声明了业务方法。

定义userClient结构体，与其New方法。
结构体内部属性是`cc grpc.ClientConnInterface`，其在调用new实例化时传入。

userClient作为receiver，在其上定义了业务方法Login等，其实现了UserClient接口。

业务方法，例如Login，内部实现，是使用client中的cc，也就是ClientConnInterface上的Invoke方法，
调用最开始定义得方法全路径，并传入请求和返回的指针。Invoke完成后，resp结构体内就有了数据。

### server定义

定义UserServer接口，包含了业务方法声明。

定义一个UnimplementedUserServer结构体，顾名思义，也就是未实现的Server，其业务方法都返回error。

定义UnsafeUserServer，不知道干啥用的。

定义了业务handler方法，例如` _User_Login_Handler`,为什么会有这层handler呢？

定义变量 User_ServiceDesc，描述了服务的名字，以及处理的handler。

这些描述，会在 RegisterUserServer这个方法中，注册服务时，作为参数传入。
## userclient/user.go

提供用来调用的userclient客户端