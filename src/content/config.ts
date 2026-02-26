import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
    image: z.string().optional(),
    author: z.string().default('Astro Team'),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog,
};
