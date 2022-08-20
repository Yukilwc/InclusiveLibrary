# 收录一些vue的实用代码片段

**完全继承一个组件的全部事件，属性，slot，进行封装**  
```vue
<template>
  <el-table class="my-edit-table-container" v-bind="$attrs" v-on="$listeners">
    <slot
      v-for="name in Object.keys(this.$slots)"
      :name="name"
      :slot="name"
    ></slot>
  </el-table>
</template>
```