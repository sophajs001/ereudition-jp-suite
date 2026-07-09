import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { services4 } from "@/data/extras";
import { waLink } from "@/data/company";

export const Route = createFileRoute("/services/$slug")({
  head: ({ loaderData }) => {
    const s = loaderData as (typeof services4)[number] | null;
    return {
      meta: [
        { title: s ? `${s.title} — Erudition JP` : "Service — Erudition JP" },
        { name: "description", content: s?.summary || "Erudition JP services in Abuja." },
      ],
    };
  },
  loader: ({ params }) => {
    const s = services4.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = useParams();
  const s = services4.find((x) => x.slug === slug);
  if (!s) return null;
  const related = services4.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={s.title}
        subtitle={s.summary}
        image={s.hero}
        crumbs={[{ label: "Home" }, { label: "Services" }, { label: s.title }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: s.color }}
            >
              {s.tag}
            </div>
            <h2 className="mt-2 text-2xl font-bold">What's included</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {s.scope.map((i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: s.color }}>◆</span>
                  {i}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold">Our process</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Reach out", "WhatsApp, call or email."],
                ["02", "Free consult", "We listen. No obligation."],
                ["03", "Scope & quote", "Written proposal within days."],
                ["04", "Deliver", "On-time, on-spec, on-budget."],
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-2xl border border-gray-100 bg-white p-4">
                  <div className="text-xl font-black" style={{ color: s.color }}>
                    {n}
                  </div>
                  <div className="mt-1 text-sm font-bold">{t}</div>
                  <p className="mt-1 text-xs text-gray-600">{d}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold">FAQs</h2>
            <div className="mt-4 space-y-3">
              {s.faqs.map((f) => (
                <div key={f.q} className="rounded-xl bg-gray-50 p-4">
                  <div className="text-sm font-bold">{f.q}</div>
                  <p className="mt-1 text-sm text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: `linear-gradient(135deg, ${s.color}, #003d82)` }}
            >
              <div className="text-sm font-bold">Ready to start?</div>
              <p className="mt-2 text-xs opacity-90">
                Get a free consultation and a written scope within 48 hours.
              </p>
              <a
                href={waLink(`Hello Erudition JP — I'd like to enquire about ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-xl bg-white px-5 py-2.5 text-xs font-bold"
                style={{ color: s.color }}
              >
                Enquire on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Other services
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/services/${r.slug}`}
                      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 hover:bg-gray-50"
                    >
                      <span className="font-semibold">{r.title}</span>
                      <span style={{ color: r.color }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
