# Javascript片段收集

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