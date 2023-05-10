# go-zero 快速开始

## 结构

### API服务



## 一个请求发送到返回的流程

### 文件结构层次

### 请求进入

## 环境安装

```sh
# 安装goctl
go install github.com/zeromicro/go-zero/tools/goctl@latest
# 检查安装成功
goctl -v
# 安装protoc，如果失败，则可以手动从github下载，然后解压，把bin下的执行文件，拷贝到go目录下的bin中
goctl env check -i -f --verbose
# 检查安装成功
protoc --version
# 安装生成go代码的工具
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```