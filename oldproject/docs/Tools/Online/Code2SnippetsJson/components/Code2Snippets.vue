<template>
  <div>
    <div class="">
      <el-input type="textarea" v-model="code" :rows="12"></el-input>
    </div>
    <div class="mt10">
      <el-button @click="convert">转换</el-button>
    </div>
    <div class="mt10">
      <el-input type="textarea" v-model="jsonStr" :rows="12"></el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import prettier from "prettier";
import parser from 'prettier/parser-babel'

const code = ref("");
const jsonStr = ref("");
const convert = () => {
  // 序列化处理引号等
  //   let res = JSON.stringify(code.value);
  let res = code.value;
  // 处理$符号
  res = res.replace(/\$/g, () => {
    return "$$";
  });
  // 处理\n符号
  let resList = res.split("\n");
  let obj = {
    body: resList,
  };
  let objStr = JSON.stringify(obj);
  objStr = prettier.format(objStr, {
      parser:'json',
      plugins:[parser]
  });
  // 打印结果
  jsonStr.value = objStr;
};
</script>

<style scoped lang="scss"></style>
