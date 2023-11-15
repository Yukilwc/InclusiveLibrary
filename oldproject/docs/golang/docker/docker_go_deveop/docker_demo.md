# 纯docker启动简单go的版本

**main.go**

```go
package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("run main")
	r := gin.Default()
	r.GET("/test", func(c *gin.Context) {
		fmt.Println("hello")
		c.JSON(200, gin.H{
			"message": "Hello",
		})
	})
	r.Run(":80")
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

**task.json**

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "clearContainer",
      "type": "shell",
      "command": "docker",
      "args": ["rm","-f", "docker_develop_container"]
    },
    {
      "label": "clearImage",
      "type": "shell",
      "command": "docker",
      "args": ["rmi","-f","docker_develop_image"]
    },

    {
      "label": "build",
      "type": "shell",
      "command": "docker",
      "args": [
        "build",
        ".",
        "--tag",
        "docker_develop_image",
        "--file",
        "Dockerfile.debug"
      ]
    },
    {
      "label": "run",
      "type": "shell",
      "command": "docker",
      "args": [
        "run",
        "-d",
        "-it",
        "--rm",
        "-p",
        "8088:80",
        "-p",
        "4000:4000",
        "--name",
        "docker_develop_container",
        "docker_develop_image"
      ]
    },
    {
      "label": "debug",
      "dependsOrder": "sequence",
      "dependsOn": ["clearContainer","clearImage","build", "run"]
    },
    {
        "label": "stop debug",
        "dependsOrder": "sequence",
        "dependsOn":["clearContainer","clearImage"]
    }
  ]
}
```