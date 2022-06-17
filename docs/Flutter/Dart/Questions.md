# 疑惑

## 问题

flutter开发选什么模拟器配置好

const constructor是什么?例如`const Center()`


## 待整理

F2 rename symbol


## 构造函数的传参总结

不需要使用this来访问实例属性。

对函数定义中的函数参数，有空安全后，要么需要声明`required`,要么需要加 `bool? isDel`

基础版本，类似js，书写繁琐.函数体内不可使用this和super，如果使用则需要写成后面的语法糖模式。

```dart
  Port port = Port(name: '');
  bool isDel = false;
  PortListItem({required Port port, bool? delStatus})
      : super(key: ObjectKey(port)) {
    port = port;
    isDel = delStatus ?? false;
  }
```

带自动赋值
```dart
  final Port port;
  bool isDel = false;
  PortListItem({required this.port, bool? delStatus})
      : isDel = delStatus ?? false,
        super(key: ObjectKey(port));
 
```