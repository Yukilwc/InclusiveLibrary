# Python项目

## 概要

记录python项目级别的配置，搭建，组织



## 指令与工具

### 命令行

安装双版本python时，使用pip安装依赖，更新依赖，查看依赖
```sh
py -3 -m pip install Pillow
py -3 -m pip install --upgrade pip
py -3 -m pip list
py -3 -m pip show Pillow
# 查看过期的库
py -3 -m pip list --outdated
# 根据文件安装依赖
py -3 -m pip install -r requirements.txt
# 安装依赖生成工具 暂时有问题
# py -3 -m pip install pipreqs
```

### 依赖收录

| 依赖名               | 功能 | 安装注意 |
| -------------------- | ---- | -------- |
| pip install selenium |      |          |
|                      |      |          |



## Vscode中使用venv

[参考](https://code.visualstudio.com/docs/python/environments)

* 创建虚拟环境:

```sh
cd project_folder
# 在项目文件夹创建虚拟环境，增加Lib,Scripts文件夹
py -3 -m pip venv ./

```

* 配置Vscode使用虚拟环境的解释器

快捷键ctrl+shift+p,输入`python:select interpreter`,选择本项目下的Scripts文件夹中的解释器。

* 重新打开一个新的terminal
* vscode会自动激活虚拟环境,进入对应的venv状态
* 此时可以在虚拟环境中安装依赖与运行

## python项目代码组织结构

[参考](https://stackoverflow.com/questions/193161/what-is-the-best-project-structure-for-a-python-application)

### 基础知识

没个py文件就是一个模块  
每个模块都有默认名字__name__  
如果文件作为模块导入，__name__则为模块名  
如果文件作为被执行的文件,__name__则为__main__

### 结构目录

Project:
* bin/
  * __init__.py
* lib/
  * __init__.py
* src/
  * test/
  * __init__.py
  * main.py
* setup.py
* README.md
* requirements.txt
* LICENSE

### setup.py
使用setuptools 


## IDE

vim批量缩进  
选中行即可，不用全选，包括替换类似,不用真的选中全部代码，而是命中行
`shift+>`和`shift+<`即可

vscode创建launch.json  
TODO:

vscode断点不生效  
配置中开启`"stopOnEntry": true`

