import { defineUserConfig, DefaultThemeOptions } from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'zh-CN',
    title: '我的博客',
    description: '学习，工作，生活',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '',
    },
})