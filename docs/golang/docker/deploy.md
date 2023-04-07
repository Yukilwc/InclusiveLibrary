# 部署实验

```sh
# 运行
# 构建一个镜像。 -t指定镜像名称标签，. 指定dockerfile所在目录
docker build -t vue-nginx .
# 根据镜像启动容器。-d 为后台运行，大概试daemon? , -p是映射容器内部端口到宿主主机的8080端口，从而访问容器内部的Nginx服务器。
docker run -d -p 8080:80 vue-nginx

# 指定容器名i在 
docker run --name vue-nginx-container -d -p 8080:80 vue-nginx
# 查看容器信息
docker ps

# 停止容器运行 名字从查看容器信息表格的NAMES列找
docker stop container_name

# 删除容器
docker rm <container>
# 删除容器与关联的卷
docker rm -v web_server
# 删除已经停止的容器
docker container prune

# 清除镜像 镜像存放在哪里？

# 构建失败时，如果是一些镜像拉取失败，则可以单独拉取指定镜像
 docker pull nginx:alpine@sha256:c94a22b036afa972426b82d5b0a49c959786005b4f6f81ac7467ca5538d0158f
```