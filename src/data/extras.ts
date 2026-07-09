import { properties, projectGallery } from "./company";

/** Slugify a title deterministically. */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const propertyBySlug = (slug: string) =>
  properties.find((p) => slugify(p.title) === slug) || null;

export const projectBySlug = (slug: string) =>
  projectGallery.find((p) => slugify(p.title) === slug) || null;

/** Companies the CEO has worked with — chronology & responsibilities intentionally omitted. */
export const pastEmployers: Array<{
  name: string;
  short: string;
  location?: string;
  url?: string;
}> = [
  { name: "Al Salis Petroleum", short: "AS", location: "Abuja" },
  { name: "Abuja Property Development Company (APDC)", short: "APDC", location: "Abuja" },
  { name: "PIBZ Estate", short: "PZ", location: "Abuja" },
  { name: "Taes Rabboni Engineering", short: "TR", location: "Abuja" },
  { name: "Saint Beaver Construction", short: "SB", location: "Abuja" },
  { name: "S&M Construction", short: "SM", location: "Abuja" },
  { name: "Bara Solutions", short: "BS", location: "Lagos" },
  { name: "Banana Island Estate", short: "BI", location: "Ikoyi, Lagos" },
];

export const services4 = [
  {
    slug: "design-construction",
    title: "Design & Construction",
    color: "#0056b3",
    tag: "Blueprint to Reality",
    hero: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80",
    summary:
      "Architectural design, full-scope construction, and contractor services delivered with daily site supervision.",
    scope: [
      "Architectural drawings, 3D renders and site plans",
      "Structural design and engineering coordination",
      "Foundation to handover construction",
      "Renovation, remodelling and structural repairs",
      "Daily on-site supervision by our CEO or a delegated GNIOB professional",
      "Contractor services for developers and estate builders",
    ],
    faqs: [
      { q: "Do you handle small renovations?", a: "Yes, from single-room remodels to full-house refurbishments." },
      { q: "Can we start with just the design?", a: "Absolutely. Design and construction are separately quoted so you can choose either or both." },
      { q: "Who supervises the site day-to-day?", a: "Our CEO, a GNIOB professional Builder, or a delegated senior site engineer — never a subcontractor's foreman acting alone." },
    ],
  },
  {
    slug: "consultancy-planning",
    title: "Consultancy & Planning",
    color: "#D97706",
    tag: "Smart Decisions, Expert Advice",
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80",
    summary:
      "Independent building consultancy and detailed Bills of Quantities that protect your budget.",
    scope: [
      "Feasibility assessment and site suitability studies",
      "Bill of Quantities (BoQ) preparation",
      "AMAC and FCDA permit guidance",
      "Independent contractor vetting and monitoring",
      "Plan critique and value-engineering reviews",
      "Milestone certification for lenders and off-plan buyers",
    ],
    faqs: [
      { q: "How much does a BoQ cost?", a: "Typically under 1% of the project value — routinely saves 10–20% on the total build." },
      { q: "Do you consult if we already have a contractor?", a: "Yes. Independent monitoring is one of our most requested services." },
      { q: "Can you handle AMAC permits end-to-end?", a: "Yes, from drawings and structural stability report through submission and follow-up." },
    ],
  },
  {
    slug: "materials-supply",
    title: "Materials & Supply",
    color: "#16A34A",
    tag: "Quality, Delivered",
    hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80",
    summary:
      "Verified building materials supplied to site, with bulk-order logistics across Abuja.",
    scope: [
      "Cement (Dangote, BUA, Elephant, Lafarge) — factory-sealed only",
      "High-yield deformed iron rods and BRC mesh with mill certificates",
      "Hollow sandcrete blocks and burnt bricks — properly cured",
      "Roofing sheets (aluzinc, long-span aluminium, stone-coated)",
      "POP, tiles, sanitary wares and finishing materials",
      "Plumbing and electrical fittings — bulk-order and site delivery",
    ],
    faqs: [
      { q: "Do you deliver outside the FCT?", a: "The FCT is our primary coverage, but bulk orders can be arranged elsewhere on request." },
      { q: "Can I return material that fails inspection?", a: "Yes. Every delivery comes with a printed delivery note and a written return policy." },
      { q: "Do you offer trade discounts?", a: "Yes, tiered pricing for developers, estate managers and repeat clients." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    color: "#9333EA",
    tag: "Verified Land & Homes",
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=80",
    summary:
      "Land and property sales backed by title searches, survey and government consent.",
    scope: [
      "Verified land and property listings across the FCT",
      "AGIS title searches and R of O / C of O confirmation",
      "Surveyor General verification of survey plans",
      "Deed of Assignment and Governor's Consent processing",
      "Estate development consultancy for landowners and investors",
      "Property tour scheduling and inspection support",
    ],
    faqs: [
      { q: "Is every property title-searched?", a: "Yes — no listing goes public without AGIS and Surveyor General confirmation." },
      { q: "Do you help with Governor's Consent?", a: "Yes. We handle it end-to-end as part of every sale." },
      { q: "Can I list my own property with you?", a: "Yes. Reach out on WhatsApp and we'll walk you through the verification process." },
    ],
  },
];
