# model层解析


## sql配置

**user.sql**

```sql
CREATE TABLE `user`
(
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
    `username` varchar(255) NOT NULL UNIQUE COMMENT 'username',
    `password` varchar(255) NOT NULL COMMENT 'password',
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
```

通过`goctl model mysql ddl -src ./*.sql -dir ./model -c`来解析sql文件，生成model层定义与其基本操作方法。

## 多表