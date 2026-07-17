// Fichier : media-finance-crypto/src/content/config.ts
import { z, defineCollection } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title_seo: z.string(),
    title: z.string(),
    description: z.string().max(150),
    image: z.string().optional(),
    score: z.number().min(1).max(10),
    affiliate_link: z.string().url(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
  }),
});

const tutosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.enum(['Débutant', 'Intermédiaire', 'Expert']),
    read_time: z.number(),
    tools: z.array(z.string()),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    source_link: z.string().url(),
    tags: z.array(z.string()),
    date: z.date(),
  }),
});

export const collections = {
  'reviews': reviewsCollection,
  'tutos': tutosCollection,
  'news': newsCollection,
};