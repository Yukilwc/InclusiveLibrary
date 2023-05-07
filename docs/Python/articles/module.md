# 前端开发的Python学习笔记 包与模块

## 概要

本文介绍Python模块的定义，运行，以及导入的机制与方法。

## 定义

一个.py文件就是一个模块，而一个包含__init__.py的目录，就是一个模块包，他们包含了变量，函数，类等等，提供给外部调用。

一般引入模块的写法有两种：
```py
# 引入模块，使用时通过 模块名.变量名 调用
import module_name
# 将模块的内部变量导入当前命名空间
from module_name import variable_name
```

注意，凡是被import的，不论是包，模块，还是变量，都会作为命名空间，导入到当前上下文中。
而from更多的是提供了一个路径的查找范围。

## 原理

首先要了解Python解释器查找模块的机制，也就是Python执行到`from module_name import module_or_variable`时的查找机制。

Python解释器在启动时，会维护一个`sys.path`的数组(sys是Python的基础库模块，path是sys内维护的一个数组)，该数组存放一组路径，
这些路径就是Python解释器查找模块时的检索目录。
其包含启动目录，标准库目录，PYTHONPATH环境变量目录，以及三方库的site-packages目录等等，
当解析到`import`语句时，解释器就会从`sys.path`所列举的目录中，开始查找是否有匹配的文件/模块。  

当运行Python脚本时，解释器会为`sys.path`添加一个新路径到其中，这个路径，与执行Python文件的方式有关。

* 当以脚本文件执行时，例如`py ./tools/net/request.py`，这时，解释器会把目标文件所在目录，prepend到数组的第一个位置，作为最优先检索的路径，也就是
  会增加`net`文件夹作为查询路径。
* 当以模块方式执行时，例如 `py -m tools.net.request`，这时，解释器会把项目的工作空间目录，作为路径添加到数组第一个位置，作为优先查询路径。

**关于以脚本运行和以模块运行**

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

总之一般以模块方式运行即可。

**相对路径导入与绝对路径导入**

导入模块名时，有两种方法，相对路径导入与绝对路径导入：

* 相对路径导入：`from ..tree.traversal import Func`，仅能使用`from import`的格式，可能看着不那么直观。
* 绝对路径导入：`from tools.tree.traversal import Func`，是推荐的导入方式，直接能看出完整路径，更加直观。

## 实验

下面我们编写一个样例，然后进行引入实验。

### 创建样例结构

目录下构建如下文件结构，情景为有一个工具文件夹tools，存放了一些通用工具，用户想从顶层`main.py`调用底层工具。

其中两个工具函数，各自进入时，会打印自身名字，同时还提供了一个函数供外部调用。并且子目录下，还都添加了`__init__.py`文件，
对于添加了此文件的目录，Python会将其作为模块包，引入此模块时，会优先执行`__init__.py`文件。

* 根路径
  * main.py
  * tools 
    * net
      * request.py
      * `__init__.py`
    * tree
      * traversal.py
      * `__init__.py`

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


### 上层模块引入下层模块

编写main.py文件，目标是调用request.py中的Request方法。其有多种导入和调用方式。

```sh
# 入口为main，以模块方式运行
py -m main
```

```py
# main.py
# 绝对路径 引入模块
import tools.net.request
tools.net.request.Request()
# 别名
import tools.net.request as request
request.Request()
# from import 格式 引入模块
from tools.net import request
request.Request()
# 直接引入模块内的变量
from tools.net.request import Request
Request()
# 相对路径引入
from .tools.net.request import Request
Request()
```

### 引入临近模块

修改request.py文件，让其引入traversal模块，并执行其内部方法。

先以main模块为入口，引入request模块执行:

```sh
# 以main模块为入口
py -m main
```

```py
# main.py
from tools.net import request
request.Request()

# request.py
# 绝对路径 引入模块
from tools.tree import traversal
traversal.Traversal()
# 引入模块内变量
from tools.tree.traversal import Traversal
Traversal()
# 相对路径
from ..tree import traversal
traversal.Traversal()
```

再尝试从request模块单独执行`py -m tools.net.request`，会发现，上述引入方式依然全部有效，因为通过模块方式执行，不论以哪个模块为入口，
`sys.path`都是添加工作空间目录到顶部，进行查询，因此两种入口的执行方式，其最后的导入模块方式也是一致的。
如果通过文件方式运行`py ./tools/net/request.py`，通过request.py文件执行则会报错，无法找到对应模块或者禁止相对路径引入。

### 通过__init__.py集中引入

这样做的好处是可以只暴露想提供的子模块变量，并且也不需要使用者写太长的导入声明。

在tools目录下，添加一个__init__.py文件：

```py
# tools/__init__.py，这两个导入，是把两个子模块，导入到了tools模块包的命名空间之下
from tools.net import request
from tools.tree import traversal

# main.py 中，由此引入tools模块包即可直接调用其命名空间中的两个子模块了
import tools
tools.request.Request()
```


## 关于__init__.py

* 标记该目录是一个Python的模块包(module package)，让Python能够识别和导入该目录下的模块。
* 简化模块操作，可以在该文件中指定默认需要导入的模块。
* 对外提供类型，变量，接口，而对用户隐藏各个子模块的实现细节，做到抽象与封装。

## 关于`__name__=="__main__"`

在大型系统中，经常需要对指定的某个模块，或者某个包进行测试，编写测试代码，但是又不想在系统启动时，执行这些测试代码。
通过`__name__`的一个特性，即可做出不同的分支。

* 当一个py文件被直接执行，则此文件`__name__=="__main__"`
* 如果一个py文件被import执行，则此文件`__name__==模块名`

也就是说，通过添加一个if语句，就能判断模块文件是直接执行，还是被引入执行，从而用来做单一模块的测试。

```py
if __name__=="__main__":
  print("要执行的测试代码")
```

**注意**

如果要调试一个包，则需要给这个包添加一个`__main__.py`文件，在其中使用`if __name__=="__main__"`，否则直接执行包`py -m tools.net`，
会报错`No module named tools.net.__main__; 'tools.net' is a package and cannot be directly executed`，
因为执行包时，解释器会去查询包下的`__main__.py`作为入口。


## 其它
### 其它引入方式

既然python解释器是从`sys.path`里查找路径，那么还可以通过append路径的方式，添加要引入的目标目录。
例如把自己所在文件夹加入查找路径：

```py
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from package import module 
```

这种方法，缺点是会丢失代码提示，跳转，好处是不论以文件形式还是模块形式运行，都能正确找到导入模块。



### 不推荐写法

不推荐使用`from module import *`的写法，这很容易发生命名空间的冲突。

## 参考

[init py是什么](https://stackoverflow.com/questions/448271/what-is-init-py-for)

[相对导入与绝对导入](https://peps.python.org/pep-0328/#id12)