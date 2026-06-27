import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { services, waLink } from "@/data/company";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services ,  Erudition JP Enterprise" },
      { name: "description", content: "Design & Construction, Consultancy & Planning, Materials & Supply, and Real Estate services in Abuja." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Four service pillars ,  designed and delivered by Erudition JP." },
    ],
  }),
  component: Services,
});

const accents: Record<string, string> = {
  brand: "#0056b3",
  amber: "#D97706",
  green: "#16A34A",
  purple: "#9333EA",
};

function Services() {
  const [open, setOpen] = useState<string>("design-construction");
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four pillars, one reliable partner."
        subtitle="From the first sketch to the final brick, including every material, document and decision in between."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Services" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">


      <div className="mt-8 space-y-4">
        {services.map((s) => {
          const isOpen = open === s.id;
          const color = accents[s.color];
          return (
            <div key={s.id} id={s.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <button onClick={() => setOpen(isOpen ? "" : s.id)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <div>
                  <div className="text-base font-bold">{s.title}</div>
                  <div className="text-xs font-semibold" style={{ color }}>{s.tag}</div>
                </div>
                <span className="text-xl" style={{ color }}>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 p-6" style={{ background: "#FAFBFD" }}>
                  <p className="text-sm text-gray-700">{s.summary}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2"><span style={{ color }}>◆</span>{i}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={waLink(`Hello Erudition JP ,  I'd like to enquire about ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: color }}>Enquire on WhatsApp</a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">How Every Engagement Starts</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[["01", "Reach Out", "WhatsApp, call or email."], ["02", "We Listen", "Free consultation, no obligation."], ["03", "We Plan", "Scope, BoQ, timeline."], ["04", "We Deliver", "On-time, on-spec, on-budget."]].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-gray-100 bg-white p-5">
              <div className="text-2xl font-black" style={{ color: "#0056b3" }}>{n}</div>
              <div className="mt-2 text-sm font-bold">{t}</div>
              <p className="mt-1 text-xs text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}

