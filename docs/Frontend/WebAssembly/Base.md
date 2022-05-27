# WebAssembly基础

## 概述
## 准备

###  CMake安装

[download](https://cmake.org/download/)  
注意安装时选择添加到系统环境变量

### Visual Studio安装

[download](https://visualstudio.microsoft.com/zh-hans/downloads/)

### Python 2.7.x安装

[download](https://wiki.python.org/moin/BeginnersGuide/Download)  
安装完成后添加环境变量，运行python，生效即可

### 环境变量配置

确认 git，cmake 和 python 已经在你的环境变量里，可以使用

## JS API

### 加载流程

* 获取 .wasm 二进制文件，将它转换成类型数组或者 ArrayBuffer
* 将二进制数据编译成一个 WebAssembly.Module
* 使用 imports 实例化这个 WebAssembly.Module，获取 exports。


## Emscripten

### 安装

## LLVM


## 参考

[面向WebAssembly编程](https://www.cntofu.com/book/150/index.html)