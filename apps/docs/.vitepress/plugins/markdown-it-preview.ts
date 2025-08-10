import type { MarkdownRenderer } from 'vitepress';
import container from 'markdown-it-container';

export const preview = (md: MarkdownRenderer) => {
    md.use(container, 'preview', {
        validate: (params: string) => {
            // 验证 :::preview 后面的标记是否合法
            return !!params.trim().match(/^preview\s*(.*)$/);
        },
        render: (tokens: any[], idx: number) => {
            // :::preview 到 ::: 之间的内容
            const token = tokens[idx];

            // `render` 函数在每个 token 上都会被调用
            // 我们只在开始标记（opening tag）时处理
            if (token.nesting === 1) {
                // 寻找结束标记
                let i = idx;
                while (i < tokens.length) {
                    if (
                        tokens[i].type === 'container_preview_close' &&
                        tokens[i].nesting === -1
                    )
                        break;
                    i++;
                }

                // 提取 :::preview 到 ::: 之间的原始源码
                const sourceCode = tokens
                    .slice(idx + 1, i)
                    .map(t => t.content)
                    .join('');

                // 使用 VitePress 内置的语法高亮器来处理源码
                // 'vue' 是语言标识符，'' 表示没有额外的 meta 信息
                const highlightedCode = md.options.highlight!(sourceCode, 'vue', '');

                // 将高亮后的 HTML 编码，以便安全地作为 prop 传递
                const encodedHighlightedCode = encodeURIComponent(highlightedCode);

                // 返回自定义 Vue 组件的 HTML 字符串
                // 源码通过 prop 传递给组件
                // 示例的实时渲染则通过 slot 实现
                return `<DemoPreview highlightedCode="${encodedHighlightedCode}" sourceCode="${encodeURIComponent(sourceCode)}">\n`;
            }
            return '</DemoPreview>\n';
        }
    });
};