# 使用docker开发go-zero

需要编写三个文件

* dockerfile.debug
* docker-compose-debug.yaml
* .env

首先应该研究配置dockerfile，其职责应该是构造出能够run的项目运行环境。

要做到：

* 系统
* golang安装
* goctl安装
* etcd安装？
* 把项目加载为卷
* redis
* debug支持
* 分离golang源码和docker配置


## 参考

[Link](https://juejin.cn/post/7036010137408143373)

[一个开发环境](https://github.com/nivin-studio/gonivinck)