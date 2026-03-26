import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    showInNav: z.boolean().default(false),
    order: z.number().default(999),
    heroImage: z.string().optional(),
  }),
});

const profile = defineCollection({
  loader: glob({ base: './src/content/profile', pattern: '*.yaml' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    affiliation: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    office: z.string().optional(),
    orcid: z.string().optional(),
    cvUrl: z.string().optional(),
    publicationsPdfUrl: z.string().optional(),
    heroTags: z.array(z.string()).default([]),
    interests: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '*.yaml' }),
  schema: z.object({
    updated: z.string(),
    items: z.array(
      z.object({
        id: z.string(),
        year: z.number(),
        status: z.enum(['published', 'forthcoming']).default('published'),
        type: z.enum(['book', 'edited_volume', 'chapter', 'article', 'other']),
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        details: z.string().optional(),
        doi: z.string().optional(),
        url: z.string().optional(),
      }),
    ),
  }),
});

export const collections = {
  pages,
  profile,
  publications,
};
