import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/company";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog , Erudition JP Enterprise" },
      { name: "description", content: "Practical guides on construction, materials and real estate in Abuja." },
      { property: "og:title", content: "Erudition JP Blog" },
      { property: "og:description", content: "Insights from our team for builders, buyers and investors." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights and guides"
        subtitle="Practical advice from our team for builders, buyers and investors."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Blog" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md md:grid-cols-2">
            <img src={featured.image} alt={featured.title} className="h-72 w-full object-cover md:h-full" />
            <div className="p-6 md:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{featured.category}</div>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-sm text-gray-600">{featured.excerpt}</p>
              <div className="mt-4 text-xs text-gray-500">{featured.author} · {featured.readTime} read</div>
              <div className="mt-5 inline-flex text-sm font-semibold" style={{ color: "#0056b3" }}>Read article →</div>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{p.category}</div>
                  <h3 className="mt-2 text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-3 text-xs text-gray-500">{p.author} · {p.readTime} read</div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-4 inline-flex w-fit items-center gap-1 rounded-lg px-4 py-2 text-xs font-bold text-white transition hover:opacity-90"
                    style={{ background: "#0056b3" }}
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </>
  );
}
