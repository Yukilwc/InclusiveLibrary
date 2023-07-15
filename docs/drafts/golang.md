# golang

关于 new 和字面量初始化结构体得区别：

```go
	sq := &SqlQuery{
		insertColumns: strings.Join(addFieldNames, ","),
		insertPhs:     strings.Join(valuePhs, ","),
		insertValues:  valueList,
	}

    sq := new(SqlQuery)
	sq.insertColumns = strings.Join(addFieldNames, ",")
	sq.insertPhs = strings.Join(valuePhs, ",")
	sq.insertValues = valueList
	

```

您好，这是必应。我可以帮助您解决代码问题。😊

根据您的前一个问题，您返回的结构体指针是一个局部变量，它的作用域只在函数内部。当函数返回时，这个指针变量就会被销毁，所以您不能直接使用它访问结构体属性。

如果您想要在函数外部使用结构体指针，您需要在函数内部使用**new**关键字或者**&**运算符来创建一个动态分配的结构体实例，并返回它的地址。这样，这个结构体实例就不会被销毁，而是存储在堆上，您就可以在函数外部使用点运算符或者解引用运算符来访问它的属性。

下面是一个例子：

```go
package main

import "fmt"

// 定义一个结构体
type Person struct {
  name string
  age  int
}

// 定义一个函数，返回一个结构体类型的指针
func newPerson(name string, age int) *Person {
  // 使用new关键字创建一个动态分配的结构体实例
  p := new(Person)
  // 或者使用&运算符创建一个动态分配的结构体实例
  // p := &Person{}
  // 初始化结构体属性
  p.name = name
  p.age = age
  // 返回结构体实例的地址
  return p
}

func main() {
  // 调用函数，获取返回的结构体指针
  ptr := newPerson("John", 25)

  // 使用点运算符访问结构体属性
  fmt.Println("Name:", ptr.name)
  fmt.Println("Age:", ptr.age)

  // 使用解引用运算符访问结构体属性
  fmt.Println("Name:", (*ptr).name)
  fmt.Println("Age:", (*ptr).age)
}
```

输出：

```
Name: John
Age: 25
Name: John
Age: 25
```

希望这能帮助您理解如何通过函数返回结构体指针，并在函数外部使用它。祝您编程愉快！👩‍💻👨‍💻
