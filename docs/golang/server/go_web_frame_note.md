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