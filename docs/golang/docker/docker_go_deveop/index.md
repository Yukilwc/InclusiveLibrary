# 使用docker本地开发调试golang项目

## 概要

统一开发与生产环境。

前提：安装好了docker desktop，以及go开发环境。


## 普通的本地调试

首先我们构造一个普通的go web项目，然后在本地运行：

```sh
go get -u github.com/gin-gonic/gin
```

```go
// main.go
package main
import "github.com/gin-gonic/gin"
func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello",
		})
	})
	r.Run(":8080")
}
```

普通的在本地运行一下，验证返回正确即可：

```sh
go run main.go
curl -method get -uri http://localhost:8080
```

这样，安装好依赖，写好代码，运行即可在本地开发调试go项目。

## 使用docker开发调试

这里使用一个测试用例，然后构造一个基本镜像，以此为基础，使用一些方案，解决各种问题。

### 简单镜像

接着上述的项目，添加一个`Dockerfile`文件，用来构建镜像使用。

先添加一个最简单直白的配置：

```dockerfile
FROM golang:1.19-alpine

WORKDIR /app

COPY . ./

RUN go mod tidy

RUN go build -o server

CMD ["./server"]
```


```sh
# 运行指令，构造镜像
docker build -t docker_develop .
# 从镜像实例化容器
docker run -it --rm --name docker_develop_ctnr -d -p 8080:8080 docker_develop
# 查看镜像信息 此时镜像有百M大小
docker image ls
# 查看容器
docker container ps
# 测试接口
curl -method get -uri http://localhost:8080
# 查看日志
docker logs docker_develop_ctnr
```

如此，就通过docker，运行起了一个简单的go web项目。

我们可以发现，这样运行有很多缺陷：

* 镜像过大，镜像容纳了golang环境，每次还都需要拷贝全部源码到工作目录下，但是其实最后仅仅需要一个可执行文件而已。
* `go mod tidy`，每次都进行了重复下载。因为修改源码后，`COPY . ./`发生了变化，
  会重新开始构造自身以及之后的镜像层，因此每次都会重复执行下载依赖的操作。
* 查看日志困难，难以例用vscode的能力去调试断点，每次只能执行编译后的二进制文件，不方便调试。
* 没有热更新，每次修改代码后，都需自己去重新执行一遍上述的镜像构建和容器实例化流程。

接下来我们逐个解决上述问题。

### 多阶段构建解决镜像过大问题

由于我们仅仅需要最后编译后的二进制，因此我们可以把编译流程和生产运行流程分离，
各自构造镜像。

```dockerfile
FROM golang:1.19-alpine as builder

WORKDIR /app

COPY . ./

RUN GOPROXY=https://goproxy.cn go mod tidy && \ 
    CGO_ENABLED=0 GOOS=linux go build -o server .

FROM alpine 

WORKDIR /app

COPY --from=builder /app/server .

CMD ["./server"]
```

之后重新编译镜像，以及运行容器，发现此时镜像体积就只有10.4MB了。

### 修改源码导致重复下载依赖的问题

在镜像构建过程中，由于文件变化，需要重新下载go依赖，这在打包发布时可以接受，
但是是调试运行，则成本耗时太高，因此需要做到修改源码后，不需要重新执行
`go mod tidy`或者`go mod download`。

**分离依赖安装与源码编译**

源码改动，是在`COPY . ./`这一层镜像构造时，计算到了变化，从而引起后续全部镜像层重构，那么，
我们就可以把安装依赖提前，和源码编译分离，如此普通代码的修改就不会触发依赖重新安装。

```dockerfile
FROM golang:1.19-alpine as builder
WORKDIR /app
COPY go.mod go.sum .
RUN GOPROXY=https://goproxy.cn go mod download 
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -o server .

FROM alpine
WORKDIR /app
COPY --from=builder /app/server .
CMD ["./server"]
```

接着重新构造镜像，然后修改一点源码，再构建，发现不会触发重复的依赖下载了。

上述方法，仅仅做到了修改源码后不触发，但是如果是执行了`go get`或者`go tidy`等操作，
从而更新了`go.mod`文件，那就依旧会触发重新下载。

### go.mod更新后重复下载多余依赖的问题--使用vendor

可以使用`go mod vendor`，其能够把go.mod文件中的依赖，下载到项目根目录下，然后docker构建时，把vendor拷贝到工作空间，
如此，也就不需要在docker中，进行依赖下载了。  

但是这样带来的问题是，依赖是在windows下载，在linux系统下做编译使用，总是不一致的。

这种思路的本质，就是把难处理的依赖安装，这个职责，放到本地来做，而不在docker中做，此种做法和上面go.mod变动法各有优劣。

```dockerfile
FROM golang:1.19-alpine as builder
WORKDIR /app
COPY vendor/ .
COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -mod=vendor -o server .

FROM alpine
WORKDIR /app
COPY --from=builder /app/server .
CMD ["./server"]
```


## vscode配置

### 基础知识(待整理)

**launch.json配置**

* type: 指定调试器的类型，例如docker，go。
  * 设置为go，表示使用go的调试器，可以调试本地或远程的go程序。
  * type 设置为 docker ，表示使用 docker 的调试器，可以调试在 docker 容器中运行的程序，支持 node.js ，python 和 .net 三种平台
* preLaunchTask:指定启动调试前，要运行的任务名称。
* request: 可以是launch或者attach。
  * launch 模式是指 vscode 启动一个程序并附加调试器到它，可以控制程序的运行和停止。
  * attach 模式是指 vscode 连接到一个已经运行的程序或进程，并附加调试器到它，不能控制程序的运行和停止。
  * 对目标程序，必须是以debug模式启动的才能调试。
* mode:调试器的模式，例如go支持debug,remote,exec,test等。
* program:指定要调试的程序或进程路径。
* args: 要传递给程序或进程的命令参数。

### docker镜像构建与容器启动

我们需要能够在Vscode中，启动调试时，自动构建镜像，然后启动容器，而不是每次都要手动输入指令。

### 断点调试

要调试查看变量等，总不能全程`print`，还是得借助调试工具，添加断点，实时查看各种变量信息。

## go-zero

## 远程开发

## 参考

[vscode docker debug](https://code.visualstudio.com/docs/containers/debug-common)

## 随笔记录

调试go需要使用delve这个调试器。

vscode天然只支持nodejs，python和.net的docker调试。