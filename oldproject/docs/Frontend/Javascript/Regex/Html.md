# HTML正则解析匹配

## 概要

使用正则解析html文本

应用情景: 主要用在vscode查询，或者解析爬虫爬取的html，再或者是一些自动化脚本，例如自动翻译  

由于复杂的嵌套情景和多样的字符，本文中的各种正则并不可靠，仅供自身用于日常查询和脚本参考  
切不可用于生产环境  


## HTML正则


### 匹配单个闭合标签

匹配例如`<p>`,`<input />`或者`</footer>`，可以用来做某种标签的全部清除或者替换，例如处理`</br>`等

::: tip 注意
需要考虑，标签内部存在尖角符号的情景,例如:  
`<p title='a>b'>`
:::

```js
/<[\/]?TagName[\s\S\n]*?>/
```

匹配包含指定属性的闭合标签  
例如`<p class='content'>`,`<input disabled />`

```js

```

### 匹配一对标签


```js
/<tag-name(([\s\S\n])*?)<\/tag-name>/
// input img等 
/<input(([\s\S\n])*?)[/]{0,1}[\s\S\n]*?>/
```



匹配vue文件模板

匹配html标签中的纯文本

匹配html标签中的属性

匹配全部换行


匹配全部图片


匹配花括号


匹配单引号和双引号(是否包含引号)

匹配非注释标签中包裹的中文


