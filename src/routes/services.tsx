import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { services4 } from "@/data/extras";
import { waLink } from "@/data/company";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Erudition JP Enterprise" },
      { name: "description", content: "Design & Construction, Consultancy & Planning, Materials & Supply, and Real Estate services in Abuja." },
      { property: "og:title", content: "Our Services" },
      { property: "og:description", content: "Four service pillars — designed and delivered by Erudition JP." },
    ],
  }),
  component: Services,
});

function Services() {
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
        <div className="grid gap-6 md:grid-cols-2">
          {services4.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.hero}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 45%, rgba(0,0,0,.55) 100%)",
                  }}
                />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "#fff" }}
                  >
                    {s.tag}
                  </div>
                  <div className="text-xl font-bold">{s.title}</div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600">{s.summary}</p>
                <div
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold"
                  style={{ color: s.color }}
                >
                  Explore service <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">How every engagement starts</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["01", "Reach Out", "WhatsApp, call or email."],
              ["02", "We Listen", "Free consultation, no obligation."],
              ["03", "We Plan", "Scope, BoQ, timeline."],
              ["04", "We Deliver", "On-time, on-spec, on-budget."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-gray-100 bg-white p-5">
                <div className="text-2xl font-black" style={{ color: "#0056b3" }}>
                  {n}
                </div>
                <div className="mt-2 text-sm font-bold">{t}</div>
                <p className="mt-1 text-xs text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          className="mt-14 rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}
        >
          <h2 className="text-2xl font-bold">Not sure which service you need?</h2>
          <p className="mt-2 text-sm text-white/80">
            Tell us what you're planning and we'll point you to the right place.
          </p>
          <a
            href={waLink("Hello Erudition JP — I'd like advice on which service fits my project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold"
            style={{ color: "#0056b3" }}
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
