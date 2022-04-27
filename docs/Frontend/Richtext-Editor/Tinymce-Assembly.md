# Tinymce封装

## 引入方式

### 资源

通过npm安装在项目中
```sh
npm install --save tinymce
```
下载汉化包[Link](https://www.tiny.cloud/get-tiny/language-packages/),

其中，skin和lang都需要存放到项目的根路径下，一般是`public`,`static`之类的文件夹中.
因此把node_modules中的skin和下载好的lang移动到`/public/tinymce`中
