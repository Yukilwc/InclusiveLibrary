import { defineUserConfig, DefaultThemeOptions, PluginOptions, PluginConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'zh-CN',
    title: 'Misaka Net',
    description: '学习，工作，生活',
    base: "/InclusiveLibrary/",
    head: [
        [
            'link', {
                rel: 'icon', href: '/InclusiveLibrary/images/favicon.png'
            }
        ]
    ],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/favicon.png',
        repo: "https://github.com/Yukilwc/InclusiveLibrary",
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
            components: {
            },
        }) as PluginConfig<PluginOptions>,
    ]
})