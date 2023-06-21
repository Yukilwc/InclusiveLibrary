# 游戏计划 后台需求

## 用户登录

用户表 gp_user

id,email,phone,nickname,username,avatar

```sql
CREATE TABLE gp_user (
  -- id字段，整数类型，主键，自增
  id INT PRIMARY KEY AUTO_INCREMENT,
  -- email字段，字符串类型，唯一，非空
  email VARCHAR(255) UNIQUE NOT NULL,
  -- phone字段，字符串类型，唯一，非空
  phone VARCHAR(255) UNIQUE NOT NULL,
  -- nickname字段，字符串类型，非空
  nickname VARCHAR(255) NOT NULL,
  -- username字段，字符串类型，非空
  username VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL
);
```

* 用户登录:填写 邮箱，用户名，密码，确认密码
* 登陆后，导航栏显示用户名，头像，登出
* 
