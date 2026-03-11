import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx,markdown}",
  }),
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
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.json",
  }),
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
