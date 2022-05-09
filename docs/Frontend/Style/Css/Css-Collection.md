# Css效果收录

## 工具源码

<!-- TODO: -->

## 基础

文字容器内两端对齐

```scss
    text-align: justify;
    text-align-last: justify;
    display: inline-block;
```

行内多元素控制隐藏优先级

## 工具

移除web默认按钮风格


移除小程序默认按钮风格

文本溢出隐藏 less&scss

```scss
@mixin ellipsis($line: 1) {
  @if $line==1 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  } @else {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $line;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
}

```

断行

<!-- FIXME: -->
```scss
// 如果完全不加样式，则会按照单词断行，并且同类字符，会一直延申不进行断行
// word-break为normal，按单词断行
// overflow-wrap/word-wrap为normal，正常单词结束换行
// white-space:normal,连续空格合并为单个，换行变为空格
@mixin breakLine($type: word) {
  @if $type==word {
    word-break: break-word;
    overflow-wrap: break-word; // 单词无法走到尽头，换行
    word-wrap: break-word;
    white-space: normal;
  } @else if $type==all {
    word-break: break-all;
    overflow-wrap: normal;
    word-wrap: normal;
    white-space: normal;
  } @else if $type==no {
    word-break: normal;
    overflow-wrap: normal;
    word-wrap: normal;
    white-space: nowrap;
  } @else {
    word-break: normal;
    overflow-wrap: break-word; // 单词无法走到尽头，换行
    word-wrap: break-word;
    white-space: normal;
  }
}

```

居中

```scss
// 定位居中
@mixin positionCenter($type: all) {
  @if $type==all {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  } @else if $type==x {
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
  } @else if $type==y {
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
  }
}

```