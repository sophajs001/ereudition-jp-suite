import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { waLink } from "@/data/company";
import { PageHero } from "@/components/PageHero";


export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio ,  Erudition JP Enterprise" },
      { name: "description", content: "Selected projects from our 150+ delivered builds across Abuja." },
      { property: "og:title", content: "Our Portfolio" },
      { property: "og:description", content: "Recent design and construction projects." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { title: "3-Bedroom Bungalow", cat: "Residential", loc: "Ushafa Bwari", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { title: "Commercial Office Block", cat: "Commercial", loc: "Wuse II", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { title: "Duplex with BQ", cat: "Residential", loc: "Lokogoma", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { title: "Estate Layout & Roads", cat: "Estate", loc: "Karsana West", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" },
  { title: "Renovation & Remodel", cat: "Renovation", loc: "Kubwa", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
  { title: "Guest House", cat: "Commercial", loc: "Bwari", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
];

function Portfolio() {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected projects"
        subtitle="A small window into what we have built. Reach out for full case studies."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Portfolio" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12">


      <div className="mt-6 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className="rounded-full px-4 py-1.5 text-xs font-semibold" style={{ background: cat === c ? "#0056b3" : "#F3F4F6", color: cat === c ? "white" : "#374151" }}>{c}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.title} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="h-56 overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{p.cat}</div>
              <h3 className="mt-1 text-base font-bold">{p.title}</h3>
              <div className="mt-1 text-xs text-gray-500">📍 {p.loc}</div>
              <a href={waLink(`Hello Erudition JP ,  I'd like to know more about your ${p.title} project.`)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold" style={{ color: "#0056b3" }}>Enquire on WhatsApp →</a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

