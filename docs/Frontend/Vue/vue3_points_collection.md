# vue3知识点的收录

## typescript

推荐使用官方的脚手架`create-vue`来构建vite+typescript项目。

IDE支持自然是使用vscode+volar插件，注意要禁用vetur。

::: tip 开启over mode模式
 It's recommended to [ use take over mode instead of VSCode built-in TS plugin](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).

 开启此模式后，将会使用TypeScript Vue Plugin (Volar)来取代vue内置的ts插件，来对项目进行ts校验。
:::

### props类型定义

主要使用`defineProps`编译宏方法来进行定义。  
一种方法是直接作为方法变量，此方法能够自动进行类型推断。
```ts
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})
```

一种方法是使用泛型。使用泛型的缺陷是，由于编译器仅处理一个vue文件，对于外部引入类型无法解析，因此
对于Props的泛型类型，必须是文件定义，不可引入，这就导致了复杂类型重复定义的问题。
```ts
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
```

为了解决复杂类型重复定义，可以考虑不使用泛型方法，或者直接使用强制类型断言
```ts
import type { PropType } from 'vue'

const props = defineProps({
  book: Object as PropType<Book>
})
```

最后，还有默认值设置:
```ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

::: tip
默认值设置能进行自动类型推断吗？
:::


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