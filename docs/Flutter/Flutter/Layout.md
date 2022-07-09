# 布局

## 思想

大小是子组件自身确定，而位置是由父组件决定

这里需要介绍一下两种常用的约束：

宽松约束：不限制最小宽高（为0），只限制最大宽高，可以通过 BoxConstraints.loose(Size size) 来快速创建。
严格约束：限制为固定大小；即最小宽度等于最大宽度，最小高度等于最大高度，可以通过 BoxConstraints.tight(Size size) 来快速创建。
## 核心布局widget


### Row,Column

同web的flex-direction

### Stack,Positioned

同position:absolute;

### Container,BoxDecoration

同div+宽高+间距+transform,背景边框投影等

### Expanded

### Flexible
### SizedBox

用来充当margin做间距?

### ConstraintBox

### OverflowBox

### UnconstrainedBox

### LimitedBox

### FittedBox


