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

export const collections = { jobs };
