# 模块引入

第三方模块的安装和引入已经了解了，接下来探索本地封装的工具方法，该如何引入和使用。

## 创建样例结构

目录下构建如下文件结构，情景为有一个工具文件夹tools，存放了一些通用工具，用户想从顶层`start.py`调用底层工具，同时
工具之间也还存在了相互调用。

其中两个工具函数，各自进入时，会打印自身名字，同时还提供了一个函数供外部调用。并且子目录下，还都添加了`__init__.py`文件，
对于添加了此文件的目录，Python会将其作为模块目录，引入此模块时，会优先执行`__init__.py`文件。

* 根路径
  * start.py
  * tools 
    * net
      * request.py
      * __init__.py
    * tree
      * traversal.py
      * __init__.py

```py
# request.py
import sys
print("request run")
print("sys path in request", sys.path)
def Request():
    print("do request")
# net/__init__.py
print("net init run")
```

```py
# traversal.py
import sys
print("traversal run")
print("sys path in traversal", sys.path)
def Traversal():
    print("traversal")
# tree/__init__.py
print("tree init run")
```

## 原理

首先要了解python解释器查找模块的机制，也就是使用`from module_name import *`的查找机制。

Python解释器在启动时，会维护一个`sys.path`的数组，sys是Python的基础库模块，path是sys内维护的一个数组，该数组存放一组路径，
这些路径就是Python解释器查找模块时的检索目录。

解释器会**优先把启动文件/工作空间的文件夹路径**，加入到`sys.path`的第一位。这其中以脚本文件运行，和以模块运行，所添加的路径会有不同，可在后续样例中了解。

`sys.path`数组里就包含了启动目录，标准库目录，PYTHONPATH环境变量目录，以及三方库的site-packages目录等等，
解析到`import`语句时，解释器就会从`sys.path`所列举的目录中，开始查找是否有匹配的文件/模块。  

## 关于以脚本运行和以模块运行

执行一个Python脚本，可以以如下两种方式运行：

```sh
# 脚本文件
py start.py
# 模块
py -m start
```

模块运行的情景与好处：

以模块运行的方式更适合于那些需要打包和分发的代码，比如库，工具，应用等。
以模块运行的好处是可以保证代码在不同的环境中都能正确地找到依赖的模块，可以避免相对导入的问题，可以让代码更容易重用和测试 。
以模块运行会优先执行目录下的`__init__.py`文件。
如果你的代码是一个完整的包，有多个模块和子包，需要打包和分发给其他人使用，那么你应该使用模块运行的方式，
这样可以保证你的代码在不同的环境中都能正确地工作。

脚本运行的情景：
如果你的代码是一个简单的脚本，只有一个文件，不需要打包和分发给其他人使用，只是为了完成一些临时的任务或者实验，
那么你可以使用脚本运行的方式，这样可以节省一些时间和精力。


## 引入本地文件样例


**以文件方式运行**

下面是一个父子级引入的例子，引入下级的包，其是按文件夹作为路径名的：


这里是一个平级引入的例子：


上述都是通过`py start.py`执行，会发现python解释器自动把根目录添加到了`sys.path`,所以，后续的包引入，都是基于根路径的，才能被找到。  

如果这里是从子级开始执行，那就会报错，例如 `py ./your_package/package2/unit2.py`，因为此时`sys.path`中添加的是unit2.py所在的文件夹为查找路径，是无法找到
与父文件夹同级的模块的。


**以模块方式运行**

当以模块的方式执行python文件，则import相对路径是可以的。同时使用发现，此时`sys.path`添加的是根路径，因此`from your_package.package1 import unit1`
也是可以的。

```sh
py -m your_package.package2.unit2
```


## 关于__init__.py

**集中引入与导出**

首先我们需要了解一个特殊的文件`__init__.py`，当一个文件夹存在此文件，python解释器才能知道，这是一个包文件夹，
从而其它文件可以通过import来将之引入，当引入时，会优先执行一次`__init__.py`文件。

**设计意义**

**关于`__name__=="__main__"`**

## 其它引入方式

既然python解释器是从`sys.path`里查找路径，那么还可以通过append路径的方式，添加要引入的目标目录。
例如把自己所在文件夹加入查找路径：

```py
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from unit2 import Package3Unit2
```

这种方法，缺点是会丢失代码提示，跳转，好处是不论以文件形式还是模块形式运行，都能正确找到导入模块。



## 参考

[init py是什么](https://stackoverflow.com/questions/448271/what-is-init-py-for)