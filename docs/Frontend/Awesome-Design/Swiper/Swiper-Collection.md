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

### 容器内多Slide轮播

多个slide,指定容器宽度或者自适应占满屏幕

* 一种方法是自适应,需要自动计算slide ,slide宽度总是确定的
* 另一种方法是设置单slide，但是overflow,该方法的问题是，loop情况时，如果loop的数量不够，可能会看到空白slide,以及循环slide填充的过程.该方法大概率导致空白slide，不采用

[源码](https://github.com/Yukilwc/InclusiveLibrary/blob/master/docs/.vuepress/components/Swiper/MultiSlide.vue)

示例演示如下:

<ClientOnly>
    <Swiper-MultiSlide></Swiper-MultiSlide>
</ClientOnly>


### 线性过渡轮播

### 两边缩放中间放大轮播

### 走马灯效果

### 点击事件添加

### loop轮播vue组件的方案

### 轮播切换后的动画添加方案

### 3D前后翻页轮播

### 视差滚动


