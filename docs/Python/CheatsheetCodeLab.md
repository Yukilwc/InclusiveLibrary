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

### 类型转换

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

#### list,tuple,字符串切片

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

## 命令行编程

```py
# 用户输入
name = input('name:')
```