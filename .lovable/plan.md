# Full roadmap: batches 2–5

This is a big pass. I'll ship it in four commits so the preview stays working between steps, but I'll do them back-to-back in this session.

---

## Batch 2 — Credentials strip (About page)

- **CAC certificate block** on `/about`: framed card with "Registered Business" label, RC number, and a placeholder for the certificate image (you can drop the real scan into `src/assets/cac-certificate.jpg` later — I'll wire the import).
- **"Companies the founder has worked with"** logo strip:
  - Companies to feature (from your bio): Al Salis Petroleum, APDC (Abuja Property Development Company), PIBZ Estate, Taes Rabboni, Saint Beaver, S&M, Bara Solutions, plus Banana Island Estate and the parish role rendered as text/monograms.
  - I'll fetch clean logos via Firecrawl `scrape` with `formats: ['branding']` where the company has a public site; anything I can't source cleanly falls back to a lettered monogram tile (same visual weight, grayscale, hover to color).
  - No dates, no responsibilities — just logo + name, exactly as you asked.

## Batch 3 — Services split + Legal pages

- Convert `/services` accordion into an **index grid** linking to four dedicated routes:
  - `/services/design-construction`
  - `/services/consultancy-planning`
  - `/services/materials-supply`
  - `/services/real-estate`
- Each detail page: hero, full scope list, "Our process" (4 steps), FAQ, WhatsApp CTA, related services.
- Add `/privacy` and `/terms` as full routes (currently they don't exist as standalone pages). Link them from the footer.

## Batch 4 — Property & Portfolio detail pages

- **`/properties/:slug`** — per-property case study: gallery, price, location, specs table, map embed, BookATourForm (already built), similar properties.
- **`/portfolio/:slug`** — per-project case study: hero, brief, scope delivered, gallery, timeline, testimonial (if any), next/previous project.
- Adds `slug` to every entry in `src/data/company.ts` for both `properties` and `projectGallery`.
- Card CTAs on the index pages link to the new detail routes.

## Batch 5 — Lovable Cloud + Resend email lead capture

- **Enable Lovable Cloud** (backend for lead storage + sending).
- Table `leads` (name, email, phone, subject, message, source page, created_at) with RLS: insert-only for `anon`, read for `service_role`.
- **Resend** connector + edge function `send-lead-email` → sends every new lead to your inbox (`eruditionjp@gmail.com` unless you tell me otherwise) with a branded HTML template.
- Update `Contact` form and `BookATourForm` to POST to Cloud first, then still open WhatsApp as a fallback (belt + braces — nothing is lost if the user closes WhatsApp).

## Technical notes

- Router: React Router DOM already in place — new routes just get registered in `src/App.tsx`.
- Slugs: derived once from titles in `src/data/company.ts`; helper `bySlug()` for both properties and projects.
- Logos: stored under `src/assets/logos/` as JPG (or PNG when Firecrawl returns a transparent SVG/PNG). All `<img>` tags get `loading="lazy"` and explicit width/height to avoid CLS.
- Legal copy: I'll draft standard Nigerian-context Privacy & Terms — you can tweak wording after.
- Resend requires a verified sender domain. If `eruditionjp.com` isn't verified with Resend yet I'll use their onboarding sandbox sender and flag it so you can verify the domain when ready.

## Deliverables at the end

- New routes: `/services/*` (4), `/privacy`, `/terms`, `/properties/:slug`, `/portfolio/:slug`.
- About page with CAC block + logo strip.
- Cloud + Resend wired; leads visible in Cloud table and emailed on submit.
- Footer updated with legal links.
- Republish at the end.
