# 常用命令行

## 默认cmd

```sh
# 查看命令位置
where py
```

## powershell

```sh
# 查看命令位置
where.exe py
# 查看环境变量
$env:PY_PYTHON
# 设置环境变量
$env:PY_PYTHON = 3

```

使用curl

```sh
# 一定要带着.exe
curl.exe -i -X GET http://localhost:8888/api/order/get/1
```

使用Invoke-WebRequest

[文档](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.3)

```sh
# 不带.exe,就是作为Invoke-WebRequest的别名
curl -Method GET -Uri http://localhost:8888/api/order/get/1
```