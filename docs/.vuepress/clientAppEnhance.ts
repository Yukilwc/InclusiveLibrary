import { defineClientAppEnhance } from '@vuepress/client'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export default defineClientAppEnhance(({ app, router, siteData }) => {
    console.log('========== defineClientAppEnhance',)
    app.use(Antd)
})