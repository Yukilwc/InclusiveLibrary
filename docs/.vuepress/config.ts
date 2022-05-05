import { defineUserConfig, } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default"
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { docsearchPlugin } from "@vuepress/plugin-docsearch"
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
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
    theme: defaultTheme({
        logo: '/images/favicon.png',
        repo: "https://github.com/Yukilwc/InclusiveLibrary",

    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
            components: {
            },
        }),
        // docsearchPlugin({
        //     apiKey: '',
        //     indexName: '',
        //     appId:'',
        //     placeholder:'查询',
        //     // https://www.algolia.com/doc/api-reference/search-api-parameters/
        //     searchParameters:{}
        // }) as PluginConfig<PluginOptions>,
        searchPlugin({
            isSearchable: (page) => page.path !== '/',
        }),
    ]
})