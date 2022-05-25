# Swiper API解析验证

## 整体原理

## Options

### spaceBetween

控制slide之间的间距，本质上是为slide添加了margin-right，同时重新计算每次的位移

### slidesPerView

如果是auto，则根据container宽度和指定的slide宽度,自动计算出展示的数量,切默认间距为0.
如果同时设置了spaceBetween,则会连同其一并计算.  
如果在auto的同时，设置了loop，则必须指定loopedSlides,否则会出现纯白slide，一般指定数字为循环的数组长度即可?

如果显式的设置为数字，例如5，则会主动覆盖自定义的slide宽度，而是通过数字5，spaceBetween，以及container宽度，计算出新的slide宽度，并强制使用。因此除非对slide宽度允许自适应，否则最好不要使用。

## Methods