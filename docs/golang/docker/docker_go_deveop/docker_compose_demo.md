# docker compose启动简单go项目的版本

目标是两个容器，一个后端业务，一个是redis容器。  
二者通过网络连接。

当项目需要启动多个进程，多个容器，单个dockerfile配合tasks.json就不那么好用了，此时，
就需要使用专门的容器编排工具。

docker compose up命令不会自动覆盖镜像和停止删除容器，除非您指定了相关的选项。您可以用以下方法来控制镜像和容器的行为：

* 如果您想在启动容器之前重新构建镜像，可以用--build选项2。例如：`docker compose up --build`。
* 如果您想在启动容器之前拉取最新的镜像，可以用--pull选项2。例如：`docker compose up --pull missing`。
* 如果您想在启动容器之前强制重新创建容器，可以用--force-recreate选项2。例如：`docker compose up --force-recreate`。
* 如果您想在退出命令后停止并删除容器，可以用--abort-on-container-exit选项2。例如：`docker compose up --abort-on-container-exit`。
* 如果您想单独删除已停止的容器，可以用docker compose rm命令3。例如：`docker compose rm -fsv`。

### 优化

* 你可以使用context和dockerfile选项来指定你的Dockerfile的路径，而不是直接写在build下面。这样可以让你的文件更清晰和灵活。
* 你可以使用container_name选项来给你的服务命名，而不是使用默认的项目名+服务名的组合。这样可以让你更容易地识别和管理你的容器。
* 你可以使用restart选项来设置你的服务的重启策略，比如always或者on-failure。这样可以让你的服务更稳定和可靠。
* 你可以使用.env文件来存储你的服务的环境变量，比如端口号或者密码。这样可以让你的文件更安全和可维护。
* 你可以使用volumes选项来挂载你的服务需要的数据或者配置文件，比如日志或者数据库。这样可以让你的数据更持久和可备份。

基于以上建议，我为你生成了一个优化后的docker-compose文件，如下所示：

```yml
version: '3.9'
services:
  backend:
    container_name: backend
    build:
      context: .
      dockerfile: Dockerfile.debug
    ports:
      - "${BACKEND_PORT}:80"
      - "${DEBUG_PORT}:4000"
    depends_on:
      - redis
    networks:
      - app-network
    restart: always
    volumes:
      - ./logs:/logs
  redis:
    container_name: redis
    image: "redis:alpine"
    ports:
      - "${REDIS_PORT}:6379"
    networks:
      - app-network
    restart: always
    volumes:
      - ./data:/data
networks:
  app-network:
    driver: bridge

```

请注意，这个文件需要和一个.env文件一起使用，其中包含以下内容：

```env
BACKEND_PORT=8088
DEBUG_PORT=4000
REDIS_PORT=6379
```

### volume挂载的使用情景

你可以参考以下内容：

docker volumes是一种将宿主机上的特殊目录挂载到容器中的机制，它由docker完全管理，不依赖于宿主机的目录结构和操作系统。
docker volumes的优点有：

* 可以实现数据的持久化，避免容器删除后数据丢失。
* 可以在多个容器之间共享和重用。
* 可以使用docker命令或API来管理。
* 可以在Linux和Windows容器上工作。
* 可以使用volume driver来存储数据到远程主机或云服务，或者加密数据，或者添加其他功能。
* 可以创建新的volume并由容器预填充内容。
* 在Docker Desktop上，比bind mounts有更高的性能。

docker volumes的常用场景有：

* 存储数据库文件，如MySQL，Postgres等。
* 存储日志文件，如nginx，apache等。
* 存储配置文件，如redis.conf等。
* 存储应用程序数据，如图片，视频等。

## 参考

[compose up 命令行参数](https://docs.docker.com/engine/reference/commandline/compose_up/)

[一个示例](https://github.com/idealism-xxm/debugging-go-in-docker-with-goland-and-vscode/tree/master)