import { mdsvex, escapeSvelte } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.svx'],
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
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        adapter: adapter()
    },

    extensions: [".svelte", ".svx"]
};

export default config;
