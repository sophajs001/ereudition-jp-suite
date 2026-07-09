import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useParams } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { projectGallery, waLink } from "@/data/company";
import { projectBySlug, slugify } from "@/data/extras";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ loaderData }) => {
    const p = loaderData as ReturnType<typeof projectBySlug>;
    return {
      meta: [
        { title: p ? `${p.title} — Erudition JP Portfolio` : "Project — Erudition JP" },
        { name: "description", content: p?.desc || "Selected project from Erudition JP." },
      ],
    };
  },
  loader: ({ params }) => {
    const p = projectBySlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = useParams();
  const idx = projectGallery.findIndex((p) => slugify(p.title) === slug);
  const p = projectGallery[idx];
  if (!p) return null;
  const prev = projectGallery[(idx - 1 + projectGallery.length) % projectGallery.length];
  const next = projectGallery[(idx + 1) % projectGallery.length];
  const related = projectGallery
    .filter((x, i) => i !== idx && x.cat === p.cat)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={p.cat}
        title={p.title}
        subtitle={p.desc}
        image={p.img}
        crumbs={[{ label: "Home" }, { label: "Portfolio" }, { label: p.title }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl">
              <img src={p.img} alt={p.title} className="h-[28rem] w-full object-cover" />
            </div>

            <h2 className="mt-8 text-2xl font-bold">Project brief</h2>
            <p className="mt-3 text-sm text-gray-700">{p.desc}</p>

            <h2 className="mt-8 text-2xl font-bold">Scope delivered</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span style={{ color: "#0056b3" }}>◆</span>Site setting-out and supervision
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#0056b3" }}>◆</span>Structural works to industry standard
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#0056b3" }}>◆</span>Verified materials from our supply chain
              </li>
              <li className="flex gap-2">
                <span style={{ color: "#0056b3" }}>◆</span>Milestone reporting and client updates
              </li>
            </ul>

            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
              <Link
                to={`/portfolio/${slugify(prev.title)}`}
                className="text-sm font-semibold text-gray-600 hover:text-[#0056b3]"
              >
                ← {prev.title}
              </Link>
              <Link
                to={`/portfolio/${slugify(next.title)}`}
                className="text-sm font-semibold text-gray-600 hover:text-[#0056b3]"
              >
                {next.title} →
              </Link>
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Project details
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="font-semibold">{p.cat}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Location</dt>
                  <dd className="font-semibold">{p.loc}</dd>
                </div>
              </dl>
              <a
                href={waLink(`Hello Erudition JP, I'd like to know more about your ${p.title} project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-white"
                style={{ background: "#0056b3" }}
              >
                Enquire on WhatsApp
              </a>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Related projects
                </div>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.title}>
                      <Link
                        to={`/portfolio/${slugify(r.title)}`}
                        className="flex gap-3 rounded-lg p-2 hover:bg-gray-50"
                      >
                        <img
                          src={r.img}
                          alt={r.title}
                          className="h-14 w-14 flex-shrink-0 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-sm font-semibold">{r.title}</div>
                          <div className="text-xs text-gray-500">{r.loc}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
