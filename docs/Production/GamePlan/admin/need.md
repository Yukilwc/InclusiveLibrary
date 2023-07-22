# 游戏计划 后台需求

## 技术选型

前端框架为 vue3+vite+ts+pinia
前端UI框架使用ant design vue，按需引入

后端使用golang，微服务架构，etcd分布式键值存储，mysql作数据库，redis做缓存。
暂时不添加其他链路跟踪，服务发现等框架。

## 需求流程

* 用户注册:填写 昵称，邮箱，密码，确认密码，密码需要加密后，存入数据库
* 用户登录:填写 邮箱，密码
* 登陆后，导航栏显示昵称，头像，登出
* 侧边栏菜单，系统管理--成员管理 
* 成员管理
  * 筛选区域： 昵称 邮箱
  * 分页表格： 全字段，密码除外
  * 修改弹窗：新增，修改 全字段
  * 禁用，删除

## 后续功能

角色/权限体系，审核体系

## 数据库通用字段设计

deleted_at,created_at,updated_at,created_by,updated_by


## 用户注册

用户表 gp_user

id,email,phone,nickname,username,avatar,enable

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
  avatar VARCHAR(255) NOT NULL
);
```

* 数据库名字为 gameplan，表为 gp_user
* 测试环境链接用户为 testadmin, pw 123456
* 注册接口，必填邮箱，昵称,密码
* 密码校验是否一致，是否符合限制格式，字母+数字即可
* 邮箱校验格式，邮箱判重
* 设计jwt的刷新，以及用户资料变更时的更新机制
* insert数据
* 返回token
* 统一code=1为成功，msg存放信息


## 用户登录

