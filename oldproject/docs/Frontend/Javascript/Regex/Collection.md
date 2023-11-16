# 正则收录

## 常用正则

**邮箱**
```js
/^[\w-.]+?[@][\w-.]+[.][a-zA-Z]{2,5}$/
```

**匹配中文字符串**
```js
/[\u4e00-\u9fa5]+/g
```

**纯数字，也就是0和正整数**
```js
/^\d+$/
```

**整数，包含负数**

```js
/^\-?\d+$/
```

**简单身份证**
```js
/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
```

**最多包含x位小数**
```js
// 两位
/^(\d+)(.\d{1,2})?$/
// 一位
/^(\d+)(.\d{1,1})?$/
// 可为负数
/^\-?(\d+)(.\d{1,2})?$/
```


**网址是否带http协议头**

```js
/^(http|https):\/\//i
```