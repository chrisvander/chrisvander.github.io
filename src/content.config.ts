import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import * as com from "./lexicons/com";
import { atLoader, defineStandardSiteDocumentRenderer } from "at-astro-loader";
import { site } from "at-astro-loader/lexicons";

const projects = defineCollection({
  loader: atLoader(com.chrisvanderloo.project, {
    endpoint: "https://bsky.chrisvanderloo.com",
    repo: "chrisvanderloo.com",
  }),
});

const atprotoBlogCollection = defineCollection({
  loader: atLoader(site.standard.document, {
    endpoint: "https://bsky.chrisvanderloo.com",
    repo: "chrisvanderloo.com",
    renderer: defineStandardSiteDocumentRenderer({
      shikiConfig: {
        themes: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha",
        },
      },
    }),
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
  atprotoBlog: atprotoBlogCollection,
  projects,
};
