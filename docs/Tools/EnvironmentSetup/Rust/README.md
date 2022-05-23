# Rust环境搭建


## Windows平台

### 下载

[下载工具链管理器rustup](https://www.rust-lang.org/tools/install)

安装后，会自动进行环境变量的配置，重启命令行工具即可生效

安装后的常用文件:
* rustup 管理工具，用于升级等
* rustc 是rust compiler
* cargo 是rust包管理器
* rust-std 是rust标准库
* rust-docs 是文档

这些文件，如果是默认安装，应该都在`User/.cargo/bin`文件夹内

下载成功后，运行`rustc --version`能正确输出版本即可

## 参考

[Rust文档](https://www.rust-lang.org/)