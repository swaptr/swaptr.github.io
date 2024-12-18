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
            color: "hsl(var(--foreground))",
            '*': {
              color: "hsl(var(--foreground))",
              margin: "0"
            },
            'h1, h2, h3, h4, h5, h6': {
              textAlign: 'center',
              marginTop: 4,
              marginBottom: 4
            },
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
