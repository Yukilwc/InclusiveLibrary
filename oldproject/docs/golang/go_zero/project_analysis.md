# 一些项目的分析

[来源](https://github.com/zeromicro/awesome-zero)

## go-zero-mall

[go-zero-mall](https://github.com/nivin-studio/go-zero-mall)

* common 存放通用工具方法
* service
  * user
    * api
    * rpc
    * model

以上更下层的结构，就是goctl生成的基础结构。

## go-zero-looklook

[go-zero-looklook](https://github.com/Mikaelemmmm/go-zero-looklook)


其使用nginx作为网关，分发请求，到不同的微服务。

每个微服务，又区分了api和rpc层，api每个微服务仅一个，用来聚合后面的rpc层。

可以学习到的，是api分层导入，还有