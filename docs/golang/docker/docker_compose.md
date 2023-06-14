# docker compose

## 概要

管理多个容器，通过脚本，快速启动，停止和重启容器。

## 安装

安装docker desktop，其会包含docker engine,docker cli和docker compose。

## Commands 收录

```sh
# 重新编译镜像，并后台运行容器
docker-compose -f ./docker-compose-debug.yml up -d --build
# 启动一组容器，并附着一个指定容器进入命令行模式
docker-compose up -d && docker attach container_name

```

