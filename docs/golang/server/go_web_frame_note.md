# 几款Go web框架的解析随笔

**路由的实例化与路由路径的注册，放在何处？**

**route和controller是否需要分离**
是需要分离的，route仅仅提供一个访问的入口而已。
而controller是处理访问的起点。

**service,model,dao层各自的职责分配？**

DAO(Data Access Object)

**middleware自定义中间件如何设计**

**基于业务的struct和基于DB的struct如何区分？**  
基于DB的struct是可以做自动生成的，因此可以分离出来使用工具维护

**项目初始化加载的逻辑放在initialize吗**

**日志体系如何嵌入？**

**api文件夹在分层架构中是何职责位置？**

## 登录接口引出的

一个登录接口的流程及其中的要素：
* request到达
* 分析request的path，命中对应的**路由**
* 路由把context示例分配给**controller方法**
* 方法把context中的json body，注入到预先设定好的**request登录参数struct**中
* 生成参数实例期间，需要做**参数类型检查**

由此，上述加粗的要素，考虑两个问题：
1. 放在那里
2. 如何具体实现