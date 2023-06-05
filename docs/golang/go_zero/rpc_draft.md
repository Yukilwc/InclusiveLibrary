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

