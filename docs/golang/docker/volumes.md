# 卷

如果宿主机和容器都有node_modules文件夹，那么设置volumes挂载node_modules会有以下几种情况：

* 如果你使用了匿名卷，例如"/app/node_modules"，那么容器内的node_modules会覆盖宿主机的node_modules，这可能会导致依赖不一致或者缺失
* 如果你使用了命名卷，例如"node_modules:/app/node_modules"，那么容器内的node_modules会被复制到宿主机的一个特定位置，然后再挂载到容器内，这可能会导致性能下降或者空间占用
* 如果你使用了本地卷，例如".:/app"，那么宿主机的node_modules会覆盖容器内的node_modules，这可能会导致架构不兼容或者版本冲突