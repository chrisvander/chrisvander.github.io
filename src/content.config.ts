import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import * as com from "./lexicons/com";
import { atLoader } from "at-astro-loader";

const projects = defineCollection({
  loader: atLoader(com.chrisvanderloo.project, {
    endpoint: "https://bsky.chrisvanderloo.com",
    repo: "chrisvanderloo.com",
  }),
});

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

export const collections = {
  blog: blogCollection,
  projects,
};
