import { defineCollection, z } from 'astro:content';

const imageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.array(z.object({
      url: z.string(),
      caption: z.string().optional(),
      date: z.string().optional(),
    })),
  }),
});

export const collections = {
  'locations': imageCollection,
};