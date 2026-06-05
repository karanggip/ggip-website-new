import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://karanggip.github.io",
  base: "/ggip-website-new",
  trailingSlash: "always",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
