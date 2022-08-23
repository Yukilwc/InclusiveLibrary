# Python速查手册

## 概要

记录速查用的笔记，具体参考了:

* [Link](https://www.liaoxuefeng.com/wiki/1016959663602400)
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
import types
type(3)
# <class 'int'>
type(fn)==types.FunctionType
type(abs)==types.BuiltinFunctionType
type(lambda x: x)==types.LambdaType
type((x for x in range(10)))==types.GeneratorType
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

### 对象信息

类型判断见基础中的内容  

```py
# 获取对象所有属性与方法
dir('ABC')
# 配合getattr()、setattr()以及hasattr()，我们可以直接操作一个对象的状态
hasattr(obj, 'x') # 有属性'x'吗？
setattr(obj, 'y', 19) # 设置一个属性'y'
getattr(obj, 'y') # 获取属性'y'
# 如果试图获取不存在的属性，会抛出AttributeError的错误：
getattr(obj,'z')
# AttributeError: 'MyObject' object has no attribute 'z'
# 可以传入一个default参数，如果属性不存在，就返回默认值：
getattr(obj, 'z', 404)
```
### 实例属性和类属性

```py
class Student(object):
    name = 'Student'
```

### 多重继承与Mixin

```py
class Dog(Mammal, RunnableMixIn, CarnivorousMixIn):
    pass
```

### 定制类

__slots__

__str__

__repr__

__iter__

__getitem__

__getattr__

__call__


### 枚举类

```py
from enum import Enum
Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
Month.Jan
for name, member in Month.__members__.items():
    print(name, '=>', member, ',', member.value)
```

自定义枚举类  
@unique装饰器可以帮助我们检查保证没有重复值。  
```python
from enum import Enum, unique

@unique
class Weekday(Enum):
    Sun = 0 # Sun的value被设定为0
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6
```

### 元类

使用函数创建类，用到了再记录吧  


## 异常处理

基础使用  
```py
try:
    print('try...')
    r = 10 / int('a')
    print('result:', r)
except ValueError as e:
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
else:
    print('no error!')
finally:
    print('finally...')
print('END')
```

记录   
```py
import logging
 try:
        bar('0')
    except Exception as e:
        logging.exception(e)
```

自定义错误  
```py
try:
    10 / 0
except ZeroDivisionError:
    raise ValueError('input error!')
```

[异常类继承关系](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)

## IO操作

### 读取文件

```py
#  基础实现
try:
    f = open('/path/to/file', 'r')
    print(f.read())
finally:
    if f:
        f.close()

# with语句实现
with open('/path/to/file', 'r') as f:
    print(f.read())

# 二进制文件
f = open('/Users/michael/test.jpg', 'rb')
# 特殊编码
f = open('/Users/michael/gbk.txt', 'r', encoding='gbk', errors='ignore')
```

如果文件很小，read()一次性读取最方便；如果不能确定文件大小，反复调用read(size)比较保险；如果是配置文件，调用readlines()最方便：

```py
for line in f.readlines():
    print(line.strip()) # 把末尾的'\n'删掉
```

### 写文件

你可以反复调用write()来写入文件，但是务必要调用f.close()来关闭文件。当我们写文件时，操作系统往往不会立刻把数据写入磁盘，而是放到内存缓存起来，空闲的时候再慢慢写入。只有调用close()方法时，操作系统才保证把没有写入的数据全部写入磁盘。忘记调用close()的后果是数据可能只写了一部分到磁盘，剩下的丢失了。所以，还是用with语句来得保险：  

默认是覆盖，如果追加文件等模式参考 [文档](https://docs.python.org/3/library/functions.html#open)  
```py
# 基础
f = open('/Users/michael/test.txt', 'w')
f.write('Hello, world!')
f.close()
# with
with open('/Users/michael/test.txt', 'w') as f:
    f.write('Hello, world!')
```

### 操作文件与目录

系统信息  
```py
import os
os.name
# 环境变量
os.environ
os.environ.get('PATH')
os.environ.get('x', 'default')
```

文件与目录  
操作文件和目录的函数一部分放在os模块中，一部分放在os.path模块中，这一点要注意一下。查看、创建和删除目录可以这么调用：
这些合并、拆分路径的函数并不要求目录和文件要真实存在，它们只对字符串进行操作。

```py
# 查看当前目录的绝对路径:
os.path.abspath('.')
# '/Users/michael'
# 在某个目录下创建一个新目录，首先把新目录的完整路径表示出来:
os.path.join('/Users/michael', 'testdir')
# '/Users/michael/testdir'
# 然后创建一个目录:
os.mkdir('/Users/michael/testdir')
# 删掉一个目录:
os.rmdir('/Users/michael/testdir')
# 拆分目录
os.path.split('/Users/michael/testdir/file.txt')
# ('/Users/michael/testdir', 'file.txt')
# 获取扩展名
os.path.splitext('/path/to/file.txt')
# ('/path/to/file', '.txt')
# 重命名
os.rename('test.txt', 'test.py')
# 删除文件
os.remove('test.py')
```

此外,shutil模块提供了copyfile()的函数，你还可以在shutil模块中找到很多实用函数，它们可以看做是os模块的补充。  

一些技巧
```py
# 列出所有目录
[x for x in os.listdir('.') if os.path.isdir(x)]
# 列出py文件
[x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py']
```

### 序列化

python提供pickle模块进行序列化,不过还是最好用json吧，通用还兼容,但是转换麻烦  
pickle和json哪个更常用?  
pickle速度优，但是可读性和流通性差  
pickle对类实例的序列化和反序列化，是否更加简单?

```py
# 写入
import pickle
d = dict(name='n',age=2)
f = open("dump.txt",'wb')
pickle.dumps(d,f)
f.close()
# 读
f = open("dump.txt",'rb')
d = pickle.load(f)
f.close()
```

使用JSON
```py
import json
d = dict(name='Bob', age=20, score=88)
json.dumps(d)
json.loads(json_str)
```

类实例与JSON转换
```py
import json

class Student(object):
    def __init__(self, name, age, score):
        self.name = name
        self.age = age
        self.score = score

s = Student('Bob', 20, 88)
# 自定义转换器
def student2dict(std):
    return {
        'name': std.name,
        'age': std.age,
        'score': std.score
    }
json.dumps(s, default=student2dict)

# 便捷做法
json.dumps(s, default=lambda obj: obj.__dict__)
# 反序列化
def dict2student(d):
    return Student(d['name'], d['age'], d['score'])
json_str = '{"age": 20, "score": 88, "name": "Bob"}'
son.loads(json_str, object_hook=dict2student)

```

## 进程与线程

TODO:使用时记录

## 正则表达式

基础定义与使用  
```py
# 定义 使用前缀
s = r'ABC\-001' # Python的字符串
# 匹配
import re
re.match(r'^\d{3}\-\d{3,8}$', '010-12345')
test = '用户输入的字符串'
if re.match(r'正则表达式', test):
    print('ok')
else:
    print('failed')

# 用于split
re.split(r'[\s\,\;]+', 'a,b;; c  d')
# ['a', 'b', 'c', 'd']
```

匹配分组,即能提取字串  
注意到group(0)永远是与整个正则表达式相匹配的字符串，group(1)、group(2)……表示第1、2、……个子串。  
```py
m = re.match(r'^(\d{3})-(\d{3,8})$', '010-12345')
m.group(0)
# '010-12345'
m.group(1)
# '010'
m.group(2)
# '12345'
```

编译
```py
import re
re_telephone = re.compile(r'^(\d{3})-(\d{3,8})$')
re_telephone.match('010-12345').groups()
# 配置
re.compile(r'\w',re.IGNORECASE)
```

## 常用内建模块

### datetime

```py
from datetime import datetime
now = datetime.now()
dt = datetime(2015, 4, 19, 12, 20) # 用指定日期时间创建datetime
# js的时间戳是毫秒，而py是秒
dt.timestamp() # 把datetime转换为timestamp建
t = 1429417200.0
datetime.fromtimestamp(t)
# 字符串转换
cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
```

关于字符串格式详细见 [文档](https://docs.python.org/3/library/datetime.html#strftime-strptime-behavior)

时间运算
```py
from datetime import datetime, timedelta
now = datetime.now()
now + timedelta(hours=10)
now - timedelta(days=1)
now + timedelta(days=2, hours=12)
```

### collections
**namedtuple**  
namedtuple是一个函数，它用来创建一个自定义的tuple对象，并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素。
这样一来，我们用namedtuple可以很方便地定义一种数据类型，它具备tuple的不变性，又可以根据属性来引用，使用十分方便。  
并且其为tuple的字类
```py
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
p.x
isinstance(p, Point)
# True
```

**deque**  
使用list存储数据时，按索引访问元素很快，但是插入和删除元素就很慢了，因为list是线性存储，数据量大的时候，插入和删除效率很低。
deque是为了高效实现插入和删除操作的双向列表，适合用于队列和栈：
```py
from collections import deque
q = deque(['a', 'b', 'c'])
q.append('x')
q.appendleft('y')
```

**defaultdict**  
使用dict时，如果引用的Key不存在，就会抛出KeyError。如果希望key不存在时，返回一个默认值，就可以用defaultdict  
除了在Key不存在时返回默认值，defaultdict的其他行为跟dict是完全一样的。
```py
from collections import defaultdict
dd = defaultdict(lambda: 'N/A')
dd['key1'] = 'abc'
dd['key1'] # key1存在
# 'abc'
dd['key2'] # key2不存在，返回默认值
# 'N/A'
```

**OrderedDict**
使用dict时，Key是无序的。在对dict做迭代时，我们无法确定Key的顺序。 
如果要保持Key的顺序，可以用OrderedDict

**ChainMap**  
ChainMap可以把一组dict串起来并组成一个逻辑上的dict。ChainMap本身也是一个dict，但是查找的时候，会按照顺序在内部的dict依次查找。   
什么时候使用ChainMap最合适？举个例子：应用程序往往都需要传入参数，参数可以通过命令行传入，可以通过环境变量传入，还可以有默认参数。我们可以用ChainMap实现参数的优先级查找，即先查命令行参数，如果没有传入，再查环境变量，如果没有，就使用默认参数。

### itertools

常用:  
* chain()
* groupby()
* repeat()
* circle()

### contextlib
管理上下文来使用简洁的with语法  

### HTMLParser

html解析

## 常用三方模块

### Pillow

图像处理

### requests

请求库

### psutil

获取系统，进程信息

## 数据库

## 异步IO
asyncio
## 命令行交互
```py
# 用户输入
name = input('name:')
```