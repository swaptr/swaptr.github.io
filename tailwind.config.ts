import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    fontFamily: {
      sans: ["'Inter'", 'sans-serif']
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '*': {
              color: "hsl(var(--foreground))",
              margin: "0"
            },
            a: {
              textDecoration: 'none'
            },
            'li::marker': {
              color: "hsl(var(--foreground))"
            }
          }
        }
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))"
      },
    }
  },

  plugins: [typography(
    { className: "article" }
  )]
} satisfies Config;
