// Fichier : media-finance-crypto/astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://votre-domaine.com',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
  ],
});