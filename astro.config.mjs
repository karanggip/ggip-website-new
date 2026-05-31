import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://karanggip.github.io",
  base: "/ggip-website-new",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
