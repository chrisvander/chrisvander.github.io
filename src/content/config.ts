import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    banner: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    repo: z.string(),
    language: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
