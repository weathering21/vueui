import { defineConfig } from 'vitepress'
import { preview } from './plugins/markdown-it-preview'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My UI Repo",
    description: "A VitePress Site for My Component Library",
    base: '/', // 如果你打算部署到 GitHub Pages 的子路径，需要修改这里
    markdown: { // 👈 添加 markdown 配置
        config: (md) => {
            md.use(preview)
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg', // 你可以在 public 目录放一个 logo 文件

        nav: [
            { text: '指南', link: '/guide' },
            { text: '组件', link: '/components/button' }
        ],

        sidebar: {
            '/components/': [
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/components/button' },
                        { text: 'Card 卡片', link: '/components/card' },
                        { text: 'Input 输入框', link: '/components/input' },
                        { text: 'Slider 滑块', link: '/components/slider' },      // 👈 添加
                        { text: 'Loading 加载', link: '/components/loading' },    // 👈 添加
                    ]
                },
                {
                    text: '复合组件',
                    items: [
                        { text: 'Dialog 对话框', link: '/components/dialog' },
                        { text: 'Table 表格', link: '/components/table' },        // 👈 添加
                        { text: 'Tabs 标签页', link: '/components/tabs' },
                        { text: 'Tree 树形控件', link: '/components/tree' },
                    ]
                },
                {
                    text: '布局组件',
                    items: [
                        { text: 'Layout 布局', link: '/components/layout' },       // 👈 添加
                    ]
                },
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 换成你的项目 GitHub 链接
        ]
    }
})