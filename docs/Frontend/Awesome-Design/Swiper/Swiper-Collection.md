# Swiper样例收录

## 概要

该文章收录好看的swiper实现，查阅swiper api请到隔壁 [Swiper-API](Swiper-API.md)

## 轮播样例

### 基础单Slide轮播

特点: 单slide，循环，自动轮播

[源码](https://github.com/Yukilwc/InclusiveLibrary/blob/master/docs/.vuepress/components/Swiper/SingleSlide.vue)

示例演示如下:

<ClientOnly>
    <Swiper-SingleSlide></Swiper-SingleSlide>
</ClientOnly>

### 不定宽容器内多Slide轮播

多个slide,指定容器宽度或者自适应占满屏幕

* 一种方法是自适应,需要自动计算slide ,slide宽度总是确定的
* 另一种方法是设置单slide，但是overflow,该方法的问题是，loop情况时，如果loop的数量不够，可能会看到空白slide,以及循环slide填充的过程.该方法大概率导致空白slide，不采用

[源码](https://github.com/Yukilwc/InclusiveLibrary/blob/master/docs/.vuepress/components/Swiper/MultiSlide.vue)

示例演示如下:

<ClientOnly>
    <Swiper-MultiSlide></Swiper-MultiSlide>
</ClientOnly>


### 线性过渡轮播

特性:轮播过渡效果为线性滚动，且没有停顿延时

[源码](https://github.com/Yukilwc/InclusiveLibrary/blob/master/docs/.vuepress/components/Swiper/LinearTransition.vue)

示例演示如下:

<ClientOnly>
    <Swiper-LinearTransition></Swiper-LinearTransition>
</ClientOnly>

此种方法具有弊端，即在一轮slide-wrapper位移交替时，会减速和卡顿，猜测是强制覆盖linear导致loop切换slide时出了什么问题。总之，其实swiper并不是很适合做这种走马灯.如果非要使用，猜测增加loop的slide数量可能缓解一下这种卡顿?


[鼠标悬停后停止的方案参考](https://www.kozzzx.com/2019/02/21/%E4%BD%BF%E7%94%A8Vue-Awesome-Swiper%E5%AE%9E%E7%8E%B0%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8%EF%BC%8C%E9%BC%A0%E6%A0%87%E6%94%BE%E7%BD%AE%E7%AB%8B%E5%8D%B3%E6%9A%82%E5%81%9C-%E5%90%AF%E5%8A%A8/)


### 两边缩放中间放大轮播

### 文字走马灯
### loop模式下点击事件添加

借助swiper自身api和钩子实现
### loop轮播vue组件的方案

### 轮播切换后的动画添加方案

借助swiper自身api和钩子实现

### 3D前后翻页轮播

### 视差滚动

## 中文官网样例参考

## 英文官网样例参考


