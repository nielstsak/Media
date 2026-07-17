// Fichier : media-finance-crypto/src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const news = await getCollection('news');
  
  return rss({
    title: 'Media Finance & Crypto',
    description: 'Actualités et analyses de l\'écosystème web3 et financier',
    site: context.site,
    items: news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: `News express: ${item.data.title}`,
      link: `/news/${item.slug}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}