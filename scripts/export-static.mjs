/**
 * Static export script.
 *
 * Crawls your already-published Lovable site and writes every page to
 * `static-site/` as plain HTML files (plus all assets it references).
 *
 * Upload the contents of `static-site/` to any shared host
 * (cPanel, Hostinger, Namecheap public_html, etc.).
 *
 * Usage:
 *   1. Make sure your site is published in Lovable (click Publish → Update).
 *   2. bun scripts/export-static.mjs
 *      (or: BASE=https://your-custom-domain.com bun scripts/export-static.mjs)
 *   3. Upload the CONTENTS of static-site/ to your host's public_html.
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = (process.env.BASE || "https://ereudition-jp-suite.lovable.app").replace(/\/$/, "");
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

const seenAssets = new Set();
const ASSET_RE = /(?:href|src)="([^"]+)"/g;
// Match any `/__l5e/assets-v1/<uuid>/<filename.ext>` reference (CDN asset URLs
// referenced from inside the compiled JS bundles for team/project photos).
const CDN_ASSET_RE = /\/__l5e\/assets-v1\/[a-f0-9-]+\/[A-Za-z0-9._-]+\.[A-Za-z0-9]{2,5}/g;

function htmlPathFor(route) {
  if (route === "/") return join(OUT, "index.html");
  return join(OUT, route.replace(/^\//, ""), "index.html");
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { accept: "text/html,*/*" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return await res.text();
}

async function fetchBinary(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function saveAsset(assetPath) {
  if (seenAssets.has(assetPath)) return;
  seenAssets.add(assetPath);
  const dest = join(OUT, assetPath.replace(/^\//, ""));
  try {
    const buf = await fetchBinary(`${BASE}${assetPath}`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`  asset ✓ ${assetPath}`);
  } catch (err) {
    console.warn(`  asset ✗ ${assetPath}: ${err.message}`);
  }
}

function rewriteHtml(html) {
  // Strip absolute base URL so links stay relative when hosted elsewhere.
  return html.replaceAll(BASE, "");
}

async function processPage(route) {
  const html = await fetchText(`${BASE}${route}`);
  const dest = htmlPathFor(route);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, rewriteHtml(html), "utf8");
  console.log(`✓ ${route} -> ${dest}`);

  // Find and download every referenced asset (JS, CSS, images, fonts).
  const assets = new Set();
  let m;
  while ((m = ASSET_RE.exec(html)) !== null) {
    const url = m[1];
    if (!url) continue;
    if (url.startsWith("/") && !url.startsWith("//")) assets.add(url);
    else if (url.startsWith(BASE)) assets.add(url.slice(BASE.length));
  }
  for (const a of assets) {
    // Skip page routes themselves; only grab files with an extension.
    if (/\.[a-z0-9]{2,5}(\?|$)/i.test(a)) await saveAsset(a.split("?")[0]);
  }
}

async function main() {
  console.log(`Exporting ${BASE} -> ./${OUT}\n`);
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  for (const route of PAGES) {
    try { await processPage(route); }
    catch (err) { console.error(`✗ ${route} failed:`, err.message); }
  }

  console.log(`\n✅ Done. Upload the CONTENTS of ${OUT}/ to your host's public_html.`);
}

main();
