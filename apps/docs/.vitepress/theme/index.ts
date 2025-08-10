import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// @ts-ignore
import MyUI from '@my-vue-turborepo/ui'
import '@my-vue-turborepo/ui/style.css'

// 导入我们的新组件
import DemoPreview from './components/DemoPreview.vue' // 👈 添加

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(MyUI)
        // 全局注册 DemoPreview 组件
        app.component('DemoPreview', DemoPreview) // 👈 添加
    }
} satisfies Theme