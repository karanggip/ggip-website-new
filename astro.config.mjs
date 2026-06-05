import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://karanggip.github.io",
  base: "/ggip-website-new",
  trailingSlash: "always",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      filter: (page) => !page.includes("/og/"),
    }),
  ],
});
