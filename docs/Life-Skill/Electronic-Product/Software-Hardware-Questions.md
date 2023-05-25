# 软硬件相关问题

## 软件

问题描述: 台式机天线干涉蓝牙鼠标信号，导致鼠标移动出现不稳定。

解决方案:

参考资料:
* [Link](https://www.zhihu.com/question/21861177)

问题描述: Windows Terminal运行脚本报错
![Link](./images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220428004112.png)

解决方案:  
以管理员身份打开，执行`get-executionpolicy`,打印结果是`Restricted`,表示允许单个命令，但是不允许脚本。  
之后，执行`set-executionpolicy remotesigned`,修改执行策略，即可执行脚本.

### 命令行工具使用VPN问题

使用powershell好像直接可以连接系统代理的vpn，可以使用`curl https://www.google.com `测试  
如果是使用cmd，需要配置环境变量如下
```sh
# cmd
set http_proxy="http://localhost:10080"
set https_proxy="http://localhost:10080"
# powershell
$env:http_proxy="http://localhost:10080"
$env:https_proxy="http://localhost:10080"
# 成功后验证,存在返回即成功.返回无法连接到远程服务器即失败
curl www.google.com
```

**new bing自动切换国内**

edge浏览器会自动锁定为中国地区，就算改成美国了，也会自动改回来解决办法：输入edge://settings/searchEngines 
点击添加
输入信息：
搜索引擎：bing
快捷方式：www.bing.com
以 %s 代替查询的 URL: https://www.bing.com/search?q=%s


## 硬件