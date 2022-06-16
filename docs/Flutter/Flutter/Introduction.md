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