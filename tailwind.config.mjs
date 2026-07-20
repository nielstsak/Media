/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sombre: '#222831',
        gris: '#393E46',
        sable: '#948979',
        creme: '#DFD0B8'
      },
      fontSize: {
        'h1': 'clamp(2.5rem, 5vw, 4rem)',
        'h2': 'clamp(2rem, 4vw, 3rem)',
        'h3': 'clamp(1.75rem, 3vw, 2.5rem)',
        'h4': 'clamp(1.5rem, 2.5vw, 2rem)',
        'h5': 'clamp(1.25rem, 2vw, 1.5rem)',
        'h6': 'clamp(1rem, 1.5vw, 1.25rem)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};