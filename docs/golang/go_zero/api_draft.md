# api模块解析

## blog.go

是package main 包，接下来逐行解析：

```go
// 从-f参数，读取配置文件，获取此参数的指针，等后续解析后，就有值了
var configFile = flag.String("f", "etc/blog-api.yaml", "the config file")

func main() {
    // 解析参数
	flag.Parse()
    // 配置结构体实例定义
	var c config.Config
    // 从配置文件读取配置到c中
	conf.MustLoad(*configFile, &c)
    // 通过配置中，接口相关的配置，启动一个web服务
	server := rest.MustNewServer(c.RestConf)
    // defer停止服务
	defer server.Stop()
    // 使用svc中的New方法，构造一个ServiceContext实例
    // 该实例注入了Config 对应RPC客户端实例，例如UserRpc
	ctx := svc.NewServiceContext(c)
    // 给server注册路由，顺便把ctx注入每一个路由处理函数中
	handler.RegisterHandlers(server, ctx)

	fmt.Printf("Starting server at %s:%d...\n", c.Host, c.Port)
    // 启动
	server.Start()
}
```

## etc/blog-api.yaml && internal/config/config.go

yaml是读取的配置 ，config.go是定义存放配置的结构体类型。

在main包中，这套config实例将会通过`svc.NewServiceContext`，来注入到svc实例中，
然后注入各个路由handler之中。

这里我感觉，读取后，也可以注入全局，例如放一个global，然后存入config实例，
提供给非路由handler的服务来使用。

当然也可以不添加global，而是一路作为参数传输。

```go
type Config struct {
    // 默认embed服务器启动用的配置，例如port host等
	rest.RestConf
    // 这是Rpc客户端的配置，例如user rpc 在etcd上的 Hosts,Key
	UserRpc zrpc.RpcClientConf
}
```

```yaml
Name: blog-api
Host: 0.0.0.0
Port: 8888
# User rpc服务
UserRpc: 
  Etcd: 
    Hosts:
      - localhost:2379
    # Key是在etcd服务中的key值
    Key: user.rpc

```

context一路传递的作用：

* 提供公共资源，例如配置实例，数据库操作Model实例

## types/types.go

**不可修改**

api配置文件中，声明得类型，包含请求和返回类型。

## handler/routes.go

注册路由

声明路由得path，method，以及处理的handler，并注入svc

## handler/loginhandler.go

routes注册的handler，其返回一个HandlerFunc。

```go
// 定义一个函数，无receiver，参数注入svc，返回一个handler函数
func LoginHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
        // 可以使用svcCtx,w,r
        // 定义请求体参数实例
        // 从req中，解析请求参数，并注入到请求参数实例中
		var req types.ReqLoginUser
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}
        // 构造对应logic结构体实例，此实例包含了几个属性:request context,service context,logx context,和处理函数
		l := logic.NewLoginLogic(r.Context(), svcCtx)
        // 调用逻辑层处理函数，把req请求作为参数传入
		resp, err := l.Login(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
            // 成功时，写入成功信息
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
```
