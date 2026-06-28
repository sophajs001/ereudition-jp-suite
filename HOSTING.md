# Hosting on a shared host (cPanel / Hostinger / Namecheap)

This site is built with TanStack Start. The dev preview is dynamic, but you
can export every page to plain HTML and upload to any cheap static host.

## One-time setup (on your computer)

Install [Bun](https://bun.sh/), then in the project folder:

```bash
bun install
```

## Export the static site

```bash
# 1. Build the production bundle
bun run build

# 2. Start the local production server (leave this terminal open)
bun run start

# 3. In a SECOND terminal, run the static export
bun scripts/export-static.mjs
```

You now have a `static-site/` folder containing:

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
└── _build/ assets/ ...     ← CSS, JS, images, fonts
```

## Upload

1. Open cPanel → File Manager → `public_html`.
2. Upload the **CONTENTS** of `static-site/` (not the folder itself).
3. Visit your domain. `index.html` loads automatically.

That's it. No Node, no database, no backend needed on the host.

## Updating the site

After making changes locally, re-run the three commands above and re-upload
the new `static-site/` contents (overwrite).
