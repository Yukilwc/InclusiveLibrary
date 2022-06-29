# 开始

## 概述

主要记录下windows平台下的环境搭建  
本文全称在vpn环境下搭建，如果没有vpn，则需要进行一些其它配置，例如更换下载文件的源等  
命令行使用vpn可以参考 [命令行工具使用VPN问题](../../Life-Skill/Electronic-Product/Software-Hardware-Questions.md)


## flutter安装

### 安装包

通过git直接下载flutter包
```sh
git clone https://github.com/flutter/flutter.git -b stable
```

::: warning 注意
存放位置，不可以是c盘的一些需要提升权限的位置
:::

### 环境变量配置

把上一步，安装包中的`flutter\bin`路径，添加到path环境变量即可  
例如`D:\sdk\flutter\bin`  
之后运行`where.exe flutter dart`查看位置  
运行`flutter --version`查看版本

## 运行flutter doctor

运行`flutter doctor`,之后按照要求的条目，开始安装即可  

大概还需要如下几个安装:
* android studio安装
* Java安装
* 同意Android Licenses

## Android Studio

1. 安装 [Android Studio](https://developer.android.com/studio)
2. 打开Android Studio,安装各种SDK. 打开Android Studio Setup Wizard安装最新的 Android SDK, Android SDK Command-line Tools, and Android SDK Build-Tools
3. 安装安卓模拟器.
  * 设备启用VM acceleration 
  * 然后在AVD Manager中，创建新的设备。

## Android Licenses

### 安装Java与配置环境变量

需要安装Java以及配置`JAVA_HOME`环境变量。  
Android Studio versions 2.2以上版本自带了JDK,所以应该不需要主动安装Java

### 同意证书

```sh
flutter doctor --android-licenses
```

## windows客户端开发

需要额外安装**Visual Studio 2022**,安装时需要选择**Desktop development with C++**

## 升级

```sh
flutter upgrade
```

## 参考

[文档](https://docs.flutter.dev/get-started/install/windows)