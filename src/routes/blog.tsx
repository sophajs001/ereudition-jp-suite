import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/company";
import { PageHero } from "@/components/PageHero";


export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog ,  Erudition JP Enterprise" },
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


      <Link to="/blog/$slug" params={{ slug: featured.slug }} className="mt-8 grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="" className="h-full max-h-80 w-full object-cover" />
        <div className="p-6">
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{featured.category}</div>
          <h2 className="mt-2 text-2xl font-bold">{featured.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{featured.excerpt}</p>
          <div className="mt-4 text-xs text-gray-500">{featured.author} · {featured.readTime} read</div>
        </div>
      </Link>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{p.category}</div>
            <h3 className="mt-2 text-base font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
            <div className="mt-3 text-xs text-gray-500">{p.author} · {p.readTime} read</div>
          </Link>
        ))}
      </div>
      </div>
    </>
  );
}

