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
goctl rpc template -o=user.proto
```

## 文件层次解析

### rpc目录