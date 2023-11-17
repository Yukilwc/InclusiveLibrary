import { defineClientConfig } from '@vuepress/client'
import Home from "./layouts/home/index.vue"
import RegexPanel from "../programmingKnowledge/regex/RegexPanel.vue"
import CodePanel from "./components/CodePanel/index.vue"
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('RegexPanel',RegexPanel)
    app.component('CodePanel',CodePanel)
  },
  setup() {},
  rootComponents: [],
  layouts: {
    Home
  },
})