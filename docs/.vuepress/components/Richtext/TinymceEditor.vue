<template>
  <div>tinymce</div>
  <div class="" id="tinymce-1"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import tinymce from "tinymce";
/* Default icons are required. After that, import custom icons if applicable */
import "tinymce/icons/default";
/* Required TinyMCE components */
import "tinymce/themes/silver";
import "tinymce/models/dom";

/* Import a skin (can be a custom skin instead of the default) */
import 'tinymce/skins/ui/oxide/skin.css';
/* Import plugins */
import "tinymce/plugins/advlist";
import "tinymce/plugins/code";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin'; */
/* import './plugins/powerpaste/plugin'; */
/* import './plugins/powerpaste/js/wordimport'; */

/* content UI CSS is required */
// import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.css';

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
// import contentCss from 'tinymce/skins/content/default/content.css';

onMounted(() => {
  tinymce.init({
    selector: "#tinymce-1",
    plugins: "advlist code emoticons link lists table",
    toolbar: "bold italic | bullist numlist | link emoticons",
    skin: false,
    // skin_url: '/tinymce/skins/ui/oxide',
    // content_css: false,
    // content_style: contentUiSkinCss.toString() + "\n" + contentCss.toString(),
  });
});
</script>

<style scoped lang="scss"></style>
