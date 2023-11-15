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

### 仓库

```sh
# 查看远程仓库
git remote -v
# 添加远程仓库
git remote add origin [仓库url]
# 切换远程仓库 例如从https得切换为ssh得
git remote set-url origin [仓库url]

```

### 分支


```sh
# 切换到远程分支
git checkout -b 本地分支名 origin/远程分支名

# 本地创建新分支
git checkout -b 分支名

# 查看全部分支
git branch -a

# 删除本地分支

# 删除远程分支
git branch -d 分支名

# 本地分支和远程分支链接

# 合并分支
git merge --no-ff 其他分支名
```

#### 注意

合并分支添加--no-ff理由:



## Github

### ssh key生成

```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

在github的setting-ssh keys中添加生成`id_rsa.pub`文件中的公钥即可