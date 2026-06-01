# Migrating to Railway (with Resend email)

This site is currently deployed to GitHub Pages as a static build. The contact form falls back to `mailto:` because static hosting can't run server code.

When you're ready to switch to Railway + Resend (for real form email delivery), follow these steps.

## What you'll get

- Real form submissions delivered via [Resend](https://resend.com) to the appropriate inbox (sales / support / general / etc.)
- The site served from your own domain (e.g. `guardedgrowthip.com`) instead of `karanggip.github.io/ggip-website-new`
- Ability to add more API endpoints later (e.g. demo bookings, RenewalEngine quote forms)

## One-time setup

### 1. Sign up for Resend

- Go to [resend.com](https://resend.com), create an account (free tier: 3,000 emails/month, 100/day).
- Verify your sending domain (e.g. `mail.guardedgrowthip.com`). Add the DNS records they provide to wherever you manage DNS (Cloudflare, Route 53, etc.).
- Once verified, create an **API key** with "Sending access" — copy it.

### 2. Create the Railway project

- Sign up at [railway.app](https://railway.app), create a new project.
- Connect to GitHub repo `karanggip/ggip-website-new`.
- Railway will detect Astro and deploy automatically.

### 3. Configure environment variables in Railway

Add this env var:

```
RESEND_API_KEY = re_xxxxxxxxxxxxx (your Resend key)
```

### 4. Switch your custom domain to Railway

In Railway → Settings → Domains, add your domain and follow the DNS instructions. Remove the GH Pages domain assignment when done.

## Code changes (one-time, before pushing)

### `astro.config.mjs` — switch to hybrid output + Node adapter

```diff
 import { defineConfig } from "astro/config";
 import react from "@astrojs/react";
 import tailwind from "@astrojs/tailwind";
+import node from "@astrojs/node";

 export default defineConfig({
-  output: "static",
-  site: "https://karanggip.github.io",
-  base: "/ggip-website-new",
+  output: "hybrid",
+  site: "https://guardedgrowthip.com", // your real domain
+  adapter: node({ mode: "standalone" }),
   integrations: [
     react(),
     tailwind({ applyBaseStyles: false }),
   ],
 });
```

### Activate the API endpoint

```bash
mv src/pages/api/contact.ts.disabled src/pages/api/contact.ts
```

### Install Resend

```bash
npm install resend
```

### Update the Resend `from` address

In `src/pages/api/contact.ts`, change:

```ts
const FROM = "Guarded Growth <onboarding@resend.dev>";
```

to your verified domain sender, e.g.:

```ts
const FROM = "Guarded Growth <contact@mail.guardedgrowthip.com>";
```

### Remove the GitHub Pages workflow (optional)

`.github/workflows/deploy.yml` is no longer needed if you've fully cut over.

### Disable URL prefixing

Open `src/utils/url.ts` — the `url()` helper prepends Astro's BASE_URL. Once `base` is removed from `astro.config.mjs`, it will become an empty prefix automatically. Nothing else to change.

## Deploy

```bash
git add -A
git commit -m "Switch to Railway + Resend email backend"
git push origin main
```

Railway auto-deploys on push. Open your domain, fill out the contact form, and confirm the email lands in `info@guardedgrowthip.com` (or the routed inbox based on subject).

## Rollback

If anything goes wrong:

```bash
git revert HEAD
git push origin main
```

GitHub Pages → static build setup is preserved in git history.
