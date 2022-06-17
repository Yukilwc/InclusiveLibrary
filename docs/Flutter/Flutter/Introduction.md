# 总览

## Widget

Widget对象是暂时的，会被销毁的，它仅仅是State实例的展示，而State实例才是持久化的数据层。这有点类似dom和响应式data的关系?  


### Layout

### Navigator

### Gesture

## 原理

树型结构，信息传递，交互方法靠回调参数，而状态靠普通参数向下传递  
通过setState的调用，标记当前widget为dirty，下次渲染时进行rebuilt

列表循环的widget，也是需要显示的指定key的  

设计理念，哲学:  
从上到下还是从下到上  
如何设计state和stateless  
如何判断是否需要const constructor : 是否有需要，在构造后，透过内去修改内部属性? 
数据层和视图层控制，是否分离为不同widget   



实践的范式经验:  
* constant constructor,仅当widget与其子widget，不存在被侵入控制修改属性时，才可以设定。  
* constant constructor,一般出现于较为原子的，没有交互的，纯展示类的底层widget中.而stateless widget则可以任意出现在高层中.
* 判断使用stateless还是stateful,一般是看元素是否存在，初始化之后，可变化的属性。例如列表的数组，列表项的删除状态。
* 编写页面或者模块，依旧是自上而下，但是需要逐层搭建好基础设施，以及判定使用stateless还是stateful，才能更好的调试和后续对接。
* 构建层级时，还需要构建model层，作为数据来源，填充对应位置查看效果。该model层后续会换为真正的实体类。
* 最开始不能过于依赖IDE的能力，而是手打，这对于其它语言学习也是适用的，过早借助IDE构建容易让自己不知其所以然.
* 如果一个class，其内部属性，全都是final，那么则可以设置为const。如果内部是可变化可操作的属性，则不可设置const。
* 由于StatefulWidget的变化属性集中于State中，因此StatefulWidget大概率是可以考虑添加const的
* 不可轻易在build中进行属性的初始化，会生成大量泄漏，因为build是高概率刷新的。build除了返回widget，绝对不要写任何东西.

### widget之间的属性传递与方法调用，事件触发机制