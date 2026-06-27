import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts, waLink } from "@/data/company";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} ,  Erudition JP Blog` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.excerpt },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-flex text-sm font-semibold" style={{ color: "#0056b3" }}>← Back to blog</Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/blog" className="text-xs font-semibold" style={{ color: "#0056b3" }}>← Back to blog</Link>
      <div className="mt-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{post.category}</div>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">{post.title}</h1>
      <div className="mt-3 text-xs text-gray-500">{post.author} · {post.readTime} read</div>
      <p className="mt-6 text-base text-gray-700">{post.excerpt}</p>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700">
        {post.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-10 rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}>
        <div className="text-lg font-bold">Have questions on this topic?</div>
        <p className="mt-1 text-sm text-white/80">Chat with our team on WhatsApp ,  we respond fast.</p>
        <a href={waLink(`Hello Erudition JP ,  I read "${post.title}" and have a question.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl px-5 py-2.5 text-sm font-bold" style={{ background: "#0056b3" }}>Chat on WhatsApp</a>
      </div>
      <div className="mt-12">
        <h2 className="text-lg font-bold">Related articles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md">
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>{r.category}</div>
              <div className="mt-1 text-sm font-bold">{r.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
