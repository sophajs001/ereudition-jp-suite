// Static image imports — Vite copies these into the build output,
// so they work on any static host (no CDN / no JSON pointers needed).
import logoTransparent from "@/EruditionJP/assets/logo/logo.png";

// Team
import judeImg from "@/EruditionJP/assets/team/jude.jpg";
import priscaImg from "@/EruditionJP/assets/team/prisca.jpg";
import ruthImg from "@/EruditionJP/assets/team/ruth.jpg";
import gloriaImg from "@/EruditionJP/assets/team/gloria.jpg";
import benedictImg from "@/EruditionJP/assets/team/benedict.jpg";
import agnesImg from "@/EruditionJP/assets/team/agnes.jpg";
import marcusImg from "@/EruditionJP/assets/team/marcus.jpg";

// Project site photography
import rooftopSlab from "@/EruditionJP/assets/projects/rooftop-slab.jpg";
import estateInspection from "@/EruditionJP/assets/projects/estate-inspection.jpg";
import rebarColumn from "@/EruditionJP/assets/projects/rebar-column.jpg";
import slabReinforcement from "@/EruditionJP/assets/projects/slab-reinforcement.jpg";
import drainageWork from "@/EruditionJP/assets/projects/drainage-work.jpg";
import siteVisit from "@/EruditionJP/assets/projects/site-visit.jpg";
import surveyedLand from "@/EruditionJP/assets/projects/surveyed-land.jpg";
import twoStoreyShell from "@/EruditionJP/assets/projects/two-storey-shell.jpg";
import decking from "@/EruditionJP/assets/projects/decking.jpg";
import electricalConduits from "@/EruditionJP/assets/projects/electrical-conduits.jpg";
import foundationImg from "@/EruditionJP/assets/projects/foundation.jpg";
import brickShell from "@/EruditionJP/assets/projects/brick-shell.jpg";
import brickHouse from "@/EruditionJP/assets/projects/brick-house.jpg";
import foundationCast from "@/EruditionJP/assets/projects/foundation-cast.jpg";
import decking2 from "@/EruditionJP/assets/projects/decking2.jpg";

export const company = {
  name: "Erudition JP Enterprise",
  short: "Erudition JP",
  tagline: "We build your dreams",
  address: "Ushafa Bwari, Abuja FCT",
  phones: ["08062655289", "08117004293", "07037910243"],
  whatsapp: "2348062655289",
  email: "eruditionjpenterprise@gmail.com",
  hours: "Mon to Sat: 8:00 AM to 6:00 PM. Sunday: Closed",
  logo: logoTransparent,
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61589488031875",
    instagram: "https://www.instagram.com/erudition_jp",
    tiktok: "https://vm.tiktok.com/ZS969mVfnTuJE-sOadg/",
  },
};

export const waLink = (msg: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;

export const siteImages = {
  rooftopSlab,
  estateInspection,
  rebarColumn,
  slabReinforcement,
  drainageWork,
  siteVisit,
  surveyedLand,
  twoStoreyShell,
  decking,
  electricalConduits,
};

export const projectGallery = [
  { title: "Site Foundation Supervision", cat: "Residential", loc: "Bwari", img: foundationImg, desc: "Our CEO on site overseeing trench excavation and foundation setting out for a new build." },
  { title: "Cast Strip Foundations", cat: "Residential", loc: "Ushafa", img: foundationCast, desc: "Freshly cast reinforced strip foundations cured and ready for block work." },
  { title: "Brick Shell Construction", cat: "Residential", loc: "Bwari", img: brickHouse, desc: "Full brick shell and lintel level completion for a 3-bedroom residential home." },
  { title: "Burnt Brick Wall Stack", cat: "Materials", loc: "Abuja FCT", img: brickShell, desc: "Premium burnt-brick wall construction ready for ring beam and roofing stage." },
  { title: "Rooftop Decking & Slab Works", cat: "Residential", loc: "Lokogoma", img: decking2, desc: "Formwork, props and reinforcement set for upper-floor slab pour on a duplex." },
  { title: "Two-Storey Residential Shell", cat: "Residential", loc: "Bwari", img: twoStoreyShell, desc: "Block work and structural shell completion for a 2-storey home." },
  { title: "Slab Reinforcement & BRC Mesh", cat: "Residential", loc: "Bwari", img: slabReinforcement, desc: "Decking reinforcement ready for concrete pour over hillside site." },
  { title: "Electrical Conduit & Slab Prep", cat: "Residential", loc: "Lokogoma", img: electricalConduits, desc: "Slab-level electrical conduit routing before concrete placement." },
  { title: "Estate Project Supervision", cat: "Commercial", loc: "Abuja FCT", img: estateInspection, desc: "Site supervision on a multi-block residential estate development." },
  { title: "Drainage & Culvert Construction", cat: "Estate", loc: "Abuja FCT", img: drainageWork, desc: "Reinforced drainage culvert under construction with site team." },
  { title: "Foundation Inspection", cat: "Estate", loc: "Abuja FCT", img: siteVisit, desc: "Pre-pour inspection of reinforced ground beams and pipe network." },
  { title: "Column & Beam Construction", cat: "Residential", loc: "Bwari", img: rebarColumn, desc: "Stair-well column and beam formwork during structural frame stage." },
  { title: "Surveyed Land Plot", cat: "Land", loc: "Bwari Outskirts", img: surveyedLand, desc: "Pegged and fenced plot with verified survey, ready for development." },
];

export const team = [
  {
    name: "Onyeke, Judemary Onogwu (GNIOB)",
    role: "Chief Executive Officer / Founder",
    img: judeImg,
    bio: "Professional Building graduate from the University of Jos and Graduate Member of the Nigerian Institute of Building (GNIOB). Hands-on masonry experience since 1992, combining decades of practical site knowledge with formal academic training in building.",
    expertise: ["Building & Construction", "Project Management", "Strategic Leadership"],
    featured: true,
  },
  {
    name: "Mrs. Aliyu, Prisca Haliru",
    role: "Chief Operating Officer / General Manager",
    img: priscaImg,
    bio: "Pure Mathematics graduate from Plateau State University, Bokkos. Co-founder of Erudition JP. Leads daily operations, client relations and team coordination.",
    expertise: ["Operations", "Client Relations", "Logistics"],
  },
  {
    name: "Miss. Ruth Satbyen Joel",
    role: "Project Manager / Secretary",
    img: ruthImg,
    bio: "Coordinates project schedules, documentation and client communication across all live sites.",
    expertise: ["Project Coordination", "Documentation", "Scheduling"],
  },
  {
    name: "Mrs. Gloria Onyeke Oche",
    role: "Business Development / Sales Manager",
    img: gloriaImg,
    bio: "Leads growth, partnerships and property sales across the FCT.",
    expertise: ["Business Development", "Sales", "Partnerships"],
  },
  {
    name: "Mr. Benedict Vizen Emmanuel",
    role: "Procurement / Logistics Officer",
    img: benedictImg,
    bio: "Manages sourcing, supplier relationships and on-time site delivery of materials.",
    expertise: ["Procurement", "Supply Chain", "Logistics"],
  },
  {
    name: "Miss. Onyeke Agnes Ene",
    role: "Accountant / Finance Officer",
    img: agnesImg,
    bio: "Oversees financial planning, project budgeting and reporting.",
    expertise: ["Accounting", "Budgeting", "Financial Reporting"],
  },
  {
    name: "Mr. Marcus, Emmanuel Bawah",
    role: "Admin / HR Officer",
    img: marcusImg,
    bio: "Handles administration, human resources and internal coordination.",
    expertise: ["Administration", "HR", "Operations Support"],
  },
];

export const services = [
  {
    id: "design-construction",
    title: "Design & Construction",
    color: "brand",
    tag: "Blueprint to Reality",
    summary: "Architectural design, full-scope construction, and contractor services delivered with daily site supervision.",
    items: [
      "Architectural drawings, 3D renders & site plans",
      "Foundation to handover construction",
      "Renovation, remodelling & structural repairs",
      "Site supervision and contractor services",
    ],
  },
  {
    id: "consultancy-planning",
    title: "Consultancy & Planning",
    color: "amber",
    tag: "Smart Decisions, Expert Advice",
    summary: "Independent building consultancy and detailed Bills of Quantities that protect your budget.",
    items: [
      "Feasibility assessment & plan critique",
      "Bill of Quantities (BoQ)",
      "AMAC permit guidance",
      "Contractor vetting & independent monitoring",
    ],
  },
  {
    id: "materials-supply",
    title: "Materials & Supply",
    color: "green",
    tag: "Quality, Delivered",
    summary: "Verified building materials supplied to site, with bulk-order logistics across Abuja.",
    items: [
      "Cement, blocks, iron rods & BRC mesh",
      "Roofing sheets, tiles, POP & finishes",
      "Plumbing & electrical fittings",
      "Bulk orders & site delivery",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Property",
    color: "purple",
    tag: "Verified Land & Homes",
    summary: "Land and property sales backed by title searches, survey and government consent.",
    items: [
      "Verified land & property listings",
      "Title search & survey confirmation",
      "Deed of Assignment & Governor's Consent",
      "Estate development consultancy",
    ],
  },
];

export const testimonials = [
  { author: "Mr. Ibrahim K.", role: "Residential Client, Abuja", quote: "Transformed our vague ideas into a beautiful, functional home." },
  { author: "Mrs. Ngozi A.", role: "Property Developer", quote: "The only contractor I trust with my developments. Used them 3 times." },
  { author: "Engr. Sam O.", role: "Commercial Client", quote: "Quality materials, logistics team delivered on time even to remote site." },
  { author: "Dr. Amaka T.", role: "Building Owner, Bwari", quote: "Their BoQ saved me from a massively overbilling contractor." },
  { author: "Barrister Chidi O.", role: "Land Buyer, Ushafa", quote: "Land purchase was so smooth. No surprises. Highly recommended." },
  { author: "Mr. & Mrs. Yusuf", role: "First-Time Home Builders", quote: "House looks exactly like the 3D render. Incredible work!" },
  { author: "Chief Mrs. Okafor", role: "Guest House Developer", quote: "Completed in 8 months as promised. Courteous and knowledgeable." },
  { author: "Mr. Aliyu M.", role: "Commercial Property Owner", quote: "Transparency in pricing sets them apart from all others." },
];

export const properties = [
  { id: 1, title: "3-Bedroom Fully Detached Bungalow", location: "Ushafa Bwari", price: "₦18,500,000", type: "Residential", beds: 3, baths: 2, size: "450 sqm", tags: ["All-rooms ensuite", "Fenced"], desc: "Newly built 3-bedroom bungalow in a quiet, developing neighbourhood." },
  { id: 2, title: "Serviced Residential Plot of Land", location: "Karsana West", price: "₦6,200,000", type: "Land", size: "600 sqm", tags: ["C of O ready", "Serviced"], desc: "Estate-serviced land with verified title and access roads." },
  { id: 3, title: "2-Bedroom Mini Flat", location: "Kubwa", price: "₦9,800,000", type: "Residential", beds: 2, baths: 2, size: "120 sqm", tags: ["Tiled", "POP ceiling"], desc: "Compact, modern mini flat in a fast-growing residential corridor." },
  { id: 4, title: "Commercial Shop Space", location: "Gwagwalada", price: "₦4,500,000", type: "Commercial", baths: 1, size: "60 sqm", tags: ["Road-facing", "High footfall"], desc: "Prime commercial shop with steady daily customer traffic." },
  { id: 5, title: "4-Bedroom Duplex", location: "Lokogoma Estate", price: "₦42,000,000", type: "Residential", beds: 4, baths: 4, size: "680 sqm", tags: ["BQ", "Premium finish"], desc: "Premium 4-bedroom duplex in an established estate, with BQ and ample parking." },
  { id: 6, title: "Bare Land, Investor's Special", location: "Bwari Town", price: "₦2,800,000", type: "Land", size: "500 sqm", tags: ["Survey plan", "Appreciating"], desc: "Excellent land-banking opportunity in a rapidly appreciating area." },
];

export const faqs = [
  { q: "How long does a residential project take?", a: "A 3-bedroom bungalow typically takes 6 to 9 months; a 2-storey building 10 to 14 months, depending on scope and weather." },
  { q: "How do I get started?", a: "WhatsApp, call or email us for a free, no-obligation consultation. We'll listen to your vision and outline next steps." },
  { q: "Do you handle building permits?", a: "Yes, we handle AMAC and other relevant authority submissions on your behalf." },
  { q: "Do you supply materials outside Abuja?", a: "FCT is our primary coverage, but bulk orders can be arranged elsewhere on request." },
  { q: "How do you ensure material quality?", a: "We work with verified suppliers and inspect every batch before delivery to your site." },
  { q: "What do I need for a BoQ?", a: "Your building drawings. If you don't have any yet, we can prepare the designs for you first." },
  { q: "Is the land you sell verified?", a: "Yes, every property goes through AGIS search, survey plan and government consent confirmation." },
  { q: "Do you offer payment plans?", a: "Yes, milestone-based payments tied to foundation, roofing and finishing stages." },
  { q: "Can I monitor progress remotely?", a: "Yes, we send regular photo and video updates via WhatsApp or email." },
];

export const blogPosts = [
  { slug: "choosing-building-materials", title: "5 Essential Tips for Choosing the Right Building Materials", category: "Material Guides", author: "OJ Mary", readTime: "5 min", image: brickShell, excerpt: "Material quality is the single biggest factor in how long your building lasts. Here are five tips to get it right.", body: ["Cement, iron rods, blocks and roofing sheets vary widely in quality across the Abuja market.", "Always insist on factory-sealed bags from recognised brands such as Dangote, BUA or Elephant.", "Iron rods should be tested for ductility; brittle rods crack under load.", "Inspect block strength on site before paying; soft blocks fail under plaster.", "Buy from suppliers who can give you a delivery note and verifiable batch number."] },
  { slug: "land-ownership-abuja", title: "Understanding Land Ownership and Titles in Abuja", category: "Property Investment", author: "Prisca J.", readTime: "7 min", image: surveyedLand, excerpt: "C of O, R of O, Governor's Consent. What they actually mean for your investment.", body: ["FCT land is governed by the Land Use Act and administered by AGIS.", "A Certificate of Occupancy (C of O) is the strongest title document available to a private holder.", "Always insist on a full title search before paying for any land, no matter how attractive the price.", "Survey plans must be verified at the Surveyor General's office before money changes hands.", "Governor's Consent is required for any subsequent transfer of an FCT title from one party to another."] },
  { slug: "sustainable-construction-nigeria", title: "The Future of Sustainable Construction in Nigeria", category: "Construction Tips", author: "OJ Mary", readTime: "6 min", image: brickHouse, excerpt: "How modern building methods are making Nigerian homes safer, cheaper and longer-lasting.", body: ["Sustainable construction is no longer a luxury. With diesel and cement costs rising, it is now a budget tool.", "Compressed earth blocks and locally sourced timber can cut material costs without losing quality.", "Cross ventilation and proper orientation reduce cooling bills dramatically across the FCT climate.", "Rainwater harvesting and solar pre-wiring at the foundation stage add long-term resale value."] },
  { slug: "what-is-bill-of-quantities", title: "What is a Bill of Quantities and Why You Need One", category: "Consultancy", author: "OJ Mary", readTime: "5 min", image: siteVisit, excerpt: "A BoQ is the single most powerful financial tool a homeowner can have on a build.", body: ["A Bill of Quantities lists every material, every labour task and every overhead on your project.", "It gives you a baseline to compare contractor quotes objectively, line by line.", "It prevents overbilling and gives you a fair basis for handling variations during construction.", "It is the foundation of milestone payments, helping you release money only when work is delivered."] },
  { slug: "choosing-contractor-abuja", title: "How to Choose the Right Contractor in Abuja", category: "Construction Tips", author: "Engr. Chukwuemeka O.", readTime: "6 min", image: foundationImg, excerpt: "Five hard questions to ask before signing any construction contract.", body: ["Ask to see three completed projects and visit at least one of them in person before signing anything.", "Insist on a written contract with milestone payments tied to deliverables, not to dates.", "Verify the contractor's professional registration with NIOB or COREN and call the references.", "Never pay 100% upfront. Staged payments protect both you and a serious contractor."] },
  { slug: "real-estate-investment-abuja", title: "Real Estate Investment in Abuja: Beginner's Guide", category: "Property Investment", author: "Prisca J.", readTime: "8 min", image: twoStoreyShell, excerpt: "Where to start, what to avoid and how to grow your portfolio in the FCT.", body: ["Abuja's land market remains one of the most resilient in Nigeria, even through economic downturns.", "Land banking in growth corridors such as Bwari, Karsana and Lokogoma consistently outperforms savings accounts.", "Always buy verified. Fraud is the single biggest risk in the FCT market and the only real protection is documentation.", "Start small, document everything, and reinvest your gains into title-secure properties before scaling up."] },
];
