# Vuepress手记

## 基础配置

### html meta

常用的是title description以及icon. 
其中icon在config的head配置  
而title和 description,可以在config中配置，也可以在页面的Frontmatter中配置.后者的优先级更高。

## 覆盖默认主题样式

## markdown语法

### 默认主题语法

#### 提示容器

语法 
```md
::: <type> [title]
[content]
:::
```
其中，type可选值如下:
* tip
* warning
* danger
* details
* code-group
* code-group-item

其中code-group是对内置组件`<CodeGroup>`的简写

以下为样例

::: tip 提示
提示内容
:::

::: details 可折叠详情
内容
:::

:::: code-group
::: code-group-item JS
```js
class Space {
    name = ''
}
```
:::
::: code-group-item Dart
``` dart
class Space {
    String name;
}
```
:::
::::

## Components

### 全局组件

#### 插件自动注册

首先安装组件自动注册工具并进行配置
```sh
npm i -D @vuepress/plugin-register-components@next
```
```ts
import { defineUserConfig, DefaultThemeOptions, PluginOptions, PluginConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
export default defineUserConfig<DefaultThemeOptions>({
   plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "../components"),
            components: {},
        }) as PluginConfig<PluginOptions>,
    ]
})
```

所有在`.vuepress/components`中的组件，都会被注册为**异步全局组件**  
组件注册命名方式为文件层级名称通过横线拼接,例如
```
.
└─ doc
   └─ components
      └─ Demo
         └─ Global.vue
```
会自动注册为`<Demo-Global />`

<Demo-Global />


:::tip
莫名其妙的，放在`.vuepress/components`的vue文件的代码提示没了，不知道是不是volar抽风了.所以把组件文件夹迁移到了doc目录下。
:::

#### ClientAppEnhance注册

### 业务组件

## 增强

### 嵌入三方代码在线运行

### live2d