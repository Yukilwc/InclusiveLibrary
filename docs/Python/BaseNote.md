# Python基础笔记

## 概要

[参考教程](https://www.liaoxuefeng.com/wiki/1016959663602400)

[官方文档](https://docs.python.org/zh-cn/3/tutorial/index.html)

[cookbook](https://python3-cookbook.readthedocs.io/zh_CN/latest/c01/p01_unpack_sequence_into_separate_variables.html)

## 差异点

* tuple dict
* 循环语法
* 函数传参
## 解释器

命令行调用
```sh
python -c command [arg]
python -m module [arg]
```


## IDE

选择VSCODE开发python

## 基础

### 数据类型与变量

数据类型

* 整数
* 浮点数
* 字符串
* 布尔类型
* 空值None

运算符

* // 取整除法
* % 取余除法

### 字符串和编码

* ord()
* chr()
* x = b'ABC' byte类型数据
* encode()
* decode()
* len()
* int()

字符串插值

1. %
```py
>>> 'Hello, %s' % 'world'
'Hello, world'
>>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
'Hi, Michael, you have $1000000.'
```

1. format()

2. f-string

```py
>>> print(f'The area of a circle with radius {r} is {s:.2f}')
The area of a circle with radius 2.5 is 19.62
```

### 数组list

读取同js

数组方法:
* append()
* insert()
* pop()

### tuple

不可变的类数组  

```py
a = (1,2)
a = (1,)
```

### 条件

```py
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```

### 循环

```py
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)

sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
    break
    continue
print(sum)
```
列表表达式  
在一个列表生成式中，for前面的if ... else是表达式，而for后面的if是过滤条件，不能带else。

```py
>>> [x * x for x in range(1, 11) if x % 2 == 0]
[4, 16, 36, 64, 100]

>>> [x for x in range(1, 11) if x % 2 == 0]

>>> [x if x % 2 == 0 else -x for x in range(1, 11)]
[-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
```
### dict和set

dict

```py
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95

>>> 'Thomas' in d
False

>>> d.get('Thomas')
>>> d.get('Thomas', -1)
-1

>>> d.pop('Bob')
75
>>> d
{'Michael': 95, 'Tracy': 85}
```

dict方法
* items()

set

```py
>>> s = set([1, 2, 3])
>>> s
{1, 2, 3}
>>> s.add(4)
>>> s.remove(4)
>>> s1 = set([1, 2, 3])
>>> s2 = set([2, 3, 4])
>>> s1 & s2
{2, 3}
>>> s1 | s2
{1, 2, 3, 4}
```

## 函数

### 定义

```py
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
```

解构

```py
import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

>>> x, y = move(100, 100, 60, math.pi / 6)
>>> print(x, y)
151.96152422706632 70.0
```

### 参数

* 位置参数
* 默认参数
* 可变参数
* 关键字参数
* 命名关键字参数

### 内置函数

|            |      |     |
| ---------- | ---- | --- |
| isinstance |      |     |
| L[0:3]     | 切片 |     |
| enumerate  |      |     |
| range      |      |     |
| next       |      |     |
| iter       |      |     |
|            |      |     |
|            |      |     |
|            |      |     |
|            |      |     |
|            |      |     |
|            |      |     |
### 匿名函数

```py
>>> list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```
## 高级特性

### Generator

```py
>>> L = [x * x for x in range(10)]
>>> L
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
>>> g = (x * x for x in range(10))
>>> g
<generator object <genexpr> at 0x1022ef630>
```

### Iterable


一类是集合数据类型，如list、tuple、dict、set、str等；

一类是generator，包括生成器和带yield的generator function。

这些可以直接作用于for循环的对象统称为可迭代对象：Iterable。

## 函数式

高阶函数

匿名函数

装饰器

偏函数