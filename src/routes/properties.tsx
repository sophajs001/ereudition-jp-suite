import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { properties, waLink } from "@/data/company";
import { PageHero } from "@/components/PageHero";
import { BookATourForm } from "@/components/BookATourForm";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties ,  Erudition JP Enterprise" },
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
  const [selected, setSelected] = useState<(typeof properties)[number] | null>(null);
  const [details, setDetails] = useState<(typeof properties)[number] | null>(null);
  const list = filter === "All" ? properties : properties.filter((p) => p.type === filter);

  useEffect(() => {
    if (!details) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDetails(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [details]);

  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Verified properties across the FCT"
        subtitle="Every listing is title searched, survey confirmed and ready for inspection."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Properties" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mt-6 flex flex-wrap gap-2">
          {["All", "Residential", "Land", "Commercial"].map((t) => (
            <button key={t} onClick={() => setFilter(t)} className="rounded-full px-4 py-1.5 text-xs font-semibold transition" style={{ background: filter === t ? "#0056b3" : "#F3F4F6", color: filter === t ? "white" : "#374151" }}>{t}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 6) * 60}>
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
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
                  <p className="mt-3 line-clamp-2 text-xs text-gray-600">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-semibold" style={{ color: "#0056b3" }}>{t}</span>)}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setDetails(p)}
                      className="rounded-xl border py-2.5 text-center text-xs font-bold"
                      style={{ borderColor: "#0056b3", color: "#0056b3" }}
                    >
                      View
                    </button>
                    <button
                      onClick={() => { setSelected(p); document.getElementById("book-tour")?.scrollIntoView({ behavior: "smooth" }); }}
                      className="rounded-xl py-2.5 text-center text-xs font-bold text-white"
                      style={{ background: "#0056b3" }}
                    >
                      Book Tour
                    </button>
                    <a
                      href={waLink(`Hello Erudition JP, I'm interested in: ${p.title} at ${p.location} (${p.price}).`)}
                      target="_blank" rel="noopener noreferrer"
                      className="rounded-xl py-2.5 text-center text-xs font-bold text-white"
                      style={{ background: "#25D366" }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>



      <section id="book-tour" className="mt-16 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>Book a Tour</div>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">See it for yourself</h2>
          <p className="mt-3 text-sm text-gray-600">
            Pick a property, choose a date and time that works for you, and our team will confirm your viewing on WhatsApp within hours.
          </p>
          {selected && (
            <div className="mt-5 rounded-2xl border border-gray-100 bg-[#F8FAFF] p-4 text-sm">
              <div className="font-bold" style={{ color: "#0056b3" }}>Selected:</div>
              <div className="mt-1">{selected.title}</div>
              <div className="text-xs text-gray-500">{selected.location} · {selected.price}</div>
            </div>
          )}
        </div>
        <div className="lg:col-span-3">
          <BookATourForm property={selected ? { title: selected.title, location: selected.location, price: selected.price } : undefined} />
        </div>
      </section>

      <div className="mt-12 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}>
        <h2 className="text-2xl font-bold">Don't see what you want?</h2>
        <p className="mt-2 text-sm text-white/80">Tell us what you're looking for and we'll source it for you.</p>
        <a href={waLink("Hello Erudition JP, I'm looking for a specific property.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold" style={{ color: "#0056b3" }}>Tell Us On WhatsApp</a>
      </div>
      </div>



      {details && (
        <div onClick={() => setDetails(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" style={{ animation: "ejp-fade-up .25s ease-out both" }}>
          <div onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white shadow-2xl">
            <button onClick={() => setDetails(null)} aria-label="Close" className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80">✕</button>
            <div className="relative h-64 md:h-80">
              <img src={propImages[details.type]} alt={details.title} className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-3 py-1.5 text-lg font-bold text-white">{details.price}</span>
            </div>
            <div className="p-6">
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{details.type}</div>
              <h2 className="mt-1 text-2xl font-bold">{details.title}</h2>
              <div className="mt-1 text-sm text-gray-500">📍 {details.location}</div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {details.beds && <div className="rounded-xl bg-gray-50 p-3 text-center"><div className="text-xs text-gray-500">Bedrooms</div><div className="text-base font-bold">{details.beds}</div></div>}
                {details.baths && <div className="rounded-xl bg-gray-50 p-3 text-center"><div className="text-xs text-gray-500">Bathrooms</div><div className="text-base font-bold">{details.baths}</div></div>}
                {details.size && <div className="rounded-xl bg-gray-50 p-3 text-center"><div className="text-xs text-gray-500">Size</div><div className="text-base font-bold">{details.size}</div></div>}
                <div className="rounded-xl bg-gray-50 p-3 text-center"><div className="text-xs text-gray-500">Status</div><div className="text-base font-bold text-green-600">Available</div></div>
              </div>
              <p className="mt-5 text-sm text-gray-700">{details.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {details.tags.map((t) => <span key={t} className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold" style={{ color: "#0056b3" }}>{t}</span>)}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => { setSelected(details); setDetails(null); setTimeout(() => document.getElementById("book-tour")?.scrollIntoView({ behavior: "smooth" }), 100); }}
                  className="rounded-xl py-3 text-sm font-bold text-white"
                  style={{ background: "#0056b3" }}
                >
                  Book a Tour
                </button>
                <a
                  href={waLink(`Hello Erudition JP, I'm interested in: ${details.title} at ${details.location} (${details.price}).`)}
                  target="_blank" rel="noopener noreferrer"
                  className="rounded-xl py-3 text-center text-sm font-bold text-white"
                  style={{ background: "#25D366" }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

