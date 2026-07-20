// Fichier : media-finance-crypto/tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        deep: '#222831',
        surface: '#393E46',
        accent: '#948979',
        sand: '#DFD0B8',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.sand'),
            '--tw-prose-headings': theme('colors.sand'),
            '--tw-prose-links': theme('colors.sand'),
            '--tw-prose-bold': theme('colors.sand'),
            '--tw-prose-quotes': theme('colors.sand'),
            '--tw-prose-counters': theme('colors.accent'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.surface'),
            '--tw-prose-th-borders': theme('colors.surface'),
            '--tw-prose-td-borders': theme('colors.surface'),
            'p': { 
              fontWeight: '500',
              lineHeight: '1.7',
            },
            'a': {
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.accent')}`,
              transition: 'border-color 0.2s ease',
            },
            'a:hover': {
              borderColor: theme('colors.sand'),
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}