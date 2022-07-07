# 深入

BuildContext其本质就是Element实例自身

of方法的本质就是调用`dependOnInheritedWidgetOfExactType()`

`setState()`本质是调用`markNeedsBuild()`将element标记为dirty

RenderObject的职责是Layout和Paint,全部RenderObject会一起构成Render Tree


> RenderObject就是渲染树中的一个对象，它主要的作用是实现事件响应以及渲染管线中除过 build 的部分（build 部分由 element 实现），即包括：布局、绘制、层合成以及上屏

架构上，可以参考vue等设计，分离业务交互的methods层和视图层，widget仅负责布局，交互事件和数据存储都交给逻辑层统一管理.这是设计模式中的外观模式？  



## 生命周期

### didChangeDependencies

alled when a dependency of this State object changes.

For example, if the previous call to build referenced an InheritedWidget that later changed, the framework would call this method to notify this object about the change.

This method is also called immediately after initState. It is safe to call BuildContext.dependOnInheritedWidgetOfExactType from this method.

Subclasses rarely override this method because the framework always calls build after a dependency changes. Some subclasses do override this method because they need to do some expensive work (e.g., network fetches) when their dependencies change, and that work would be too expensive to do for every build.