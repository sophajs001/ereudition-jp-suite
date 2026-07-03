# Hosting Erudition JP on shared hosting (Whogohost / cPanel / Hostinger)

## ⚠️ Very important — read this first

This project is a **server-rendered app** (TanStack Start). Running
`bun run build` produces a Cloudflare Worker under `dist/` — **there is no
`index.html` in `dist/client/`**, so uploading that folder to whogohost will
show a blank / broken site with no blog articles and no new content.

For shared hosting you must use the **static export** script, which snapshots
the live published Lovable site into plain HTML.

## The correct workflow (do this every time you make changes)

1. **In Lovable, click Publish → Update.** This deploys your latest changes
   to `https://ereudition-jp-suite.lovable.app`. If you skip this step, the
   export below will snapshot the OLD version and whogohost will keep
   showing the old content.

2. **In your terminal, run the export script:**

   ```bash
   bun scripts/export-static.mjs
   ```

   This crawls the freshly-published site and writes every page (home,
   about, services, properties, portfolio, contact, blog list, **and every
   individual blog article**) into `static-site/`. It also downloads every
   image, JS bundle, CSS file, and team/project photo, and writes an
   `.htaccess` SPA fallback so deep links keep working.

3. **Upload the CONTENTS of `static-site/` to whogohost `public_html/`.**
   Not the folder itself — the files inside it. Delete the old files in
   `public_html/` first (or use "Overwrite" in the File Manager) so stale
   assets are replaced.

## What you should see in `static-site/` after the export

```
static-site/
├── .htaccess               ← SPA fallback for Apache
├── index.html              ← home
├── about/index.html
├── services/index.html
├── properties/index.html
├── portfolio/index.html
├── contact/index.html
├── blog/index.html
├── blog/choosing-building-materials/index.html
├── blog/land-ownership-abuja/index.html
├── blog/sustainable-construction-nigeria/index.html
├── blog/what-is-bill-of-quantities/index.html
├── blog/choosing-contractor-abuja/index.html
├── blog/real-estate-investment-abuja/index.html
├── assets/                 ← JS, CSS, bundled images
└── __l5e/assets-v1/…       ← team + project photos
```

If any of those `blog/<slug>/index.html` files are missing, you skipped
step 1 (publish) — re-publish then re-run the export.

## Common mistakes

- ❌ Uploading `dist/client/` — no HTML, blank site.
- ❌ Running the export without publishing first — old content on the host.
- ❌ Uploading `static-site/` as a folder instead of its contents — site
  ends up at `yourdomain.com/static-site/` instead of the root.
- ❌ Leaving old files in `public_html/` — cached bundles fight the new
  ones. Clear `public_html/` (except cPanel system files) before uploading.

## Local preview of the export

```bash
bun scripts/export-static.mjs
bunx serve static-site
```

Open http://localhost:3000 and click through every page, including a blog
article, to confirm the export matches what you see on Lovable.
