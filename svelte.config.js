import { mdsvex, escapeSvelte } from 'mdsvex'
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.svx'],
    layout: {
        // _: './src/mdsvex.svelte'
    },
    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await createHighlighter({
                themes: ['vitesse-light', 'vitesse-black'],
                langs: ['javascript', 'typescript']
            })
            await highlighter.loadLanguage('javascript', 'typescript')
            const html = escapeSvelte(highlighter.codeToHtml(code, {
                lang, themes: {
                    light: 'vitesse-light',
                    dark: 'vitesse-black'
                }
            }))
            return `{@html \`${html}\` }`
        }
    },
    remarkPlugins: [[remarkToc, { tight: true }]],
    rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }
    },
    extensions: [".svelte", ".svx"]
};

export default config;
