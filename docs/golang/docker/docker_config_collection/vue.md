# docker compose开发vue项目


热更新无法实现，挂载到宿主机后，node_modules也必须使用容器架构的，所以配置了匿名卷，导致热更新失效。

```dockerfile
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json ./

# 宿主机环境不一致，不能使用宿主的node_modules，必须使用容器内的
RUN npm --registry https://registry.npm.taobao.org install 

CMD ["npm","run","dev"]
```

```yml
version: '3.9'
services:
  frontend:
    image: docker_vue_develop_image
    container_name: docker_vue_develop_container
    build:
      context: .
      dockerfile: ./dockerfiles/Dev.dockerfile
    volumes:
      - ".:/app"
      # 匿名卷
      - "./node_modules:/app/node_modules"
    ports:
      - "5173:5173"
```

```sh
docker-compose -f ./docker-compose-debug.yml up -d --build --force-recreate
```

## 参考

[一步步使用docker进行vue开发](https://dev.to/tqbit/a-step-by-step-guide-to-vue-development-with-docker-part-one-5ap4)

[Link](https://juejin.cn/post/7000579016147075079)