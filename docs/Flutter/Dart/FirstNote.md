
# 首次随笔

一切皆为对象

存在类型推断

存在动态类型，可以Object或者dynamic声明。

一个值，如果没有初始化，则其不能使用。可以使用int? 声明，也就是初始为null

处理必定不为空的情景，可以用late声明初始化.用late声明后，执行机制延后，较为特殊.

final和const

const是编译时，需要其推算的上下文都是const

`var a  = const []` 类似一个语法糖? 等同于`var a; const var b = [];a = b;`

`变量 as int`可以强制类型转换typecast

const的对象，属性fields也不可变。但是final的属性fields可以修改。

内置类型:

Object是除了null以外，全部类型的超类

dynamic本质是禁用了静态类型检查，最好使用Object替代

字符串与数字转换 基础类型的内置方法和属性

==判定机制,对复杂类型和基础类型

字符串连接和插值方式