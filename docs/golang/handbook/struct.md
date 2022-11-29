# Go手册-结构体

Go并无类的概念，其封装的核心实现是依靠结构体Struct  

## 定义
```go
type Person struct {
    id int,
    name string,
    address string
}
```

## 变量声明

将变量声明为结构体类型，则为初始化：
```go
var p Person
```
接着，可以通过点号运算符，对结构体实例变量内的属性，进行赋值：
```go
p.name = "Kiana"
```

## 变量初始化

可以使用**结构体字面值**进行初始化：
```go
// 使用命名指定
p := Person{id:1,name:"Kiana",address:"home"}
// 使用命名指定 且返回指针，较为常用
gp := &Person(id:1,name:"Kiana",address:"")
// 使用顺序指定 不推荐，改动成本大
p := Person{1,"Kiana","home"}
```

## 成员的可访问性

成员大写时，才能够被导出使用。  
疑问：被导出的含义是什么？是在一个包中可以使用，包外不可使用吗？


## 结构体比较

会自动对比结构体内的成员是否相等


## 结构体混入与匿名成员

### 混入定义

结构体Circle要包含结构体Point,一种方法是定义成员变量point，使用`circle.point.x`来访问。
还有一种方法就是结构体混入，直接把Point的成员，混入到Circle中，实现一种类似继承的效果。
```go
type Women struct {
    Person
    other string
}
var w Women
w.name
```

### 混入后的字面量初始化

```go
w:=Women{Person{1,"",""},other:""}
```

## 方法

Go中的方法，特指为结构体添加的成员函数。

### 声明

在函数名前方一个**接收器**，即为方法声明。这个接收器其实就是一个结构体变量的声明：
```go
func (p Person) Jump() {
    fmt.Println(p.name+" jump")
}
// 指针参数
func (p *Person) Walk() {
    fmt.Println(p.name+" Walk")
}
```

当指针类型形参，调用接收器上的方法时，Go存在隐式调用
```go
pp:=&Person(1,"name","addr") 
// 常规
(&pp).Walk()
// 隐式
pp.Walk()
```


## 结构体标签Struct Tag

结构体标签描述了结构体字段的额外信息。  

### 定义

```go
`key1:"value1" key2:"value2"`
```

## 一些注意事项

结构体Person不可包含自身类型的成员，但是可以包含*Person指针类型的成员，用来创建递归的数据结构。  

## 一些Go的理解问题

1. 如何分配空间，使用new/make/声明变量即可？

变量声明`var test int`，当没有赋值时，其结果会是对应类型的**零值**。
如果test为引用类型，如`var test *int`，则需要为其分配空间后，才能使用。
```go
var test *int
test = new(int)
*test = 1
```

但是对于map,slice,chan，这些类型的内存分配，则需要使用make。  
make会进行结构的初始化，而非和new一样，分配内存后返回一个零值的指针。make返回的是初始化后的类型变量。

2. 各种传参赋值函数返回中，使用变量本身还是指针？各自有何意义权衡？

如果需要在函数内部，修改参数结构体变量的成员，则必须使用指针传入参数，因为所有的函数参数，都是值拷贝传入的。

对于结构体，常用的处理方式就是指针，因为结构体变量初始化常写成如下：
```go
gp := &Person(id:1,name:"Kiana",address:"")
```

3. 方法的接收器，使用指针和使用变量，有何区别，使用变量的话，能改变自身实例的成员吗？

在声明一个method的receiver该是指针还是非指针类型时，你需要考虑两方面的因素，第一方面是这个对象本身是不是特别大，如果声明为非指针变量时，调用会产生一次拷贝；第二方面是如果你用指针类型作为receiver，那么你一定要注意，这种指针类型指向的始终是一块内存地址，就算你对其进行了拷贝。熟悉C或者C++的人这里应该很快能明白。

4. 结构体混入时，如果发生了重名怎么办，还能通过路径调用吗？