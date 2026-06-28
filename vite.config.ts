// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Prerender every page to plain HTML so the built output can be hosted
    // as a fully static website on any shared host (cPanel, Hostinger, etc.).
    prerender: {
      enabled: true,
      crawlLinks: true,
      // Seed the crawler with every page that exists in the app.
      routes: [
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
      ],
    },
  },
});
