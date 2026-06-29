import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { waLink, projectGallery, siteImages } from "@/data/company";
import { PageHero } from "@/components/PageHero";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio , Erudition JP Enterprise" },
      { name: "description", content: "Selected projects from our delivered builds across Abuja." },
      { property: "og:title", content: "Our Portfolio" },
      { property: "og:description", content: "Recent design and construction projects." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const projects = projectGallery;
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const [cat, setCat] = useState("All");
  const [lb, setLb] = useState<{ img: string; title: string; desc?: string } | null>(null);
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected projects"
        subtitle="A small window into what we have built. Tap any image to view it full screen."
        image={siteImages.twoStoreyShell}
        crumbs={[{ label: "Home" }, { label: "Portfolio" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className="rounded-full px-4 py-1.5 text-xs font-semibold transition" style={{ background: cat === c ? "#0056b3" : "#F3F4F6", color: cat === c ? "white" : "#374151" }}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 6) * 60}>
              <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <button
                  onClick={() => setLb({ img: p.img, title: p.title, desc: p.desc })}
                  className="relative block h-56 w-full overflow-hidden"
                  aria-label={`View ${p.title}`}
                >
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                    <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-gray-900">🔍 View</span>
                  </span>
                </button>
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{p.cat}</div>
                  <h3 className="mt-1 text-base font-bold">{p.title}</h3>
                  <div className="mt-1 text-xs text-gray-500">📍 {p.loc}</div>
                  {p.desc && <p className="mt-2 text-sm text-gray-600">{p.desc}</p>}
                  <a href={waLink(`Hello Erudition JP, I'd like to know more about your ${p.title} project.`)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold" style={{ color: "#0056b3" }}>Enquire on WhatsApp →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {lb && <Lightbox src={lb.img} alt={lb.title} caption={`${lb.title}${lb.desc ? " — " + lb.desc : ""}`} onClose={() => setLb(null)} />}
    </>
  );
}
