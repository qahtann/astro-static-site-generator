/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(var(--color-text) / <alpha-value>)',
            '[class~="lead"]': {
              color: 'rgb(var(--color-text) / 0.8)',
            },
            a: {
              color: 'rgb(var(--color-primary) / <alpha-value>)',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(var(--color-primary) / 0.8)',
              },
            },
            strong: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
              fontWeight: '600',
            },
            'ol > li::before': {
              color: 'rgb(var(--color-text) / 0.6)',
            },
            'ul > li::before': {
              backgroundColor: 'rgb(var(--color-text) / 0.3)',
            },
            hr: {
              borderColor: 'rgb(var(--color-border) / <alpha-value>)',
            },
            blockquote: {
              color: 'rgb(var(--color-text) / 0.8)',
              borderLeftColor: 'rgb(var(--color-primary) / <alpha-value>)',
            },
            h1: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
            },
            h2: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
            },
            h3: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
            },
            h4: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
            },
            code: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
              backgroundColor: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'a code': {
              color: 'rgb(var(--color-text) / <alpha-value>)',
            },
            pre: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
              backgroundColor: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
            },
            thead: {
              color: 'rgb(var(--color-text) / <alpha-value>)',
              borderBottomColor: 'rgb(var(--color-border) / <alpha-value>)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(var(--color-border) / <alpha-value>)',
            },
          },
        },
      },
      colors: {
        border: 'rgb(var(--color-border) / <alpha-value>)',
        bg: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--color-text) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        },
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
