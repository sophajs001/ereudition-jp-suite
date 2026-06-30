# Hosting Erudition JP on shared hosting (Whogohost, cPanel, etc.)

All images are now **real local files** bundled by Vite — there is no CDN, no JSON pointers, no broken links. Just build and upload.

## Quick steps

```bash
bun install
bun run build
```

Then upload **everything inside `dist/client/`** to your host's `public_html` folder.

That folder contains:
- `index.html` and a folder per route (`about/`, `services/`, `portfolio/`, `properties/`, `blog/`, `contact/`, and each blog article under `blog/<slug>/`)
- `assets/` — all CSS, JS and **images** (team photos, project photos, logo) with cache-friendly hashed filenames
- `_headers` — cache rules (ignored by basic shared hosting; harmless)

## Local preview

```bash
bun run build
bunx serve dist/client
```

Open http://localhost:3000 — every page should look identical to production.

## File / folder structure

```
src/
  EruditionJP/
    assets/
      logo/        ← logo.png
      team/        ← jude.jpg, prisca.jpg, ruth.jpg, ...
      projects/    ← all site photography
  components/
  data/company.ts  ← imports the images directly with ES modules
  routes/          ← one file per page
```

If you add or replace any image, drop the new `.jpg` / `.png` straight into the correct `EruditionJP/assets/...` folder and import it from `src/data/company.ts` — no CDN steps required.
