# Git常用操作

## Git指令

### config

```sh
# 查看/配置用户名和邮箱
git config --global user.email
git config --global user.name
git config --global user.name myname
git config --global user.email myemail


```

### 分支

切换到远程分支

```sh
git checkout -b 本地分支名 origin/远程分支名
```

## Github

### ssh key生成

```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

在github的setting-ssh keys中添加生成`id_rsa.pub`文件中的公钥即可