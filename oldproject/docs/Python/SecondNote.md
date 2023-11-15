# 查询记录

*args和**kw参数

*args: 任意多个无名参数，本质是一个tuple  
**kw:关键字参数，本质是一个dict  
*args必须在**kw之前  

```py
def test(name,*args,**kw):
    print(name)
    print(args)
    print(kw)

test('名字',1,2,3,key1='value1',key2='value2')

名字
(1,2,3)
{'key1':'value1','key2':'value2'}
```