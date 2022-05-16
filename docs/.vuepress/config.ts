import { defineUserConfig, } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default"
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { docsearchPlugin } from "@vuepress/plugin-docsearch"
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { viteBundler } from '@vuepress/bundler-vite'
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
            },
        ],
        [
            "link", { rel: 'manifest', href: '/InclusiveLibrary/manifest.webmanifest' }
        ],
        ['meta', { name: 'theme-color', content: '#00a6ac' }],
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
                Code2Snippets:path.resolve(__dirname,"../Tools/Online/Code2SnippetsJson/components/Code2Snippets.vue")
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
        pwaPlugin({
            skipWaiting: false,
        }),
        pwaPopupPlugin({
            locales: {
                '/': {
                    message: '发现新内容可用',
                    buttonText: '刷新',
                },
            }
        }),
        googleAnalyticsPlugin({
            id: 'G-E8JW1JB5MY'
        })
    ],
    // bundler: viteBundler({
    //     viteOptions: {
    //         build: {
    //         }
    //     },
    //     vuePluginOptions: {},
    // }),
})