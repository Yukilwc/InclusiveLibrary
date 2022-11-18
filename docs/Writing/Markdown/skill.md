# Markdown技巧

## 获得目录树

首先安装：

```sh
npm install -g treer
```

安装完成后，使用treer指令生成：
```sh
# 直接打印
treer -d D:\test
# 导出
treer -d D:\test -e D:\export.text
```

导出如下，使用代码模块，类型指定为sh即可：
```sh
├─go.mod
├─go.sum
├─main.go
├─my
| ├─draw
| |  ├─draw.go
| |  └export.go
| ├─color
| |   └color.go
```