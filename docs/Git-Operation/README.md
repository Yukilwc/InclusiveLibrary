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

## Github

### ssh key生成

```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

在github的setting-ssh keys中添加生成`id_rsa.pub`文件中的公钥即可