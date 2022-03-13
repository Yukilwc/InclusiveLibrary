import { defineUserConfig, DefaultThemeOptions } from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'zh-CN',
    title: 'Misaka Net',
    description: '学习，工作，生活',
    base: "/InclusiveLibrary/",
    head: [
        [
            'link', {
                rel: 'icon', href: '/images/favicon.png'
            }
        ]
    ],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/favicon.png',
    },
})