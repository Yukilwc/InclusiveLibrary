# 小程序翻译搭建流程

## 安装依赖

```sh
# 拼音
npm install pinyin-pro

```


## 创建接入词典文件

## 语言初始化


## 修改Page构造器

## 脚本


### i18n wxs引入
### Json标题名称与路径统计

### JS标题插入

### JSON标题清除

### 语言替换

#### wxml

**处理Mustache风格内的中文**

处于双花括号内的文本，必定是js变量，因此，如果出现中文，则必定是由单引号或双引号包裹的中文，因此匹配时直接匹配  
包含引号在内的全部文案即可.

核心脚本如下

处理字面量中文

#### js


### 主动与自动监听生成语言wxs包