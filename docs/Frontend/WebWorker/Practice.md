# WebWorker实践

## Canvas绘制

[源码](https://github.com/Yukilwc/InclusiveLibrary/tree/master/docs/.vuepress/components/WebWorker)

思路分为两种
1. 主线程绘制，worker线程构建offscreencanvas,负责生成图片点位数据，postMessage到主线程,麻烦，但是主线程能控制何时绘制控制绘制的逻辑。
2. worker线程绘制,主线程仅负责把控制权移交给worker线程,worker线程并不创建任何的offscreencanvas实例.这方便但是不受主线程控制。

下面采用第二种方法进行绘制

<ClientOnly>
<WebWorker-CanvasWorker></WebWorker-CanvasWorker>
</ClientOnly>