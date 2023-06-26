# goctl笔记

## 概述

本文记录goctl常用的指令，以及一些自己使用时的经验记录。

## 常用指令

```sh
# 生成api文件
goctl api -o my.api
# 根据api文件生成
goctl api go -api ./my.api -dir .
# 生成proto模板
goctl rpc -o=my.proto
# 生成rpc服务代码
goctl rpc protoc my.proto --go_out=. --go-grpc_out=. --zrpc_out=.

# 分组生成rpc服务代码
goctl rpc protoc my.proto --go_out=. --go-grpc_out=. --zrpc_out=. -m
# 根据sql文件生成model
goctl model mysql ddl --src ./*.sql --dir ./model -c
```

## 单体服务项目结构设计

## 微服务项目结构设计