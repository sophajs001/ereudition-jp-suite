# Hosting on a shared host (cPanel / Hostinger / Namecheap / any static host)

Your site is built with TanStack Start. To deploy it on a plain shared host
that only serves static files, run the export script below — it downloads
every page from your live Lovable URL as a static HTML file plus all assets.

## Step 1 — Publish on Lovable

In the Lovable editor, click **Publish → Update**. This makes your latest
changes available at:

```
https://ereudition-jp-suite.lovable.app
```

(Re-publish whenever you change the site.)

## Step 2 — Export to static HTML

Install [Bun](https://bun.sh/) once, then in the project folder run:

```bash
bun scripts/export-static.mjs
```

This creates a `static-site/` folder:

```
static-site/
├── index.html              ← homepage
├── about/index.html
├── services/index.html
├── properties/index.html
├── portfolio/index.html
├── contact/index.html
├── blog/index.html
├── blog/<each-post>/index.html
└── _build/  assets/  ...   ← CSS, JS, images, fonts
```

## Step 3 — Upload

1. Open cPanel → **File Manager → `public_html`**.
2. Upload the **contents** of `static-site/` (not the folder itself).
3. Visit your domain. `index.html` loads automatically.

No Node, no database, no backend on the host. Pure static files.

## Using a custom domain instead of the Lovable URL

```bash
BASE=https://your-domain.com bun scripts/export-static.mjs
```

## Updating the site

1. Edit in Lovable.
2. Click **Publish → Update**.
3. Re-run `bun scripts/export-static.mjs`.
4. Re-upload the new `static-site/` contents (overwrite).

## Why not just upload the `public/` folder?

The `public/` folder in this project only contains the favicon and source
assets — not the actual website. The compiled HTML for each page only
exists after a build. The export script above produces that compiled HTML.
