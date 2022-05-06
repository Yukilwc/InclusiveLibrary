# Gulp脚本基础

## glob

### 取反的原理

```js
src(["D:/glob/**/*.json", "!D:/glob/node_modules/**"], { allowEmpty: true })
```

优先进行正匹配，匹配到一个文件后，与反对比，进行验证。其中文件夹后的`**`是匹配文件及文件夹的，必须携带，否则就会变成是否匹配`node_modules`文件夹本身，而非其下文件.