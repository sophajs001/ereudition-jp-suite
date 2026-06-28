/**
 * Static export script.
 *
 * Crawls the locally running production server and writes every page to
 * `static-site/` as plain HTML files (plus all assets). Upload the
 * contents of `static-site/` to any shared host (cPanel, Hostinger,
 * Namecheap public_html, etc.).
 *
 * Usage:
 *   1. bun run build
 *   2. bun run start         (in another terminal, leave it running)
 *   3. bun scripts/export-static.mjs
 *   4. Zip the contents of static-site/ and upload to public_html.
 */
import { mkdir, writeFile, cp, rm, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = process.env.EXPORT_BASE || "http://localhost:3000";
const OUT = "static-site";

const PAGES = [
  "/",
  "/about",
  "/services",
  "/properties",
  "/portfolio",
  "/blog",
  "/contact",
  "/blog/choosing-building-materials",
  "/blog/land-ownership-abuja",
  "/blog/sustainable-construction-nigeria",
  "/blog/what-is-bill-of-quantities",
  "/blog/choosing-contractor-abuja",
  "/blog/real-estate-investment-abuja",
];

async function fetchHtml(path) {
  const res = await fetch(`${BASE}${path}`, { headers: { accept: "text/html" } });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return await res.text();
}

function htmlPathFor(route) {
  if (route === "/") return join(OUT, "index.html");
  return join(OUT, route.replace(/^\//, ""), "index.html");
}

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function copyAssets() {
  // TanStack/Nitro Cloudflare preset writes static assets to
  // `.output/public`. Copy everything (JS chunks, CSS, images, fonts).
  const sources = [".output/public", "dist/public", "dist/client"];
  for (const src of sources) {
    if (await exists(src)) {
      console.log(`Copying assets from ${src} -> ${OUT}`);
      await cp(src, OUT, { recursive: true });
      return;
    }
  }
  console.warn("⚠ Could not find a built assets folder (.output/public, dist/public, dist/client). Run `bun run build` first.");
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await copyAssets();

  for (const route of PAGES) {
    try {
      const html = await fetchHtml(route);
      const dest = htmlPathFor(route);
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, html, "utf8");
      console.log(`✓ ${route} -> ${dest}`);
    } catch (err) {
      console.error(`✗ ${route} failed:`, err.message);
    }
  }

  console.log(`\nStatic site written to ./${OUT}`);
  console.log(`Upload the CONTENTS of ${OUT}/ to your host's public_html.`);
}

main();
