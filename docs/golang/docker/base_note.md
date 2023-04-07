# docker基础笔记

## 基本概念

### docker与传统虚拟化方式有何不同

* 传统虚拟机会虚拟化一套硬件，在其上运行一套完整操作系统
* docker直接运行于宿主内核，也没有硬件虚拟，更加轻量

其又如下好处
* 更高效利用系统资源
* 秒级甚至毫秒级启动速度
* 一致的运行环境，也就内核不一样
* 轻松迁移
* 分层存储与镜像，各重复部分复用简单

## 三个基本概念

### Image

### Container

镜像和容器，关系类似于类和实例，容器是镜像运行得实体。  
容器进程运行于属于自己独立的命名空间，有自己的root文件系统，网络配置，进程空间等。

### Repository

是存储分发镜像的服务。
一个镜像包含多个版本，使用tag来区分版本，格式为 **<仓库名>:<标签>**，如果不给出标签，则默认为latest。

## 安装

### windows10

1. 通过winget安装
```sh
winget install Docker.DockerDesktop
```

2. 直接手动[下载安装](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

3. 使用WSL2，在其上运行docker

推荐使用这种方式，直接安装会发生奇怪的闪退等。

关于通过WSL2安装，有如下步骤：

以管理员身份，命令行运行以下指令：
```sh
# 会安装适用于linux的windows子系统服务
# 之后会下载一个Ubuntu版本
wsl --install
# 开启安装后的子系统服务和虚拟化服务
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
wsl --set-default-version 2
```
完成上述操作后，重启后，才能正常使用windows平台的docker客户端或者使用linux。

运行`wsl -l -v`可以查看当前安装的版本。  
接下来就可以使用docker desktop，或者使用Ubantu安装docker了。

### 国内加速


```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```

## Docker指令

### 工作空间的概念

docker中，操作的各种路径，都是基于工作空间的。  
而工作空间是docker build时，指定的目录，docker会把此目录拷贝一份，作为工作空间。  
如果有些大文件不想拷贝，例如node_modules，则可以创建一个.dockerignore文件，用来在构建工作空间时，忽略拷贝。  

### COPY

从工作空间，拷贝一个文件，到目标路径下。路径可以不存在，会自动创建。 
```dockerfile
COPY package.json /mydir/
```

### ADD

ADD与COPY类似，但是ADD的源路径可以添加远程url，会自动下载存放到指定目标位置。 
但是这个指令并不实用，不如直接使用RUN，然后用wget或者curl工具下载，解压，处理。  

如果 <源路径> 为一个 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，ADD 指令将会自动解压缩这个压缩文件到 <目标路径> 去。

在 Docker 官方的 Dockerfile 最佳实践文档 中要求，尽可能的使用 COPY，因为 COPY 的语义很明确，就是复制文件而已，而 ADD 则包含了更复杂的功能，其行为也不一定很清晰。最适合使用 ADD 的场合，就是所提及的需要自动解压缩的场合。

另外需要注意的是，ADD 指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。

### CMD

用来指定容器的启动命令。CMD可以被`docker run`后面的参数覆盖。  

### ENTRYPOINT

当指定了ENTRYPOINT后，CMD的含义就变成了ENTRYPOINT的参数，实际执行时会变成<ENTRYPOINT> “<CMD>”。

```dockerfile
FROM alpine
ENTRYPOINT ["/bin/echo"]
CMD ["hello, world"]
```

```sh
docker run test-cmd hello, code
```

上面运行时，会先把CMD替换成run后面的参数 `CMD ["hello, code"]`,之后会把CMD本身替换为ENTRYPOINT,也就是变成
`/bin/echo hello, code`

## 多阶段镜像构造

### 意义

### 方法

## 操作容器

## 常用指令收录

### shell

```sh
# 列出容器信息
docker container ls
# 在容器运行一个交互式的shell
# -i, --interactive=true|false 保持 STDIN 打开
# -t, --tty=true|false 为容器分配一个伪终端。
docker run -it my_image
```

### dockerfile

```dockerfile

```

## 知识补全

前台进程：占据终端，无法进行其它操作，终端退出进程停止。  
后台进程：不占据终端，可进行其它操作，终端退出进程停止。  
守护进程：不占据终端，不与终端关联，独立于受控终端。 
nginx默认是按守护进程来运行得。在Docker里，nginx要设置daemon off，变成前台运行，是为了让Docker能够正确地跟踪nginx进程，  
否则容器会在启动后立即停止。这是因为Docker的设计原则是一个容器只运行一个前台进程 ，如果nginx以后台守护进程的方式运行，  
Docker就无法监控它的状态，而且容器内没有其他前台进程，所以容器就会退出 。如果nginx以前台进程的方式运行，Docker就可以监控它的状态，
并且保持容器的运行 。

prune这个单词的发音是/pruːn/,修剪,删除
## 参考

[Docker从入门到实践](https://yeasy.gitbook.io/docker_practice/basic_concept/container)

[Link](https://docs.docker.com/desktop/windows/wsl/)

[Link](https://docs.docker.com/desktop/windows/wsl/)

[安装](https://learn.microsoft.com/zh-tw/windows/wsl/install)

[设定](https://learn.microsoft.com/zh-tw/windows/wsl/setup/environment#set-up-your-linux-username-and-password)

[知乎教程](https://zhuanlan.zhihu.com/p/466001838)

