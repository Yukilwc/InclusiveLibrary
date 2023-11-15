<template>
  <div class="tiny-container">
    <div class="title">tinymce封装样例</div>
    <div class="content" id="tinymce-1"></div>
    <div class="title">常用API实验</div>
    <div class="btn-group mt10">
      <button @click="changeSkin">tinymce修改皮肤</button>
      <button @click="initData">tinymce初始化</button>
      <button class="" @click="exportStr">tinymce导出</button>
    </div>
    <div class="export-area mt10">
      <div class="wrapper">{{ exportContent }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useScriptTag, useLocalStorage } from "@vueuse/core";
import { Editor, RawEditorOptions } from "../../public/tinymce/tinymce";
console.log("==========on mounted");
// let editor: Editor | null = null;
const exportContent = ref("");
let mode = localStorage.getItem("vuepress-color-scheme");
const options: RawEditorOptions = {
  selector: "#tinymce-1",
  height: 600,
  language: "zh-Hans",
  language_url: "/InclusiveLibrary/tinymce/langs/zh-Hans.js",
  skin: mode === "dark" ? "oxide-dark" : "oxide",
  content_css: mode === "dark" ? "dark" : "default",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
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

  // ============================================================ image plugin START

  images_upload_handler: (blobInfo, progress) => {
    tinymce.activeEditor.setProgressState(true);
    return new Promise((resolve, reject) => {
      console.log("==========images_upload_handler");
      setTimeout(() => {
        tinymce.activeEditor.setProgressState(false);
        resolve(
          "https://yukilwc.github.io/InclusiveLibrary/images/favicon.png"
        );
      }, 1000);
    });
  },
  image_list: [
    { title: "My image 1", value: "https://www.example.com/my1.gif" },
    { title: "My image 2", value: "http://www.moxiecode.com/my2.gif" },
  ],
  image_caption: true,
  // ============================================================ image plugin END
};
useScriptTag(
  "/InclusiveLibrary/tinymce/tinymce.min.js",
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
    console.log("==========load result");
    initTinymce();
  }
);
const initTinymce = async () => {
  tinymce.init(options);
};
const exportStr = () => {
  let content = tinymce.activeEditor.getContent();
  exportContent.value = content;
};
const initData = () => {
  tinymce.activeEditor.setContent(
    `<div class="test" style="color:blue">测试初始化</div>`
  );
};
const changeSkin = () => {
  let mode = localStorage.getItem("vuepress-color-scheme");
  console.log("==========do change skin", mode);
  console.log("==========");
  tinymce.activeEditor.remove();
  tinymce.init({
    ...options,
    skin: mode === "dark" ? "oxide-dark" : "oxide",
    content_css: mode === "dark" ? "dark" : "default",
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
  .export-area {
    .wrapper {
      max-height: 300px;
      overflow: auto;
    }
  }
}
</style>
