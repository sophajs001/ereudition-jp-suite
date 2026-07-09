import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { properties, waLink } from "@/data/company";
import { propertyBySlug, slugify } from "@/data/extras";
import { BookATourForm } from "@/components/BookATourForm";

export const Route = createFileRoute("/properties/$slug")({
  head: ({ loaderData }) => {
    const p = loaderData as ReturnType<typeof propertyBySlug>;
    return {
      meta: [
        { title: p ? `${p.title} — Erudition JP` : "Property — Erudition JP" },
        { name: "description", content: p?.desc || "Verified property in the FCT." },
      ],
    };
  },
  loader: ({ params }) => {
    const p = propertyBySlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: PropertyDetail,
});

const propImages: Record<string, string> = {
  Residential: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
  Land: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
  Commercial: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
};

function PropertyDetail() {
  const { slug } = useParams();
  const p = propertyBySlug(slug || "");
  if (!p) return null;
  const similar = properties.filter((x) => x.id !== p.id && x.type === p.type).slice(0, 3);
  const img = propImages[p.type];

  return (
    <>
      <PageHero
        eyebrow={p.type}
        title={p.title}
        subtitle={`${p.location} — ${p.price}`}
        image={img}
        crumbs={[{ label: "Home" }, { label: "Properties" }, { label: p.title }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl">
              <img src={img} alt={p.title} className="h-96 w-full object-cover" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {p.beds && (
                <Spec label="Bedrooms" value={String(p.beds)} />
              )}
              {p.baths && (
                <Spec label="Bathrooms" value={String(p.baths)} />
              )}
              {p.size && <Spec label="Size" value={p.size} />}
              <Spec label="Type" value={p.type} />
            </div>

            <h2 className="mt-8 text-2xl font-bold">About this property</h2>
            <p className="mt-3 text-sm text-gray-700">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold"
                  style={{ color: "#0056b3" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold">Location</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100">
              <iframe
                title={`${p.location} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(p.location + " Abuja")}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Asking price
              </div>
              <div className="mt-1 text-3xl font-black" style={{ color: "#0056b3" }}>
                {p.price}
              </div>
              <div className="mt-1 text-sm text-gray-500">📍 {p.location}</div>
              <a
                href={waLink(
                  `Hello Erudition JP, I'm interested in: ${p.title} at ${p.location} (${p.price}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-white"
                style={{ background: "#25D366" }}
              >
                💬 WhatsApp about this property
              </a>
            </div>

            <BookATourForm
              property={{ title: p.title, location: p.location, price: p.price }}
            />
          </aside>
        </div>

        {similar.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Similar properties</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {similar.map((s) => (
                <Link
                  key={s.id}
                  to={`/properties/${slugify(s.title)}`}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={propImages[s.type]}
                      alt={s.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-bold">{s.title}</div>
                    <div className="text-xs text-gray-500">📍 {s.location}</div>
                    <div className="mt-1 text-sm font-black" style={{ color: "#0056b3" }}>
                      {s.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-gray-50 p-3 text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-base font-bold">{value}</div>
    </div>
  );
}
