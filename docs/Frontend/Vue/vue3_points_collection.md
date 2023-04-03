# vue3知识点的收录

## typescript

推荐使用官方的脚手架`create-vue`来构建vite+typescript项目。

IDE支持自然是使用vscode+volar插件，注意要禁用vetur。

::: tip 开启over mode模式
 It's recommended to [ use take over mode instead of VSCode built-in TS plugin](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).

 开启此模式后，将会使用TypeScript Vue Plugin (Volar)来取代vue内置的ts插件，来对项目进行ts校验。
:::

### defineProps

### ref与reactive的类型标注

ref一般使用泛型标注。  
```ts
const year :Ref<string | number> = ref('2020')
```
而reactive由于会对对象深层的ref进行解包，导致泛型与最终获取类型不一致，因此禁止使用泛型来进行类型标注。  
仅使用自动类型推断，或者变量类型声明即可
```ts
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
```


### 使用ref获取组件实例时的类型声明

```ts
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

const openModal = () => {
  modal.value?.open()
}
```