<template>
  <div class="tiny-container">
    <div class="title">tinymce封装样例</div>
    <div class="content" id="tinymce-1"></div>
  </div>
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
      language: "zh-Hans",
      language_url: "/InclusiveLibrary/tinymce/langs/zh-Hans.js",
      menubar: true,
      plugins: [
        "advlist",
        "autolink",
        "lists",
        "link",
        "image",
        "charmap",
        "preview",
        "anchor",
        "searchreplace",
        "visualblocks",
        "code",
        "fullscreen",
        "insertdatetime",
        "media",
        "table",
        "code",
        "help",
        "wordcount",
      ],
      toolbar:
        "undo redo | blocks | " +
        "bold italic backcolor | alignleft aligncenter " +
        "alignright alignjustify | bullist numlist outdent indent | " +
        "removeformat | help",
      content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
      images_upload_handler: (blobInfo, progress) => {
        return new Promise((resolve, reject) => {
          console.log("==========images_upload_handler");
          resolve("");
        });
      },
    });
  }
);
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
