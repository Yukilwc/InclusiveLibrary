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

#### 组件自动注册

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
            componentsDir: path.resolve(__dirname, "./components"),
            components: {},
        }) as PluginConfig<PluginOptions>,
    ]
})
```

所有在`.vuepress/components`中的组件，都会被注册为**异步全局组件**  
组件注册命名方式为文件层级名称通过横线拼接,例如
```
.
└─ .vuepress
   └─ components
      └─ Demo
         └─ Global.vue
```
会自动注册为`<Demo-Global />`

**注意**  
当前放到`.vuepress`中的vue文件，会出现volar无法识别的情况，导致ts的代码提示消失。  
[issue](https://github.com/johnsoncodehk/volar/issues/70)

产生原因猜测: 由于vuepress是通过在build时，进行的ts编译检查，tsconfig是vite内部内置，而在根目录并没有`tsconfig.json`文件。  
而不论是`buildin extensions`中的`TypeScript and JavaScript Language Features`，还是volar自身的take over模式，都是基于了根目录下的`tsconfig.json`文件,来进行ts类型推断的。而没有配置时，则该是有一套默认方案，但是这个方案，排除了对`.vuepress`目录的检测.


解决方案想到了两种

一种方法是，迁移components文件夹到.vuepress文件夹同级，可以恢复代码提示。  

第二种方法,是给文件根目录添加一个`tsconfig.json`,配置如下即可

```json
{
  "include": ["docs/.vuepress/**/*.ts", "docs/.vuepress/**/*.vue"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "module": "esnext",
    "types": [],
    "lib": ["ESNext", "DOM"],
    "declaration": false,
    "jsx": "preserve",
    "allowJs": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```

<Demo-Global />

#### ClientAppEnhance注册

### 业务组件


### 内置组件

#### ClientOnly

用来对一些访问了dom的组件，例如tinymce，仅进行客户端渲染

```vue
<ClientOnly>
</ClientOnly>
```

## Frontmater配置
## 增强

### 嵌入三方代码在线运行

### live2d

### 安装使用antdesign

<a-calendar  :fullscreen="false" @panelChange="onPanelChange" />

## 插件

### 查询

[参考](https://v2.vuepress.vuejs.org/reference/plugin/search.html#options)

docsearch私人性质的文档难以申请成功，因此选择本地化的plugin-search插件

按文档配置即可。

### 谷歌统计

[参考](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html#usage)

按文档配置即可。

[Analytics网站](https://marketingplatform.google.com/about/analytics/)

### PWA

[参考](https://v2.vuepress.vuejs.org/reference/plugin/pwa.html)

按文档配置即可。