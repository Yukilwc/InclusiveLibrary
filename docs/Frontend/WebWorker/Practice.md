# WebWorker实践

## 基础

### vite使用worker

方法一: worker文件写js，放在public文件夹中，做非打包资源，然后在主线程文件中，通过`new URL("./StarsCanvasWorker", import.meta.url)`进行引入

方法二:使用vite的`import StarsCanvasWorker from './StarsCanvasWorker?worker'`,改引入方式是支持ts类型判定的,推荐此种方法,此引入方法，worker文件也会被打包，被babel编译，最终打包为一个编译后的js文件，并在主线程文件中引入正确的路径。

## Canvas绘制

[源码](https://github.com/Yukilwc/InclusiveLibrary/tree/master/docs/.vuepress/components/WebWorker)

思路分为两种
1. 主线程绘制，worker线程构建offscreencanvas,负责生成图片点位数据，postMessage到主线程,麻烦，但是主线程能控制何时绘制控制绘制的逻辑。
2. worker线程绘制,主线程仅负责把控制权移交给worker线程,worker线程并不创建任何的offscreencanvas实例.这方便但是不受主线程控制。

下面采用第二种方法进行绘制

<ClientOnly>
<WebWorker-CanvasWorker></WebWorker-CanvasWorker>
</ClientOnly>