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
  {
    slug: "choosing-building-materials",
    title: "5 Essential Tips for Choosing the Right Building Materials",
    category: "Material Guides",
    author: "OJ Mary",
    readTime: "6 min",
    image: brickShell,
    excerpt: "Material quality is the single biggest factor in how long your building lasts. Here are five tips to get it right in the Abuja market.",
    body: [
      "Every year in Abuja, thousands of families pour their life savings into a new build only to watch the walls crack within eighteen months, the roof leak in the first heavy rain, or the plaster fall away in sheets by the second harmattan. In almost every case, the root cause is not bad workmanship. It is bad materials. Cement, iron rods, blocks and roofing sheets vary wildly in quality across the FCT market, and the difference between a bag that will still be holding your walls up in forty years and one that will fail in five is often just a few thousand naira. This guide walks you through the five checks that matter most.",
      "## 1. Cement: brand, seal, and freshness",
      "Cement is the backbone of your structure, and it is also the material most commonly tampered with in the open market. Always buy factory-sealed bags from recognised brands such as Dangote, BUA, Elephant or Lafarge, and always inspect the bag before it leaves the depot. A good bag is dry, firm, and free of lumps. If you squeeze the middle of the bag and it feels soft or powdery in patches, the cement has already absorbed moisture and lost strength. Check the manufacturing date printed on the seam. Cement older than three months from production date has begun to lose its grade, and cement older than six months should not be used for any structural work, no matter how cheap it is.",
      "Store cement bags off the ground on wooden pallets, cover them with tarpaulin, and never stack more than ten bags high. On any serious site, we insist that cement is used within four weeks of delivery.",
      "## 2. Iron rods: ductility over appearance",
      "The iron rod market in Abuja is flooded with rerolled and substandard bars that look identical to genuine deformed bars on the outside. The test that matters is ductility. A good rod bends without cracking. A bad rod snaps. Ask your supplier for a small offcut of the batch you are buying and try bending it in a vice through 90 degrees. If it cracks or breaks, walk away.",
      "For columns and beams, insist on high-yield deformed bars from mills such as African Foundries, Kam Wire or Standard Metallurgical. Ask for the mill certificate. It costs nothing to request, and reputable suppliers will provide it without complaint.",
      "## 3. Blocks: strength before smoothness",
      "A block that looks beautiful and finishes smoothly can still fail structurally. What matters is the cement-to-sand ratio and the curing time. A properly moulded nine-inch block should weigh around 22 to 25 kilograms and should not break when dropped from waist height onto firm ground. Ask to see the moulding yard, watch a batch being cured, and reject any block that has been sold within seven days of moulding.",
      "Never mix blocks from different suppliers on the same wall. The shrinkage rate varies from yard to yard, and hairline cracks always appear along the joint between the two.",
      "## 4. Roofing sheets: gauge, coating, and warranty",
      "Roofing sheet gauge is measured in millimetres of thickness. For residential work in the FCT, do not go below 0.45mm. Anything thinner will drum in the rain, dent in the sun, and rust within a decade. For long span aluminium, insist on a minimum coating weight of 55 grams per square metre for aluzinc and 275 grams for galvanised. Ask for the manufacturer's warranty in writing.",
      "## 5. Buy from suppliers who stand behind their delivery notes",
      "The single strongest signal of a serious supplier is a printed delivery note with a batch number, a signed receipt, and a phone number that still works when you call it three weeks later. Bulk buyers should insist on a written return policy for materials that fail on inspection. If a supplier resists any of this, they are telling you they do not expect to be around when your problems appear.",
      "## The bottom line",
      "Building materials are not the place to save money. A three percent saving on cement can cost you thirty percent of your building in ten years. Buy from verified sources, inspect every batch, keep your delivery notes, and when in doubt, ask an independent professional to sample the material before you commit. At Erudition JP, we source and supply verified materials across the FCT, and we would rather lose a sale than deliver a bag that will fail on your site.",
    ],
  },
  {
    slug: "land-ownership-abuja",
    title: "Understanding Land Ownership and Titles in Abuja",
    category: "Property Investment",
    author: "Prisca J.",
    readTime: "8 min",
    image: surveyedLand,
    excerpt: "C of O, R of O, Governor's Consent, Deed of Assignment. What each document actually means for your investment, and which ones you cannot afford to skip.",
    body: [
      "Buying land in the Federal Capital Territory is one of the most powerful wealth-building moves a Nigerian family can make. It is also one of the easiest places in the country to lose everything you have saved. The difference between the two outcomes almost always comes down to paperwork. This guide walks you through every title document you are likely to encounter in the FCT market, what it protects, what it does not, and the order in which you should collect them.",
      "## The legal foundation: the Land Use Act",
      "All land in the FCT is technically owned by the Federal Government and held in trust for Nigerians by the Minister of the Federal Capital Territory. This is set out in the Land Use Act of 1978. What you buy when you buy land in Abuja is not the land itself but a right to occupy and use it, typically for ninety-nine years. Every legitimate title in the FCT flows from this basic legal fact, and every document you collect is essentially a chain of evidence proving your right of occupancy is genuine and recognised by the authorities.",
      "## Certificate of Occupancy (C of O)",
      "A Certificate of Occupancy is the strongest title document a private holder can possess in the FCT. It is issued directly by the office of the Minister and confirms that you hold a statutory right of occupancy over a specific plot for the stated term. A genuine C of O carries a file number, is signed by the Minister or an authorised delegate, and can be verified at AGIS, the Abuja Geographic Information System office in Mabushi.",
      "If a seller presents a C of O, do not treat it as proof of ownership until you have personally, or through a lawyer, conducted a search at AGIS and confirmed that the document is in the register, that the plot boundaries match the survey, and that there is no encumbrance such as a mortgage or a court order attached to it.",
      "## Right of Occupancy (R of O) and Statutory R of O",
      "A Right of Occupancy is the step before a C of O is issued. It confirms that the government has granted you the right to occupy a specific plot but has not yet issued the formal certificate. R of Os are common in newer districts where the C of O process is still working through the AGIS backlog. They are legitimate, but they are weaker than a full C of O and typically cost less because of that. Plan and budget for the C of O conversion as part of your purchase.",
      "## Deed of Assignment",
      "A Deed of Assignment is the legal instrument that transfers a right of occupancy from one holder to another. When you buy land that already has a C of O, the seller signs a Deed of Assignment in your favour, and both parties execute the document before a lawyer or notary. The deed is then submitted to AGIS along with the C of O for the transfer to be recorded and for Governor's Consent to be granted.",
      "A Deed of Assignment on its own does not give you a new title. It is a step in the chain, not the destination.",
      "## Governor's Consent",
      "Under the Land Use Act, any transfer of a statutory right of occupancy requires the consent of the Governor of the state, or in the FCT, the Minister. Without Governor's Consent, your Deed of Assignment is technically incomplete and cannot be perfected. This is the step most private buyers skip because it takes time and costs money, and it is the single most common reason FCT land disputes end badly for the buyer years down the line.",
      "Always insist on completing Governor's Consent. Budget for it as part of the purchase, and never accept a seller's assurance that it is unnecessary.",
      "## Survey Plan",
      "A survey plan defines the exact geographic boundaries of your plot with reference to national coordinates. A genuine survey plan is prepared by a licensed surveyor, signed and sealed, and lodged with the office of the Surveyor General of the Federation. Before paying for any land in the FCT, take the survey plan to the Surveyor General's office in Wuse and confirm it is genuine, that the coordinates match the land on the ground, and that no other survey overlaps it.",
      "## Contract of Sale and Receipts",
      "The Contract of Sale is a simple agreement between buyer and seller that sets out the price, the deposit, the payment schedule, and the delivery date for the title documents. Every naira you pay should be receipted, and every receipt should carry the plot number, the date, and the signature of the seller. Do not rely on WhatsApp screenshots or bank alerts as evidence of payment.",
      "## The order that protects you",
      "In the FCT, the safe order is always the same. First, get a copy of every title document the seller claims to hold. Second, conduct an independent search at AGIS and at the Surveyor General's office. Third, sign a Contract of Sale and pay only a small deposit. Fourth, execute the Deed of Assignment. Fifth, submit for Governor's Consent. Only when consent is granted and the title is registered in your name should the final tranche of the purchase price be paid.",
      "## The bottom line",
      "Land fraud in Abuja is not sophisticated. It is almost always the same trick, dressed up in different clothes: a seller pressures you to pay quickly, promises the paperwork will follow, and disappears the moment the money clears. The protection is boring, patient documentation. Every property Erudition JP sells goes through AGIS search, survey verification and Governor's Consent as a matter of policy. If you are buying elsewhere, we strongly recommend engaging an independent lawyer before signing anything.",
    ],
  },
  {
    slug: "sustainable-construction-nigeria",
    title: "The Future of Sustainable Construction in Nigeria",
    category: "Construction Tips",
    author: "OJ Mary",
    readTime: "7 min",
    image: brickHouse,
    excerpt: "How modern building methods are making Nigerian homes safer, cheaper to run, and longer lasting, even as material prices climb.",
    body: [
      "Sustainable construction used to sound like a luxury for developers in Europe. In Nigeria today, it is a budget tool. With cement prices climbing year on year, diesel eating into every generator household, and the FCT climate becoming visibly harsher each dry season, the case for building smarter is no longer theoretical. It is the difference between a home that costs you three million naira a year to run and one that costs you a fraction of that. Here is what sustainable construction actually means in the Nigerian context, and where the savings really come from.",
      "## Local materials, engineered properly",
      "The single biggest cost lever in a Nigerian build is imported material. Aluminium roofing, imported tiles, foreign fittings and finishing all carry a foreign exchange premium that grows every year. Compressed earth blocks, locally moulded burnt bricks, and locally milled hardwood cost a fraction of the imported alternatives and, when engineered properly, perform as well or better. A stabilised earth block wall has a thermal mass that keeps interiors dramatically cooler than a plastered sandcrete wall, which means smaller air conditioner units and lower electricity bills for the life of the home.",
      "## Orientation and cross ventilation",
      "The cheapest cooling in an FCT home is the cooling you never pay for. A house oriented with its long axis running east to west, with the largest windows on the north and south walls, catches the prevailing harmattan and monsoon breezes and rejects the worst of the afternoon sun. Add openable clerestory windows near the ceiling and the hot air escapes on its own, drawing cooler air in from the shaded side. Done well, cross ventilation can drop indoor temperatures by four to six degrees at no running cost.",
      "## Roof design and insulation",
      "The roof is where the FCT sun does the most damage. A well-insulated roof, with a reflective aluzinc top surface and a fifty millimetre insulation blanket below the purlins, cuts heat gain into the ceiling by more than half. Combine that with a ventilated roof space and a gable vent, and the ceiling stops radiating heat into the bedrooms at night. It is a two hundred thousand naira investment on a typical bungalow that saves a household over a hundred thousand naira in electricity every year.",
      "## Rainwater harvesting",
      "The FCT rainy season delivers enough water in four months to supply an average household for the entire year. A properly sized rainwater harvesting system, with first flush diverters and a food grade storage tank, costs less than a borehole and pays for itself in three to four years through avoided water tanker deliveries. Even a modest system supplementing borehole water reduces pumping hours and extends the life of your submersible pump.",
      "## Solar pre-wiring at the foundation stage",
      "Retrofitting solar into an existing home is expensive because cables have to be chased into finished walls and inverters have to fight for space with existing fittings. Pre-wiring for solar at the foundation stage, with dedicated conduits, a battery bay in the utility room, and roof mounting brackets built into the trusses, costs almost nothing extra and makes future solar installation dramatically cheaper. Even if you do not install panels immediately, the pre-wiring adds real value to the home at resale.",
      "## Waste reduction on site",
      "Sustainable construction is not only about the finished building. It is also about how much material ends up in a rubbish pile behind the fence. Careful cutting schedules for iron rods and timber, ordering blocks in the right quantities, and stockpiling excavated soil for later landscaping can cut a project's material waste by twenty percent. On a typical bungalow, that is over a million naira saved.",
      "## The regulatory tailwind",
      "The Nigerian Building Code and the FCT development guidelines are quietly moving in the direction of sustainability. Newer estates in the FCT increasingly require rainwater harvesting, solar-ready wiring, and minimum insulation values. Building sustainably today is not just a cost saving. It is future-proofing your home against the regulations that are almost certainly coming next.",
      "## The bottom line",
      "Sustainable construction in Nigeria is not about ideology. It is about arithmetic. Cheaper local materials, lower running costs, and higher resale values add up to a home that costs less to build, less to live in, and more to sell. At Erudition JP, we build sustainability into every design brief from day one, and we would be glad to walk you through the specific options for your site.",
    ],
  },
  {
    slug: "what-is-bill-of-quantities",
    title: "What is a Bill of Quantities and Why You Need One",
    category: "Consultancy",
    author: "OJ Mary",
    readTime: "6 min",
    image: siteVisit,
    excerpt: "A BoQ is the single most powerful financial tool a homeowner can have on a build. Here is what it contains, how to read it, and how it saves you money.",
    body: [
      "If you are about to build in Nigeria and you do not yet have a Bill of Quantities, stop. Do not sign a contractor agreement. Do not release any funds. A Bill of Quantities, or BoQ, is the single document that separates a controlled, budgeted project from an open cheque book. It is not a formality. It is your financial armour for the next twelve to eighteen months. This guide explains what a BoQ actually contains, why every serious build needs one, and how to use it to keep contractors honest.",
      "## What a Bill of Quantities actually is",
      "A Bill of Quantities is a detailed schedule that lists every element of your proposed building, measured, priced, and totalled. It is prepared from your approved architectural and structural drawings by a quantity surveyor or a qualified building professional. The document breaks the entire project into elements: substructure, superstructure, finishes, roofing, electrical, plumbing, external works, and preliminaries. Under each element it lists every material and every labour operation, together with the quantity required, the unit rate, and the extended cost.",
      "## Why you cannot budget without one",
      "Without a BoQ, a contractor's quote is essentially a guess dressed up as a number. Two contractors quoting for the same building can produce quotes that differ by fifteen million naira, and neither of them can tell you why. With a BoQ, the two quotes must be presented against the same schedule, line by line, so you can see exactly where one is cheaper on iron rods and more expensive on tiles. Suddenly the comparison is meaningful. Suddenly you can negotiate.",
      "## Protecting against overbilling",
      "The most common way homeowners lose money on a build is through progressive overbilling. The contractor claims to have used more cement than the drawings actually required, more rods than the columns actually contain, or more finishing labour than the scope actually justifies. Without a BoQ, you have no way to challenge any of it. With a BoQ, every material request the contractor makes can be measured against the schedule, and any request that exceeds the scheduled quantity has to be explained before payment is released.",
      "## The foundation of milestone payments",
      "A BoQ is what makes milestone payments possible. Instead of paying against dates on a calendar, you pay against work completed. When the substructure is done and inspected, you release the substructure line items. When the superstructure is done, you release those. This structure protects both you and the contractor. You are never paying for work that has not been done, and the contractor is never waiting on your cash flow to keep the site moving.",
      "## Managing variations",
      "Every build has variations. A window position is changed, a bathroom is expanded, a finish is upgraded from ceramic to porcelain. Without a BoQ, variations become an argument. With a BoQ, the original scope is priced, the new scope is priced against the same rates, and the difference is settled on paper before the work is done. Variations stop being a source of conflict and become a routine part of project management.",
      "## What a good BoQ contains",
      "A well-prepared BoQ contains preliminaries, which cover the contractor's overheads such as site accommodation, water, security and hoardings. It contains provisional sums, which are budgeted amounts for scopes that have not been finalised, such as landscaping or bespoke joinery. It contains prime cost sums, which are budgets for specific items where the exact product has not yet been chosen. It contains contingency, typically five to ten percent of the total, which is set aside for genuinely unforeseen issues. And it contains a clear summary page that ties the whole document together.",
      "## Who should prepare it",
      "A BoQ should be prepared by a professional who is independent of the contractor who will build the project. This is the single most important rule. A BoQ prepared by the contractor who will bid for the work is not a control document. It is a marketing brochure. At Erudition JP, we prepare independent BoQs for clients whether or not they engage us for the construction, because we believe the document is more valuable to the homeowner when it is not tied to any single contractor's interests.",
      "## The bottom line",
      "A Bill of Quantities is a small investment relative to the total build cost, typically less than one percent of the project value. It routinely saves ten to twenty percent by preventing overbilling, enabling honest bid comparison, and giving you the confidence to release payments only when work is genuinely done. If you are planning to build, get your BoQ first. Everything else in the project depends on it.",
    ],
  },
  {
    slug: "choosing-contractor-abuja",
    title: "How to Choose the Right Contractor in Abuja",
    category: "Construction Tips",
    author: "Engr. Chukwuemeka O.",
    readTime: "7 min",
    image: foundationImg,
    excerpt: "Five hard questions to ask before signing any construction contract, and the warning signs that tell you to walk away.",
    body: [
      "Choosing a contractor is the single biggest decision you will make on your project, bigger than the design, bigger than the plot, bigger even than the budget. A good contractor will deliver a competent home on a difficult site with a modest budget. A bad contractor will squander a generous budget on a perfect site and still leave you with a building you dread living in. The difference between the two is almost never obvious in the first meeting. Here is how to tell them apart before you sign.",
      "## 1. Ask to see three completed projects and visit at least one",
      "Photographs are easy to fake and easy to inherit from other people's work. A serious contractor will not hesitate to give you the addresses of three completed projects and the phone numbers of the owners. Visit at least one of the projects in person. Walk the building. Look at the corners of the plaster, the alignment of the tiles, the fit of the doors, the finish of the ceiling. These are the details that reveal a contractor's true standard, and they are almost impossible to hide on a finished building.",
      "Call at least two of the previous clients. Ask them one specific question: if you were building again, would you use this contractor? The pause before the answer tells you more than the answer itself.",
      "## 2. Insist on a written contract with milestone payments",
      "No serious contractor should object to a written contract. The contract should set out the scope, the price, the schedule, the milestone payment structure, the variation procedure, the retention percentage, the defects liability period, and the dispute resolution mechanism. Payments should be tied to deliverables, not to dates. When the foundation is complete and inspected, the foundation payment is released. When the roof is on, the roofing payment is released. Never agree to fixed monthly payments regardless of progress.",
      "## 3. Verify professional registration",
      "In Nigeria, competent building contractors are registered with the Nigerian Institute of Building (NIOB) or the Council for the Regulation of Engineering in Nigeria (COREN) depending on the scope of work. Ask for the registration number, then call the institute to verify it. Both bodies maintain public registers, and both will confirm or deny a registration over the phone. A contractor who cannot produce a valid registration number is not a contractor you should trust with your family's home.",
      "## 4. Understand who is actually on site",
      "The contractor you meet in the office may not be the contractor who runs your site. Many operations subcontract the day-to-day work to junior teams while the principal handles marketing and payment collection. Ask specifically who the site supervisor will be, how many years of experience they have, how many projects they are running concurrently, and how often they will physically visit the site. If the answer is vague, you have a problem.",
      "## 5. Never pay one hundred percent upfront",
      "Any contractor who insists on full payment before starting work is telling you something important. Either they have a cash flow crisis, in which case your money will be spent on someone else's project, or they do not intend to complete your project. A serious contractor works on staged payments and expects to carry some cost of works in progress on their own balance sheet. Twenty percent mobilisation, followed by milestone releases against verified progress, is the industry standard for residential work in the FCT.",
      "## Warning signs to walk away from",
      "There are five signals that should end any conversation with a contractor. The first is a price that is dramatically lower than every other quote you have received. Nobody wins by building your house at a loss. The second is refusal to work with your independent BoQ. The third is pressure to sign quickly, before you have done your due diligence. The fourth is any request for cash payments outside a proper invoice trail. The fifth is aggression or dismissiveness when you ask reasonable questions about scope, materials, or timing.",
      "## The bottom line",
      "Choosing a contractor is not about finding the cheapest quote. It is about finding a professional who will treat your project the way you would treat it yourself. Ask hard questions early, verify everything you can verify, and pay attention to how the contractor responds under scrutiny. If you can, engage an independent building professional to review the shortlist with you. At Erudition JP, we frequently vet contractors on behalf of clients who intend to build with someone else. It is one of the most cost-effective services we offer.",
    ],
  },
  {
    slug: "real-estate-investment-abuja",
    title: "Real Estate Investment in Abuja: Beginner's Guide",
    category: "Property Investment",
    author: "Prisca J.",
    readTime: "8 min",
    image: twoStoreyShell,
    excerpt: "Where to start, what to avoid, and how to grow your portfolio in the FCT, from your first plot to your first estate.",
    body: [
      "Real estate is still the most reliable long term store of value in Nigeria. Through every recession, every currency devaluation and every political cycle of the last three decades, well-chosen FCT land has grown in real value faster than the naira has fallen. But real estate is also the sector where beginners lose the most money the fastest, because the entry ticket is large and the mistakes are often permanent. This guide is written for the first-time investor. It will not tell you how to become rich in six months. It will tell you how to build a portfolio you will still own in twenty years.",
      "## Start with land, not with buildings",
      "The single best first investment in the FCT is a piece of verified, title-secure land in a growth corridor. Land requires no maintenance, no tenant, no insurance and no ongoing capital, and it appreciates quietly in the background while you continue your day job. Buildings, by contrast, require constant attention. They need repairs, they need tenants, they need property management, and they lose value if any of those pieces fail. Start with land. Learn the market. Add buildings when you are ready to manage them.",
      "## The FCT growth corridors",
      "Not every plot in the FCT is equal. The corridors that have consistently outperformed the market over the last decade are Bwari, Kubwa expansion, Karsana, Lokogoma, Idu and Gwagwalada. These are the areas where infrastructure is arriving next, where government allocations are still active, and where prices are still low enough for a first-time investor to enter. Avoid the fully built-out districts unless you have a specific redevelopment plan and the capital to execute it.",
      "## Always buy verified",
      "Fraud is the single biggest risk in the FCT land market. Every serious investor has heard the same story: a plot bought cheaply from a persuasive seller, no independent search, no Governor's Consent, and years later a different family arrives with a genuine C of O and takes possession of the land. The only real protection is documentation. Insist on AGIS search, insist on Surveyor General verification, insist on Governor's Consent, and never release final payment until the title is registered in your name.",
      "## Buy small, buy often",
      "Beginners often stretch to buy one large plot in a premium district. This is almost always a mistake. Two smaller plots in developing corridors will outperform one large plot in a mature district over a ten-year horizon, and they diversify your risk if one corridor underperforms. Start with the largest plot you can afford in a strong growth corridor, then reinvest your capital gains into a second plot within three to five years.",
      "## The build-and-hold play",
      "Once you have accumulated three or four plots, the next step is usually to build on one and hold it as a rental. A well-built three-bedroom bungalow in a developing FCT corridor rents for one and a half to three million naira a year and appreciates alongside the land. The rental income covers the running costs and often the loan repayments, while the capital appreciation continues to compound. This is how most FCT investors move from part-time to full-time real estate.",
      "## The estate developer play",
      "The most ambitious FCT investors eventually assemble multiple contiguous plots into small estates and develop them for sale. This requires significantly more capital and significantly more expertise, but it also produces the largest returns. Estate development is not a starting point. It is a graduation, typically after a decade of buying, holding and building on individual plots.",
      "## Common beginner mistakes to avoid",
      "The first mistake is buying land in areas where infrastructure will not arrive for another twenty years. Cheap land is often cheap for good reason. The second is buying without independent title search because a family member vouched for the seller. Trust is not a title document. The third is over-borrowing to buy. Real estate rewards patience, and patience is impossible when you are servicing an expensive loan against an appreciating but non-yielding asset. The fourth is falling in love with a specific plot and paying above market for it. There is always another plot. There is not always another million naira.",
      "## Working with professionals",
      "Every serious real estate investor eventually builds a small team: a surveyor they trust, a lawyer who understands FCT title law, a building professional who can evaluate development potential, and a property manager who can run the rentals. Building this team early, even before you make your first purchase, protects you from most of the mistakes above. At Erudition JP, we frequently act as the building professional on this team, providing feasibility assessments, title verification support and BoQ preparation for investor clients across the FCT.",
      "## The bottom line",
      "FCT real estate rewards discipline, documentation and patience. Start small, buy verified, hold long, and reinvest your gains. The investors who follow these rules almost always end up ahead of the market. The investors who ignore them almost always end up as cautionary tales. If you are just starting, we would be glad to walk you through the current inventory of verified properties and help you match a first purchase to your budget and time horizon.",
    ],
  },
];

