<script lang="ts" setup>
// import Prism, { languages } from "prismjs";
import { Ref, onMounted, ref, useSlots } from "vue";
// import "prismjs/themes/prism-tomorrow.min.css";
// let slots = useSlots();
let language = "javascript";
let className = "language-" + language;
let highlightedCode = ref("");
let codeRef = ref<HTMLElement | null>(null);
onMounted(() => {
  // let code = slots.code();
  // Prism.highlightAll()
  // highlightedCode.value = Prism.highlight(
  //   code[0].children as string,
  //   languages[language],
  //   language
  // );
  // console.log("==========highlightedCode", highlightedCode.value);
  // if (codeRef.value) {
  //   Prism.highlightElement(codeRef.value);
  // }
});
</script>

<template>
  <ClientOnly>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="code">
      <pre
        :class="className"
        class="line-numbers"
      ><code :class="className"  ref="codeRef"><slot name="code"></slot></code></pre>
    </div>
    <div class="detail"></div>
    <div class="demo"></div>
  </ClientOnly>
</template>

<style scoped lang="scss"></style>
