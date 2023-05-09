# Golang Web后台搭建笔记 快速开始

## 概要

* 搭建
* 配置读取
* 日志
* 路由
* 数据库 orm 配置，以及表生成工具
* 请求 校验
* 如何设计结构，避免go命名空间冲突，需要不断重命名的问题
  构造一个struct，在其基础上，定义方法，如果存在属性，则增加New方法
  构造一个struct，集中全部子模块