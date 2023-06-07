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

## vars.go

定义一些常量，例如一些Error错误

## model/usermodel_gen.go

自动生成的一套基础Model，包含了业务属性，与定义得一套基础数据库操作。

先定义了一些变量前缀，数据库sql语句拼接字符串，这是使用反射解析User结构体，获取数组，然后拼接得到的。

定义了userModel接口，此接口声明了基础的数据库操作方法。

定义结构体 defaultUserModel，属性包含一个CachedConn和一个字符串 table

CachedConn是一个支持缓存的sql链接。

定义结构体User，其包含了业务属性。

方法newUserModel，实例化defaultUserModel，为其注入数据库链接实例和表名字。

为defaultUserModel添加delete,insert等常用操作方法。

## model/usermodel.go

定义interface  UserModel，嵌入interface userModel。

定义customerUserModel struct,嵌入 defaultUserModel。

func NewUserModel，接收conn,cache config等，返回一个实例化的UserModel。

## 多表