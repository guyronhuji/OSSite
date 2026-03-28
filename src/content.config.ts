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
    themeIcon: z.string().optional(),
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
    updated: z.union([z.string(), z.date()]).transform((value) => (typeof value === 'string' ? value : value.toISOString().slice(0, 10))),
    items: z.array(
      z.object({
        id: z.string().optional(),
        year: z.number().optional(),
        status: z.enum(['published', 'forthcoming']).default('published').optional(),
        type: z.enum(['book', 'edited_volume', 'chapter', 'article', 'other']).optional(),
        title: z.string().optional(),
        authors: z.string().optional(),
        venue: z.string().optional(),
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
