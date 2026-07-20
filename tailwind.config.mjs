/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

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
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        glitch: 'glitch 0.3s ease-in-out infinite'
      }
    }
  },
  plugins: [
    typography,
    forms
  ],
};