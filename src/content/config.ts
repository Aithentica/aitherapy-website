import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    author: z.string(),
    category: z.enum(['Inne', 'Artykuły Naukowe', 'Wydarzenia']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const blogEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    author: z.string(),
    category: z.enum(['Other', 'Scientific Articles', 'Events']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'blog-en': blogEn };
