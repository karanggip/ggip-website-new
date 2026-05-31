import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          { type: "string",   name: "title",    label: "Title",    required: true, isTitle: true },
          { type: "datetime", name: "date",      label: "Date",     required: true },
          { type: "string",   name: "author",    label: "Author" },
          { type: "string",   name: "category",  label: "Category",
            options: ["Docketing", "Renewals", "IP Strategy", "Product Updates"] },
          { type: "string",   name: "excerpt",   label: "Excerpt",  ui: { component: "textarea" } },
          { type: "string",   name: "coverImage",label: "Cover Image URL" },
          { type: "rich-text",name: "body",      label: "Body",     isBody: true },
        ],
        ui: {
          dateFormat: "MMMM DD YYYY",
        },
      },
      {
        name: "doc",
        label: "Help Docs",
        path: "src/content/docs",
        format: "mdx",
        fields: [
          { type: "string",   name: "title",    label: "Title",    required: true, isTitle: true },
          { type: "string",   name: "category", label: "Category",
            options: ["Getting Started", "DocketEngine Guide", "RenewalEngine Guide", "Account & Billing", "API Reference", "FAQs"] },
          { type: "number",   name: "order",    label: "Sort Order" },
          { type: "rich-text",name: "body",     label: "Body",     isBody: true },
        ],
      },
    ],
  },
});
