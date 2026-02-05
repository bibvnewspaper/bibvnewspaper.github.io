import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    issue: z.string(),
    draft: z.boolean().default(false),
  }),
});

const issues = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    issue: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, issues };
