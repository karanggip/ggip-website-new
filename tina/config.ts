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
        name: "job",
        label: "Open Roles",
        path: "src/content/jobs",
        format: "md",
        fields: [
          { type: "string",   name: "title",      label: "Role Title",     required: true, isTitle: true },
          { type: "string",   name: "department", label: "Department",     required: true,
            options: ["Engineering", "Product", "Design", "Go-to-Market", "IP Operations", "Operations"] },
          { type: "string",   name: "location",   label: "Location",       description: "e.g. Remote (US / EU timezones), London, NYC" },
          { type: "string",   name: "type",       label: "Employment Type",
            options: ["Full-time", "Part-time", "Contract", "Internship"] },
          { type: "string",   name: "summary",    label: "Short Summary",  required: true,
            description: "1-2 sentences shown on the careers page tile",
            ui: { component: "textarea" } },
          { type: "string",   name: "applyEmail", label: "Apply Email",    description: "e.g. careers@guardedgrowthip.com — used for the Apply button mailto:" },
          { type: "string",   name: "applyUrl",   label: "Apply URL",      description: "Optional. Overrides applyEmail if provided." },
          { type: "datetime", name: "posted",     label: "Posted Date",    required: true },
          { type: "boolean",  name: "published",  label: "Published",      description: "Uncheck to hide from the website" },
          { type: "rich-text",name: "body",       label: "Full Job Description",  isBody: true },
        ],
        ui: {
          dateFormat: "MMMM DD YYYY",
          router: ({ document }) => `/company/careers/${document._sys.filename}/`,
        },
      },
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          { type: "string",   name: "title",     label: "Title",     required: true, isTitle: true },
          { type: "datetime", name: "date",      label: "Date",      required: true },
          { type: "string",   name: "author",    label: "Author",    required: true },
          { type: "string",   name: "category",  label: "Category",  required: true,
            options: ["Docketing", "Renewals", "IP Strategy", "Product Updates"] },
          { type: "string",   name: "excerpt",   label: "Excerpt",   required: true,
            description: "1-2 sentences shown on the blog index card",
            ui: { component: "textarea" } },
          { type: "string",   name: "coverColor",label: "Cover Color",
            options: ["indigo", "violet", "blue", "slate"] },
          { type: "number",   name: "readTime",  label: "Read Time (minutes)" },
          { type: "boolean",  name: "published", label: "Published" },
          { type: "rich-text",name: "body",      label: "Body",      isBody: true },
        ],
        ui: {
          dateFormat: "MMMM DD YYYY",
          router: ({ document }) => `/blog/${document._sys.filename}/`,
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
