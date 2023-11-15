# Javascript片段收集

## 知识

### 注意点

如何便捷的转换为json

如何输入美元符号$

```js
// 使用双$转义
$$emit('close')
```

### 文件类型对应关系

| 文件                   | 文件类型                             |     |
| ---------------------- | ------------------------------------ | --- |
| .code-snippets(global) | 全局                                 |     |
| vue-html.json          | Vue2文件中的html template            |     |
| html.json              | .html文件，vue3文件中的html template |     |

## Vue3

```json
"vue3-props": {
    "prefix": "jj-vue3-props",
    "body": [
      "const props = defineProps({",
      "a$1: {",
      "type: String,",
      "default: 1,",
      "},",
      "});"
    ],
    "description": "vue3属性声明"
  },
  "vue3-emits": {
    "prefix": "jj-vue3-emits",
    "body": [
      "const emit = defineEmits<{",
      "(e: 'change', id: number): void",
      " (e: 'update', value: string): void",
      "}>()"
    ],
    "description": "vue3事件声明"
  }

```