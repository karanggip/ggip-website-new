import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://karanggip.github.io",
  base: "/ggip-website-new",
  // "ignore" lets the server serve /foo and /foo/ as the same page (dev + most
  // static hosts). Canonical URL in Base.astro is normalized to always include
  // the trailing slash, so SEO sees one form regardless of how it was typed.
  trailingSlash: "ignore",
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
