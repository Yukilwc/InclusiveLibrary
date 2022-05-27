import { defineClientConfig } from "@vuepress/client";
import "./styles/element/index.scss";
import ElementPlus from "element-plus";
// import 'element-plus/dist/index.css'
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    console.log("========== defineClientAppEnhance");
    app.use(ElementPlus);
  },
});
