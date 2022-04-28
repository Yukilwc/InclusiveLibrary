# Tinymce封装

## 实例
<ClientOnly>
    <Richtext-TinymceEditor></Richtext-TinymceEditor>
</ClientOnly>

## 引言

tinymce官方推荐的都是直接通过script标签，引入`tinymce.min.js`的方式，对于打包方式并不推荐，说是非常麻烦。  
但全量引入的包过大，有接近400k，并且难以使用ts类型推断，需要自己取把ts文件取出来做全局声明。  
因此，还是更想能够动态加载，按需加载，故尝试进行下封装.

## 资源准备

通过npm安装在项目中
```sh
npm install --save tinymce
```
下载汉化包[Link](https://www.tiny.cloud/get-tiny/language-packages/),

其中，`node_modules/tinymce/skins`和下载的`lang`都需要存放到项目的根路径下，一般是`public`,`static`之类的文件夹中.
因此把node_modules中的skin和下载好的lang移动到`/public/tinymce/`中

:::tip
看了下，skins里面是两组样式文件，暂时不清楚为啥都说要移动到本地目录下。应该是需要tinymce使用非模块化打包的方式，引入了url的css样式?也就是在init中
主动配置`language_url`和`skin_url`两个字段，而非通过`import`引入了。  
再看官网的打包攻略，是可以通过完全npm的方式的，但是需要更改脚手架打包配置，对于content和skin中的css做特殊的处理.上述的移动方法应该是能跳过这种配置模式.  
详见:
* [rollup-es6-npm](https://www.tiny.cloud/docs/tinymce/6/rollup-es6-npm/)  
* [使用vue组件的移动方法](https://juejin.cn/post/6844903913607397383)  
* [纯js移动方法](https://juejin.cn/post/6921986236408152077)
:::

## 配置封装

## 参考

[webpack-es6-npm](https://www.tiny.cloud/docs/tinymce/6/webpack-es6-npm/)