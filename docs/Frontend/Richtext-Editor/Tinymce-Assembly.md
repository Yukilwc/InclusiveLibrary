# Tinymce封装

## 实例

<Richtext-TinymceEditor></Richtext-TinymceEditor>

## 引言

tinymce官方推荐的都是直接通过script标签，引入`tinymce.min.js`的方式，对于打包方式并不推荐，说是非常麻烦。  
但全量引入的包过大，有接近400k，并且难以使用ts类型推断，需要自己取把ts文件取出来做全局声明。  
因此，还是更想能够动态加载，按需加载，故尝试进行下封装.
## 引入方式

### 资源准备

通过npm安装在项目中
```sh
npm install --save tinymce
```
下载汉化包[Link](https://www.tiny.cloud/get-tiny/language-packages/),

其中，`node_modules/tinymce/skins`和下载的`lang`都需要存放到项目的根路径下，一般是`public`,`static`之类的文件夹中.
因此把node_modules中的skin和下载好的lang移动到`/public/tinymce/`中


## 参考

[webpack-es6-npm](https://www.tiny.cloud/docs/tinymce/6/webpack-es6-npm/)