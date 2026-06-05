// Generate Open Graph PNG images by screenshotting the preview pages
// at /og/home and /og/docketengine. Run while `npm run dev` is active.
//
//   node scripts/generate-og.mjs
//
// Output: public/assets/og-home.png and public/assets/og-docketengine.png (2x retina)

import { chromium } from "playwright";
import fs from "node:fs";

const DEV_URL = "http://localhost:4321/ggip-website-new";

const targets = [
  { path: "/og/home/",         file: "public/assets/og-home.png" },
  { path: "/og/docketengine/", file: "public/assets/og-docketengine.png" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,    // crisp on retina/social preview readers
});
const page = await context.newPage();

for (const { path, file } of targets) {
  const url = DEV_URL + path;
  console.log(`Capturing ${url} → ${file}`);
  await page.goto(url, { waitUntil: "networkidle" });
  // Remove Astro's dev toolbar that overlays the bottom of every dev-server page
  await page.evaluate(() => {
    document.querySelectorAll("astro-dev-toolbar, astro-dev-overlay").forEach((el) => el.remove());
  });
  // Give web fonts a beat to settle so we don't catch a flash of fallback
  await page.waitForTimeout(500);
  const card = page.locator(".card");
  await card.screenshot({ path: file });
  const { size } = fs.statSync(file);
  console.log(`  Saved (${(size / 1024).toFixed(1)} KB)`);
}

await browser.close();
console.log("Done. PNGs written under public/assets/");
