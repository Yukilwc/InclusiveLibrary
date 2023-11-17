import { defineClientConfig } from '@vuepress/client'
import Home from "./layouts/home/index.vue"
import RegexPanel from "../programmingKnowledge/regex/RegexPanel.vue"
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('RegexPanel',RegexPanel)
  },
  setup() {},
  rootComponents: [],
  layouts: {
    Home
  },
})