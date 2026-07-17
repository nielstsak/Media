// Fichier : media-finance-crypto/tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        'brutal': '6px 6px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-hover': '2px 2px 0px 0px #000000',
      },
      colors: {
        base: '#ffffff',
        primary: '#fbbf24', // Amber 400
        secondary: '#38bdf8', // Light Blue 400
        accent: '#f472b6', // Pink 400
        dark: '#000000',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#000000',
            '--tw-prose-headings': '#000000',
            '--tw-prose-links': '#000000',
            '--tw-prose-bold': '#000000',
            '--tw-prose-quotes': '#000000',
            'p': {
              fontWeight: '500',
            },
            'a': {
              borderBottom: '4px solid #000000',
              textDecoration: 'none',
              fontWeight: '900',
              transition: 'all 0.2s ease-in-out',
            },
            'a:hover': {
              backgroundColor: '#fbbf24',
            },
            'h1, h2, h3, h4': {
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
            },
            'img': {
              border: '6px solid #000000',
              boxShadow: '6px 6px 0px 0px #000000',
              borderRadius: '0',
            },
            'pre': {
              border: '6px solid #000000',
              boxShadow: '6px 6px 0px 0px #000000',
              borderRadius: '0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}