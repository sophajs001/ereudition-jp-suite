import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { properties, waLink } from "@/data/company";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Erudition JP Enterprise" },
      { name: "description", content: "Verified land, residential and commercial properties for sale in Abuja FCT." },
      { property: "og:title", content: "Properties for Sale in Abuja" },
      { property: "og:description", content: "Browse our verified property listings across the FCT." },
    ],
  }),
  component: Properties,
});

const propImages: Record<string, string> = {
  Residential: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  Land: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  Commercial: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
};

function Properties() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? properties : properties.filter((p) => p.type === filter);
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>Properties</div>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">Verified properties across the FCT</h1>
      <p className="mt-3 max-w-2xl text-sm text-gray-600">Every listing is title-searched, survey-confirmed and ready for inspection.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {["All", "Residential", "Land", "Commercial"].map((t) => (
          <button key={t} onClick={() => setFilter(t)} className="rounded-full px-4 py-1.5 text-xs font-semibold transition" style={{ background: filter === t ? "#0056b3" : "#F3F4F6", color: filter === t ? "white" : "#374151" }}>{t}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48">
              <img src={propImages[p.type]} alt={p.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-gray-700">{p.type}</span>
              <span className="absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white" style={{ background: "#16A34A" }}>Available</span>
              <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-sm font-bold text-white">{p.price}</span>
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold">{p.title}</h3>
              <div className="mt-1 text-xs text-gray-500">📍 {p.location}</div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-700">
                {p.beds && <span>🛏 {p.beds} beds</span>}
                {p.baths && <span>🛁 {p.baths} bath</span>}
                {p.size && <span>📐 {p.size}</span>}
              </div>
              <p className="mt-3 text-xs text-gray-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-semibold" style={{ color: "#0056b3" }}>{t}</span>)}
              </div>
              <a href={waLink(`Hello Erudition JP — I'm interested in: ${p.title} at ${p.location} (${p.price}).`)} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-xl py-2.5 text-center text-sm font-bold text-white" style={{ background: "#25D366" }}>Enquire About This Property</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}>
        <h2 className="text-2xl font-bold">Don't see what you want?</h2>
        <p className="mt-2 text-sm text-white/80">Tell us what you're looking for and we'll source it for you.</p>
        <a href={waLink("Hello Erudition JP — I'm looking for a specific property.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold" style={{ color: "#0056b3" }}>Tell Us On WhatsApp</a>
      </div>
    </div>
  );
}
