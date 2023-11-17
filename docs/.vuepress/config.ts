import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
export default defineUserConfig({
  lang: "zh-CN",
  title: "知识库",
  description: "知识库",
  port: 8181,
  base: "/InclusiveLibrary/",
  theme: defaultTheme({

  }),
});
