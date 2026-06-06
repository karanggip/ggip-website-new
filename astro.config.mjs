import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// Hybrid output (SSR + static prerender) — required for /api/* endpoints.
// Pages without `prerender = false` still emit as static HTML at build time.
// Old GitHub Pages config preserved in git history (output: "static",
// base: "/ggip-website-new", site: "https://karanggip.github.io").
export default defineConfig({
  output: "hybrid",
  adapter: node({ mode: "standalone" }),

  // Real production domain. Used by Astro.site for canonical URLs, sitemap,
  // OG tags, and JSON-LD. Update DNS to point here once Railway is wired up.
  site: "https://guardedgrowthip.com",

  // No `base` prefix on a custom domain — we serve from the root.
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
