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

## 硬件