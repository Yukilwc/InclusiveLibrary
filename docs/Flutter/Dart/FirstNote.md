
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

函数传参方式：命名 位置 必填 选填 默认项

匿名函数

词法作用域

闭包

## 运算符

运算符的分类 见Operators表格

特性 Cascade notation

`foo!.bar`断言非空

## 控制流

## 异常处理

try on catch finally

rethrow

## 类，基于mixin的继承

### 类

使用类成员 

构造函数命名 ClassName.identifier来设定多构造函数

constant constructors

类实例变量的声明

getter and setter

成员的final

构造函数定义模式

简单赋值语法糖  `Point(this.x,this.y)`; 省略了函数体，参数中直接写入二重含义

默认构造函数

构造函数不可继承

initializer list和superClass的构造函数调用顺序  
initializer list
superclass’s no-arg constructor
main class’s no-arg constructor

父类无隐式无参构造函数时，需要主动调用.

初始化语法糖也支持父类 `Vector3d(super.x, super.y, this.z);`

参数的位置参数和命名参数，required声明

Redirecting constructors

冒号前，职责有二，接收参数，如果存在this或者super，进行赋值操作。  
冒号后，职责为，解析this，super，进行调用与传参

抽象方法

Abstract methods can only exist in abstract classes.

implements extends override

enum

emun可以implements 

mixins

type alias

metadata annotations?是装饰器?

## Generics泛型

写法:
类型声明 字面量赋值Map List 函数 类

泛型的约束:
extends

## 包导入导出体系

内置导入 自定义包导入 别名

## 异步

## 特性

字面量化的list sets map
## 与ts的差异总结

同上分类来进行总结

## 整理一份各种语法实现的速查参考


## 一些特殊语法

**Null-aware operators**
Dart offers some handy operators for dealing with values that might be null. One is the ??= assignment operator, which assigns a value to a variable only if that variable is currently null:

```dart
int? a; // = null
a ??= 3;
print(a); // <-- Prints 3.

a ??= 5;
print(a); // <-- Still prints 3.
```

**Dart, Identifier with exclamation mark in the back**

It's part of the null safety that Dart have. You can read about it [here](https://dart.dev/null-safety)
>If you’re sure that an expression with a nullable type isn’t null, you can add ! to make Dart treat it as non-nullable

```dart
int? aNullableInt = 2;
int value = aNullableInt!; // `aNullableInt!` is an int.
// This throws if aNullableInt is null.
```

**if表达式**

作为一个表达式直接返回值

**箭头函数**  
For functions that contain just one expression, you can use a shorthand syntax:
```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

**匿名函数**

```dart
list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});
```

**类中待初始化函数定义**

```dart
class SplashPage extends StatefulWidget {
  final void Function() onFinished;
} 
```

**for表达式在数组中使用**
```dart
 pages: [
            for (final page in uriRouteManager.pages) page,
        ],
```