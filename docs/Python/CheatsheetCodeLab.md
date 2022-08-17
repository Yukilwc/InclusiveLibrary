# Python速查手册

## 指令与工具

安装双版本python时，使用pip安装依赖，更新依赖，查看依赖
```sh
py -3 -m pip install Pillow
py -3 -m pip install --upgrade pip
py -3 -m pip list
py -3 -m pip show Pillow
```

## 基础

### 基础类型

字符串换行写法  
```py
print('''line1
line2
line3''')
```

布尔类型,字面量与逻辑运算 
```py
# 注意大小写
True
False

# 逻辑运算
True and False
True or False
not True
```

空值  
```sh
None
```

### 类型转换与判断

基础类型
```py
# 基础类型转换 无法转换会报错
num = int('123')
float(x)
str(x)
bool(x)
```

类型判断  
```py
x = 'str'
if not isinstance(x,(int,float)):
    raise TypeError('x type shoule be string')

# type函数

type(3)
# <class 'int'>
```
### 基础运算

除法  
```py
10 / 3
10 // 3
10 % 3
```

### 字符串

字符串编码  
```sh
# 单个字符编码
ord('A')
# 65
chr(66)
# 'B'

# 字面量写法 双引号或b加上单引号
x = b'ABC'

# 字符串与编码转换
'ABC'.encode('ascii')
# b'ABC'
"中文".encode('utf-8')
# b'\xe4\xb8\xad\xe6\x96\x87'
b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
# '中文'
```

字符串常用方法  
```sh
# 字符数量
len(str)

# %语法 字符串变量替换
'number is:%d,string is %s,number format is %.2f,show %%' % (1,'str',3.14159)
# 'number is:1,string is str,number format is 3.14,show %'

# f-string语法 字符串变量替换
a = 1
b = 'str'
c = 3.141592
d =  f'number is {a},string is {b},number format is {c:.2f}'
# 'number is 1,string is str,number format is 3.14'
```

### list

```py
# 定义
itemList = ['a','b','c']
# length
len(itemList)
# 索引获取与赋值
itemList[0]
itemList[-1]
# 元素操作
itemList.append('d')
itemList.insert(1,'e')
itemList.pop()
itemList.pop(index)
```

### tuple

```py
# 定义
nums = (1,2,3)
numsEmpty = ()
numsSingle = (1,)
```

### dict

key必须为不可变对象  
```py
# 基础定义,get,set
dt = {'a':1,'b':2,'c':3}
dt['a'] = 100
# 使用不存在的key会error
dt['z']
# 添加新的key value
dt['f'] = 10
# key是否存在
'z' in dt
# False

# 使用get方法 可指定默认，不指定则返回None
dt.get('z','default value')
# 删除
dt.pop('a')
```

### set

元素必须为不可变对象
```py
# 定义 重复元素会自动过滤
s = set([1,2,3])
# 添加
s.add(4)
# 删除
s.remove(4)
# 集合计算 交集 并集
s1&s2
s1|s2


```
### 条件判断

```py
a = 1
if a>0: 
    pass
elif a<10: 
    pass
else:
    pass

# if转换 只要x是非零数值、非空字符串、非空list等，就判断为True，否则为False。
if x: 
    pass

```

### 循环

for循环  
```py
nums = [1,2,3]
# 基础for循环
for n in nums:
    pass
# 生成整数序列
for n in list(range(5)): 
    pass
```

while循环  
```py
n=99
while n>0:
    if n<50:
        break
    elif n==30:
        continue
    n=n-2
```

## 函数

### 定义

基础使用
```py
# 基本定义结构
def func_name(params):
    return 1
# 返回多值 本质是返回tuple的语法糖
def return_multi():
    return 1,2
a,b = return_multi()
```

### 函数参数详解

基础的是位置参数的写法  
若要使用命名参数，则需要借助dict  

```py
# 默认参数 默认参数必须在后
def default_value(a,b=5):
    pass

# 默认参数的坑 默认参数是在函数定义时确定的 定义默认参数要牢记一点：默认参数必须指向不变对象！
def add_end(L=[]):
    L.append('END')
    return L
add_end()
add_end()
# result: ['END', 'END']
# 修正
def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L
```

可变数量参数  
```py
# 可变数量参数,本质是自动化的元组组装语法糖
def any_count_params(*manyParams):
    for n in manyParams:
        print(n)
any_count_params(1,2,3,4,5)
# 调用时传递list或tuple
list = [1,2,3,4,5]
any_count_params(*list)
```

关键字参数  
```py
def keywords_func(a,b,**kw):
    print('kw is a dict',kw)
keywords_func(1,2)
# print: 'kw is a dict {}
keywords_func(1,2,c='zzz')
# print: 'kw is a dict {'c'='zzz'}
# 数据源为dict写法
dt = {"d":'fff'}
keywords_func(1,2,**dt)

```

命名关键字参数,提供一种关键字参数的传入约束  
```py
def namedKw(a,b,*,c,d):
    pass
namedKw(1,2,c=3,d=4)
```

参数组合,顺序为必选参数、默认参数、可变参数、命名关键字参数和关键字参数
```py
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)
def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
```

也就是说，`*` `**`运算符，
* 在定义函数时，自动化组装
* 在调用函数时，自动化解构
* 在命名关键字参数中，负责分割前后参数类型

## 高级特性

### list,tuple,字符串切片

基础索引切片  
```py
l = list(range(100))
# 索引区间 从0开始，不包括索引3
l[1:3]
l[:3]
l[-10:]
l[:10:2] # 前十个数，每两个取一次
l[::5] # 每5个取一次
l[:] # 等于复制一个list
```

更好的实践，使用slice创建命名切片  
```py
l = list(range(100))
lastTenNum = slice(-10,len(l))
l[lastTenNum]
a = slice(5, 50, 2)
a.start
a.stop
a.step
```


### 迭代iteration

可迭代对象: list tuple dict str generator

```py
# 基础迭代
d = {'a': 1, 'b': 2, 'c': 3}
for key in d: 
    print(key)
for value in d.values:
    pass
for k,v in d.items:
    pass

# 是否可迭代
from collections.abc import Iterable
isinstance('str',Iterable)

# 索引获取
for index,value in enumerate(['a','b',c]):
    pass
```

### 列表生成式List Comprehensions

使用表达式简单创建list

```py
list(range(1,11))
# for表达式
# for前为生成，if后为筛选
[x*x for x in range(1,11) if x%2==0]
# 二重组合
[m + n for m in 'ABC' for n in 'XYZ']
# ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
# 文件及目录列举
import os
 [d for d in os.listdir('.')]

#  结合if for之后为筛选 if不可带else，for之前if为表达式 必须带else
[x if x % 2 == 0 else -x for x in range(1, 11) if x>3]

```

### 生成器generator

```py
# 表达式定义
g = (x * x for x in range(10))
for n in g:
    pass

# yield定义
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'done'

# 调用该generator函数时，首先要生成一个generator对象，然后用next()函数不断获得下一个返回值：
# 请务必注意：调用generator函数会创建一个generator对象，多次调用generator函数会创建多个相互独立的generator。
def odd():
    print('step 1')
    yield 1
    print('step 2')
    yield(3)
    print('step 3')
    yield(5)
o = odd()

# 越界捕获
g = fib(6)
while True:
    try:
        x = next(g)
        print('g:', x)
    except StopIteration as e:
        print('Generator return value:', e.value)
    break
```

### 迭代器Iterator

可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator。

生成器都是Iterator对象，但list、dict、str虽然是Iterable，却不是Iterator。  
把list、dict、str等Iterable变成Iterator可以使用`iter()`函数：

为什么list、dict、str等数据类型不是Iterator？  
这是因为Python的Iterator对象表示的是一个数据流，Iterator对象可以被next()函数调用并不断返回下一个数据，直到没有数据时抛出StopIteration错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过next()函数实现按需计算下一个数据，所以Iterator的计算是惰性的，只有在需要返回下一个数据时它才会计算。  
Iterator甚至可以表示一个无限大的数据流，例如全体自然数。而使用list是永远不可能存储全体自然数的。

凡是可作用于for循环的对象都是Iterable类型；凡是可作用于next()函数的对象都是Iterator类型，它们表示一个惰性计算的序列；

```py
# for循环本质:
for x in [1, 2, 3, 4, 5]:
    pass
while True:
    try:
        # 获得下一个值:
        x = next(it)
    except StopIteration:
        # 遇到StopIteration就退出循环
        break
```

## 函数式编程

### 内置高阶函数

```py
# map
def f(x):
    return x*x
r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
# r是Iterator，是惰性序列，因此需要使用list让其全部返回
list(r)

# reduce 第一个参数是累计值，第二个参数是遍历的元素
from functools import reduce
def f(x,y):
    return x*10+y
reduce(f,[1,2,3,4,5])
# print:12345

# filter
list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15]))

# sorted , key函数会对每个元素处理后再排序
sorted([36, 5, -12, 9, -21], key=abs,reverse=True)

```

### 匿名函数

```py
lamda x:x*x

```

### 装饰器

本质上，decorator就是一个返回函数的高阶函数

```py
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper

@log
def now():
    print('2015-3-25')

# 带参数
def log(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator

@log('execute')
def now():
    print('2015-3-25')
```

### 偏函数

柯里化

```py
import functools
int2 = functools.partial(int,base=2)
```

## 面向对象编程

### 类与实例

和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量self，并且，调用时，不用传递该参数。除此之外，类的方法和普通函数没有什么区别，所以，你仍然可以用默认参数、可变参数、关键字参数和命名关键字参数。

```py
# 定义
class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

bart = Student('Bart Simpson', 59)

```


### 可访问性

```py
# 私有，使用双下划线
class Student(object):

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('%s: %s' % (self.__name, self.__score))

# setter getter基础写法
class Student(object):
    def get_score(self):
        return self.__score

    def set_score(self, score):
        if 0 <= score <= 100:
            self.__score = score
        else:
            raise ValueError('bad score')
    
s = Student()
s.set_score(10)
s.get_score()
# setter getter 装饰器写法
class Student(object):
    def __init__(self):
        self.__score=0

    @property
    def score(self):
        return self.__score

    @score.setter
    def score(self,score):
        if 0 <= score <= 100:
            self.__score = score
        else:
            raise ValueError('bad score')
 
s = Student()
s.score = 100
print(s.score)

```

### 继承和多态

```py
class Animal(object):
    def run(self):
        print('Animal is running...')

class Dog(Animal):
    pass

class Cat(Animal):
    pass

```
## 命令行交互
```py
# 用户输入
name = input('name:')
```