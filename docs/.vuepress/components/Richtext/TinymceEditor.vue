<template>
  <div>tinymce</div>
  <div class="" id="tinymce-1"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useScriptTag } from "@vueuse/core";
console.log("==========on mounted");
useScriptTag(
  "/InclusiveLibrary/tinymce/tinymce.min.js",
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
    console.log("==========load result");
    tinymce.init({
      selector: "#tinymce-1",
      // plugins: "advlist code emoticons link lists table",
      // toolbar: "bold italic | bullist numlist | link emoticons",
      // skin: false,
      // language: "zh-Hans",
      // language_url: "/tinymce/langs/zh-Hans.js",
      // skin_url: '/tinymce/skins/ui/oxide-dark',
      // content_css: "/tinymce/skins/content/dark/content.min.css",
      // content_style: contentUiSkinCss.toString() + "\n" + contentCss.toString(),
    });
  }
);
onMounted(() => {});
</script>

<style scoped lang="scss"></style>
