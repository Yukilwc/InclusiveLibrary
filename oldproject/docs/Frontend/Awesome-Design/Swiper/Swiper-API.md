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

### loopedSlides
### loopAdditionalSlides

设置为n，则前后各复制n+1个`swiper-slide-duplicate`,但是最多不能超过本地slide的最长长度。也就是，原本6个，哪怕 loopAdditionalSlides设置为100，也最多等同于5

## Modules

### FreeMode

在之前的版本中，其并未作为Module导出，而是作为常规Option  
据官网文档描述:启用自由模式功能。可设置具体参数或true来使用默认设置。
默认情况下Swiper 每次滑动时只滑动一个Slide，并且会自动贴合Wrapper。开启自由模式后，Swiper 会根据惯性滑动可能不止一格且不会贴合。  
也就是滑动具有了惯性，例如很像手机端的滚动，带有惯性。  
适合作为鼠标拖动查看文案，流程情景，没有明显的分界线，不需要自动吸附。

## Methods