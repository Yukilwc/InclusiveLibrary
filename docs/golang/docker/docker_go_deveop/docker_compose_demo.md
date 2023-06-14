# docker compose启动简单go项目的版本

目标是两个容器，一个后端业务，一个是redis容器。  
二者通过网络连接。

当项目需要启动多个进程，多个容器，单个dockerfile配合tasks.json就不那么好用了，此时，
就需要使用专门的容器编排工具。

docker compose up命令不会自动覆盖镜像和停止删除容器，除非您指定了相关的选项。您可以用以下方法来控制镜像和容器的行为：

* 如果您想在启动容器之前重新构建镜像，可以用--build选项。例如：`docker compose up --build`。
* 如果您想在启动容器之前拉取最新的镜像，可以用--pull选项。例如：`docker compose up --pull missing`。
* 如果您想在启动容器之前强制重新创建容器，可以用--force-recreate选项。例如：`docker compose up --force-recreate`。
* 如果您想在退出命令后停止并删除容器，可以用--abort-on-container-exit选项。例如：`docker compose up --abort-on-container-exit`。
* 如果您想单独删除已停止的容器，可以用docker compose rm命令。例如：`docker compose rm -fsv`。

docker image prune -a选项是用来移除所有未被任何容器引用的镜像的选项1。默认情况下，docker image prune只移除悬空的镜像，也就是没有标签并且没有被任何容器引用的镜像2。使用-a选项可以扩大移除的范围，包括那些有标签但是没有被任何容器引用的镜像2。

例如，如果你有一个名为my-app:latest的镜像，但是没有任何容器使用它，那么运行docker image prune不会移除它，因为它有一个标签。但是如果你运行docker image prune -a，那么它会被移除，因为它没有被任何容器引用。

### 优化

* 你可以使用context和dockerfile选项来指定你的Dockerfile的路径，而不是直接写在build下面。这样可以让你的文件更清晰和灵活。
* 你可以使用container_name选项来给你的服务命名，而不是使用默认的项目名+服务名的组合。这样可以让你更容易地识别和管理你的容器。
* 你可以使用restart选项来设置你的服务的重启策略，比如always或者on-failure。这样可以让你的服务更稳定和可靠。
* 你可以使用.env文件来存储你的服务的环境变量，比如端口号或者密码。这样可以让你的文件更安全和可维护。
* 你可以使用volumes选项来挂载你的服务需要的数据或者配置文件，比如日志或者数据库。这样可以让你的数据更持久和可备份。

基于以上建议，我为你生成了一个优化后的docker-compose文件，如下所示：

```yml
version: '3.9'
services:
  backend:
    container_name: backend
    build:
      context: .
      dockerfile: Dockerfile.debug
    ports:
      - "${BACKEND_PORT}:80"
      - "${DEBUG_PORT}:4000"
    depends_on:
      - redis
    networks:
      - app-network
    restart: always
    volumes:
      - ./logs:/logs
  redis:
    container_name: redis
    image: "redis:alpine"
    ports:
      - "${REDIS_PORT}:6379"
    networks:
      - app-network
    restart: always
    volumes:
      - ./data:/data
networks:
  app-network:
    driver: bridge

```

请注意，这个文件需要和一个.env文件一起使用，其中包含以下内容：

```env
BACKEND_PORT=8088
DEBUG_PORT=4000
REDIS_PORT=6379
```

### volume挂载的使用情景

你可以参考以下内容：

docker volumes是一种将宿主机上的特殊目录挂载到容器中的机制，它由docker完全管理，不依赖于宿主机的目录结构和操作系统。
docker volumes的优点有：

* 可以实现数据的持久化，避免容器删除后数据丢失。
* 可以在多个容器之间共享和重用。
* 可以使用docker命令或API来管理。
* 可以在Linux和Windows容器上工作。
* 可以使用volume driver来存储数据到远程主机或云服务，或者加密数据，或者添加其他功能。
* 可以创建新的volume并由容器预填充内容。
* 在Docker Desktop上，比bind mounts有更高的性能。

docker volumes的常用场景有：

* 存储数据库文件，如MySQL，Postgres等。
* 存储日志文件，如nginx，apache等。
* 存储配置文件，如redis.conf等。
* 存储应用程序数据，如图片，视频等。

## 最终版本

**main.go**

```go
package main

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

var rdb *redis.Client
var ctx = context.Background()

func main() {
	fmt.Println("run main,测试clear")
	initRedis()
	r := gin.Default()
	r.GET("/test", func(c *gin.Context) {
		fmt.Println("hello")
		rdb.Set(ctx, "key", "zzz", 0)
		val, err := rdb.Get(ctx, "key").Result()
		if err != nil {
			c.JSON(200, gin.H{
				"error": err.Error(),
			})

		} else {
			c.JSON(200, gin.H{
				"message": "Hello," + val,
			})

		}

	})
	r.Run(":80")
}

func initRedis() {
	rdb = redis.NewClient(&redis.Options{
		Addr:     "redis:6379", // 这里需要使用compose中的service name作为地址
		Password: "",
		DB:       0,
	})
	// pong, err := rdb.Ping(ctx).Result()
	// fmt.Println(pong, err)
}
```

**Dockerfile.debug**

```dockerfile
FROM golang:1.19-alpine as builder
# 安装编译调试工具
RUN CGO_ENABLED=0 go install -ldflags "-s -w -extldflags '-static'" github.com/go-delve/delve/cmd/dlv@latest
WORKDIR /app
# 安装调试工具
COPY go.mod go.sum ./
RUN GOPROXY=https://goproxy.cn go mod download 
COPY . ./
# build时禁用优化，禁用内联，方便后续调试
RUN CGO_ENABLED=0 GOOS=linux go build -gcflags "all=-N -l" -o server .

FROM alpine:latest
EXPOSE 80 4000
WORKDIR /go/bin
COPY --from=builder /go/bin/dlv ./
WORKDIR /app
COPY --from=builder /app/server ./
CMD ["/go/bin/dlv","--listen=:4000","--headless=true","--log=true","--accept-multiclient","--api-version=2","exec","/app/server"]
# CMD ["./server"]
```

**docker-compose-debug.yml**

```yml
version: '3.9'
services:
  backend:
    image: docker_develop_image
    container_name: docker_develop_container
    build:
      context: .
      dockerfile: Dockerfile.debug
    ports:
      - "${BACKEND_PORT}:80"
      - "${DEBUG_PORT}:4000"
    depends_on:
      - redis
    networks:
      - app-network
    restart: always
    volumes:
      - ./logs:/logs
  redis:
    image: "redis:alpine"
    ports:
      - "${REDIS_PORT}:6379"
    networks:
      - app-network
    restart: always
    volumes:
      - ./data:/data
networks:
  app-network:
    driver: bridge
```

**launch.json**

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name":"Remote docker app",
            "type":"go",
            "request": "attach",
            "mode": "remote",
            "port": 4000,
            "host": "127.0.0.1",
            "preLaunchTask": "debug",
            "postDebugTask": "stop debug"
        }
    ]
}
```

**tasks.json**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "image prune",
      "type": "shell",
      "command": "docker",
      "args": ["image", "prune", "-f"]
    },
    {
      "label": "clear",
      "type": "shell",
      "command": "docker-compose",
      "args": ["-f", "./docker-compose-debug.yml", "down", "-v"]
    },

    {
      "label": "compose up",
      "type": "shell",
      "command": "docker-compose",
      "args": [
        "-f",
        "./docker-compose-debug.yml",
        "up",
        "--detach",
        "--build",
        "--force-recreate"
      ]
    },
    {
      "label": "debug",
      "dependsOrder": "sequence",
      "dependsOn": ["clear", "image prune", "compose up"]
    },
    {
      "label": "stop debug",
      "dependsOrder": "sequence",
      "dependsOn": ["clear", "image prune"]
    }
  ]
}
```

## env

常用的变量放到env中，如此构造时，只修改env即可，这样不会触发镜像重新构造。

## 参考

[compose up 命令行参数](https://docs.docker.com/engine/reference/commandline/compose_up/)

[一个示例](https://github.com/idealism-xxm/debugging-go-in-docker-with-goland-and-vscode/tree/master)