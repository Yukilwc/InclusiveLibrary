<template>
  <div class="tiny-container">
    <div class="title">tinymce封装样例</div>
    <div class="content" id="tinymce-1"></div>
    <button @click="changeSkin">tinymce修改皮肤</button>
    <button @click="initData">tinymce初始化</button>
    <button class="" @click="exportStr">tinymce导出</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from "vue";
import { useScriptTag, useLocalStorage } from "@vueuse/core";
console.log("==========on mounted");
useScriptTag(
  "/InclusiveLibrary/tinymce/tinymce.min.js",
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
    console.log("==========load result");
    initTinymce();
  }
);
const initTinymce = () => {
  let mode = localStorage.getItem("vuepress-color-scheme");
  tinymce.init({
    selector: "#tinymce-1",
    language: "zh-Hans",
    language_url: "/InclusiveLibrary/tinymce/langs/zh-Hans.js",
    skin: mode === "dark" ? "oxide-dark" : "oxide",
    menubar: "file edit view insert format tools table help",
    toolbar: [
      "undo redo",
      "bold italic underline strikethrough",
      "fontfamily fontsize blocks",
      "alignleft aligncenter alignright alignjustify",
      "outdent indent",
      "numlist bullist",
      "forecolor backcolor removeformat",
      "pagebreak",
      "charmap emoticons",
      "fullscreen  preview save print",
      "insertfile image media template link anchor codesample",
      "ltr rtl",
    ].join(" | "),
    plugins: [
      "preview",
      "importcss",
      "searchreplace",
      "autolink",
      "autosave",
      "save",
      "directionality",
      "code",
      "visualblocks",
      "visualchars",
      "fullscreen",
      "image",
      "link",
      "media",
      "template",
      "codesample",
      "table",
      "charmap",
      "pagebreak",
      "nonbreaking",
      "anchor",
      "insertdatetime",
      "advlist",
      "lists",
      "wordcount",
      "help",
      "charmap",
      "quickbars",
      "emoticons",
    ],
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
    images_upload_handler: (blobInfo, progress) => {
      return new Promise((resolve, reject) => {
        console.log("==========images_upload_handler");
        resolve("");
      });
    },
  });
};
const exportStr = () => {};
const initData = () => {};
const changeSkin = () => {
  let mode = localStorage.getItem("vuepress-color-scheme");
  console.log("==========do change skin",mode);
  tinymce.init({
    selector: "#tinymce-1",
    skin: mode === "dark" ? "oxide-dark" : "oxide",
  });
};
onMounted(() => {});
</script>

<style scoped lang="scss">
.tiny-container {
  padding: 20px 0;
  .title {
    font-weight: bold;
    padding: 10px 0;
  }
  .content {
  }
}
</style>
