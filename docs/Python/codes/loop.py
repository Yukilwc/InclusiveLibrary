
# 迭代器基础

## Iterator转为list,list具有切片，按索引获取等特性，比iterator更实用
from collections.abc import Iterable,Iterator
convert_itr = (i for i in range(10))
print('is Iterable',isinstance(convert_itr,Iterable))
print('is Iterator',isinstance(convert_itr,Iterator))
print('iterator to list',list(convert_itr))
print('list to iterator',iter([1,2,3]))

## zip

z_1 = [1,2,3]
z_2 = [4,5,6,7]
z_r = zip(z_1,z_2)
print('zip',list(z_r))


# itertools

## 无限迭代器
import itertools
### 计数迭代器
for i in itertools.count(5,5):
    if(i==40):
        print('end')
        break
    else:
        print(i,end='=>')

### TODO:循环迭代器

### TODO: 重复迭代器


## 组合迭代器Combinatoric iterators

### 求笛卡尔积 
print('与自身求解',list(itertools.product(['a','b','c'],repeat=3)))
print('多元素求解',list(itertools.product(['a','b','c'],['1','2','3'])))

### 排列
print('自身排列',list(itertools.permutations(['a','b','c'],2)))

### 组合
print('组合',list(itertools.combinations(['a','b','c'],2)))
print('包含重复因子的组合',list(itertools.combinations_with_replacement(['a','b','c'],2)))

## 短序列处理Iterators terminating on the shortest input sequence

### 链接
print('链接,多参数',list(itertools.chain('abc',['1','2','3'])))
print('链接,单一参数',list(itertools.chain.from_iterable(['abc',['1','2','3']])))

### 根据一个迭代器的bool值，对另一个迭代器进行过滤
print('压缩',list(itertools.compress(['a','b','c'],[0,1,True])))

### 顺位移除/获取符合条件的元素
print('移除True的元素,直到为False时停下',list(itertools.dropwhile(lambda x: x<5, [1,4,6,4,1])))
print('获取True的元素,直到为False时停下',list(itertools.takewhile(lambda x: x<5, [1,4,6,4,1])))

### 过滤
print('保留false的元素',list(itertools.filterfalse(lambda x:x==2,[1,2,3,4])))

### 分组
s = [{'name':'1','value':'v1'},{'name':'2','value':'v2'},{'name':'1','value':'v3'},{'name':'3','value':'v3'}]
group_iter  = itertools.groupby(s,lambda item:item['value'])
for key,group in group_iter:
    print('分组',key,':',list(group))

### 元组list的map
li = [ (1, 10, 5), (8, 4, 1), (5, 4, 9), (11, 10, 1) ]
print('tuple map',list(itertools.starmap(lambda *args:args[1],li)))

### 迭代器切片
print('切片',list(itertools.islice('abcdefg',2)))
print('切片',list(itertools.islice('abcdefg',2,6)))
print('步进切片',list(itertools.islice('abcdefg',2,6,2)))

### 从可迭代对象，获取独立迭代器
'''
一定要注意，不要在调用tee()之后使用原始迭代器iterable，否则缓存机制可能无法正确工作。
'''

li = ['a','b','c']
i_1,i_2 = list(itertools.tee(li,2))
print('独立迭代器生成:',list(i_1),list(i_2))

### 按最长的迭代器zip
print('按最长的迭代器zip',list(itertools.zip_longest('abcd','12',fillvalue='-')))