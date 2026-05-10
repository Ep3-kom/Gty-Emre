import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const inzichten = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/inzichten' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('GTY'),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    norm: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { inzichten, cases, legal };
