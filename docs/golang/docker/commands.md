# 命令收录

## 指令

```sh
# 运行
# 构建一个镜像。 -t指定镜像名称标签，. 指定dockerfile所在目录
docker build -t vue-nginx .

# 查看全部镜像信息
docker image ls

# 根据镜像启动容器。-d 为后台运行，大概试daemon? , -p是映射容器内部端口到宿主主机的8080端口，从而访问容器内部的Nginx服务器。
# -p 是 hostPort:containerPort
# -it 分配一个交互式终端，如此可以看到容器输出或者执行命令
# --rm 容器退出时删除容器
docker run -it --rm -d -p 8080:80 vue-nginx


# 指定容器名i在 
docker run --name vue-nginx-container -d -p 8080:80 vue-nginx

# 容器启动时，挂载volume
# -v后，有两种写法
# -v volume_name:container_path 是创建一个volume，然后挂载
# -v host_path:container_path 是不创建volume，而是直接把宿主主机的一个路径，挂载到容器路径，这叫做bind mount
docker run -it -v gomodcache:/go/pkg/mod  --rm --name docker_develop_ctnr -d -p 8080:8080 docker_develop
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

# 清除指定镜像
docker rmi nginx:alpine ubuntu:latest

# 清除镜像 清除目标是没有被容器引用的镜像
docker image prune -a

# 构建失败时，如果是一些镜像拉取失败，则可以单独拉取指定镜像
docker pull nginx:alpine@sha256:c94a22b036afa972426b82d5b0a49c959786005b4f6f81ac7467ca5538d0158f

# 在容器中打开一个shell查看信息 例如查看nginx配置是否正确COPY
# 进入容器的交互式shell，可以执行任意命令
docker exec -it <容器ID或名称> /bin/sh
docker inspect <容器ID或名称>
docker ports <容器ID或名称>
docker logs <容器ID或名称>
docker stats <容器ID或名称>
```

## network

```sh
# 查看全部网络
docker network ls
# 查看一个网络下链接的全部容器的信息，包括ip
docker network inspect network_name
```

## dockerfile

## nginx配置

## 指定用户组与用户

```dockerfile
FROM node:14

WORKDIR /vue-setup

RUN npm install -g @vue/cli

# The following commands ensure access to our files
# If we left them out, changing files on our local setup
# would fail due to insufficient permissions. 
RUN userdel -r node

ARG USER_ID

ARG GROUP_ID

RUN addgroup --gid $GROUP_ID user

RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

# Set the active user and open the interactive terminal
USER user

ENTRYPOINT [ "bash" ]

```

* FROM node:14：这是指定基础镜像为node:14，也就是node的14版本
* WORKDIR /vue-setup：这是指定工作目录为/vue-setup，也就是容器内的/vue-setup文件夹
* RUN npm install -g @vue/cli：这是在容器内运行npm命令，全局安装@vue/cli，也就是vue的命令行工具
* RUN userdel -r node：这是删除容器内默认的node用户，因为可能会和本地的用户冲突
* ARG USER_ID：这是定义一个变量USER_ID，用于接收本地的用户ID
* ARG GROUP_ID：这是定义一个变量GROUP_ID，用于接收本地的用户组ID
* RUN addgroup --gid $GROUP_ID user：这是在容器内创建一个新的用户组user，并指定其ID为GROUP_ID
* RUN adduser --disabled-password --gecos ‘’ --uid $USER_ID --gid $GROUP_ID user：
  这是在容器内创建一个新的用户user，并指定其ID为USER_ID，所属用户组为user，并禁用密码和其他信息
* USER user：这是指定容器内运行的用户为user，而不是root
* ENTRYPOINT [ “bash” ]：这是指定容器启动时运行的命令为bash，也就是打开交互式终端


```sh
docker build \
  --build-arg USER_ID=$(id -u) \
  --build-arg GROUP_ID=$(id -g) \
  -t vue_helper - < ./dockerfiles/Setup.Dockerfile
```

* –build-arg：这是用于指定构建镜像时的参数，可以在Dockerfile中使用ARG来接收
* USER_ID：这是一个构建参数的名字，表示用户ID，其值为$(id -u)，也就是本地的用户ID
* GROUP_ID：这是一个构建参数的名字，表示用户组ID，其值为$(id -g)，也就是本地的用户组ID
* -t：这是用于指定镜像的标签，也就是镜像的名字和版本

