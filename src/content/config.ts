import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title:      z.string(),
    department: z.string(),
    location:   z.string().default("Remote"),
    type:       z.string().default("Full-time"),
    summary:    z.string(),
    applyUrl:   z.string().optional(),
    applyEmail: z.string().optional(),
    posted:     z.date(),
    published:  z.boolean().default(true),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title:      z.string(),
    date:       z.date(),
    author:     z.string(),
    category:   z.enum(["Docketing", "Renewals", "IP Strategy", "Product Updates"]),
    excerpt:    z.string(),
    coverColor: z.enum(["indigo", "violet", "blue", "slate"]).default("indigo"),
    readTime:   z.number().default(5),
    published:  z.boolean().default(true),
  }),
});

export const collections = { jobs, blog };
