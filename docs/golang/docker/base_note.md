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

推荐使用这总方式，直接安装会发生奇怪的闪退等。

具体参考 [Link](https://docs.docker.com/desktop/windows/wsl/),[Link](https://docs.docker.com/desktop/windows/wsl/)

如何安装并设定wsl，参考以下:
[安装](https://learn.microsoft.com/zh-tw/windows/wsl/install)
[设定](https://learn.microsoft.com/zh-tw/windows/wsl/setup/environment#set-up-your-linux-username-and-password)

### 国内加速


```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```

## 参考

[Docker从入门到实践](https://yeasy.gitbook.io/docker_practice/basic_concept/container)