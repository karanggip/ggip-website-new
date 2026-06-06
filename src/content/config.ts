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
    coverImage: z.string().optional(),
    readTime:   z.number().default(5),
    published:  z.boolean().default(true),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title:         z.string(),
    subtitle:      z.string().optional(),
    effectiveDate: z.string().optional(),
    published:     z.boolean().default(true),
    seoTitle:      z.string().optional(),
    seoDescription:z.string().optional(),
  }),
});

export const collections = { jobs, blog, legal };
