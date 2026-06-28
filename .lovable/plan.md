## Goal
Convert the project from TanStack Start (SSR framework) to a plain static **Vite + React** site so you get a real `index.html` you can drop on any cheap shared host (cPanel, Hostinger, Namecheap, etc.).

The site already has no backend, all forms just open WhatsApp, so nothing functional is lost.

## What you'll get after this
- A normal `index.html` at the project root
- `bun run build` (or `npm run build`) outputs a `dist/` folder containing:
  - `index.html`
  - `assets/` (JS, CSS, images)
- You upload the **contents of `dist/`** to your host's `public_html`. Done.

## Steps

1. **Strip TanStack Start**
   - Remove packages: `@tanstack/react-start`, `@tanstack/start-*`, `nitropack`, the Start Vite plugin.
   - Delete: `src/router.tsx`, `src/start.ts`, `src/routes/__root.tsx`, `src/routeTree.gen.ts`, `src/routes/api/` (none used), any `*.server.ts` / `*.functions.ts`.
   - Delete the `.output/` and any SSR config.

2. **Add a clean Vite + React shell**
   - New `index.html` at project root with the SEO meta, fonts, and favicon currently in `__root.tsx`.
   - New `src/main.tsx` mounting `<App />`.
   - New `src/App.tsx` with `react-router-dom` (`HashRouter` for safest shared-host deploys — no `.htaccess` needed; or `BrowserRouter` if your host supports rewrites).
   - Move the existing `Navbar`, `Footer`, `WhatsAppButton`, `Loader` layout out of `__root.tsx` into `App.tsx`.

3. **Convert each route file**
   - For every `src/routes/*.tsx`, drop the `createFileRoute(...)` wrapper and export the component directly.
   - Replace `<Link to="..."/>` from `@tanstack/react-router` with `<Link to="..."/>` from `react-router-dom`.
   - Replace dynamic route param reads (`Route.useParams()`) with `useParams()` from `react-router-dom`.
   - Pages affected: `index`, `about`, `services`, `properties`, `portfolio`, `blog`, `blog.$slug`, `contact`.
   - SEO meta moves into a tiny `useEffect` that sets `document.title` / meta tags per page (or use `react-helmet-async`).

4. **Update `vite.config.ts`**
   - Remove TanStack Start plugin.
   - Keep `@vitejs/plugin-react` and the path alias (`@` → `src`).
   - Set `base: './'` so the built `index.html` works from any subfolder on shared hosting.

5. **Update `package.json` scripts**
   - `dev`: `vite`
   - `build`: `vite build`
   - `preview`: `vite preview`

6. **Verify**
   - Run `bun install && bun run build`.
   - Confirm `dist/index.html` exists and `dist/assets/*` is populated.
   - Run `bun run preview` and click through every page in the browser.

## Hosting after this
- Zip the **contents** of `dist/` (not the `dist` folder itself).
- Upload to `public_html` via cPanel File Manager or FTP.
- Visit your domain — `index.html` loads immediately.
- If you used `HashRouter`, URLs look like `yoursite.com/#/about` and refresh always works on any host.
- If you used `BrowserRouter`, add an `.htaccess` (I can include one) so refreshing `/about` doesn't 404.

## Technical notes
- Routing choice: `HashRouter` is the zero-config option for shared hosts. `BrowserRouter` is cleaner URLs but requires server rewrites.
- All current "server" surface is just `mailto:` / WhatsApp `wa.me` links, so removing SSR has zero functional impact.
- Lovable preview will still work because Vite + React is fully supported here.
- The contact form already builds a WhatsApp URL on submit, no API needed.
- Loader, animations, Tailwind v4, design tokens in `src/styles.css`, and all assets stay exactly as they are.

## What I need from you before I start
1. **Router style**: `HashRouter` (URLs like `/#/about`, works on ANY host with zero config) or `BrowserRouter` (clean `/about` URLs, needs `.htaccess`)? I recommend `HashRouter` for your case.
2. Confirm I should go ahead and delete all TanStack files.
