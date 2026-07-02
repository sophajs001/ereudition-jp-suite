import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts, waLink, company } from "@/data/company";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} , Erudition JP Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-flex text-sm font-semibold" style={{ color: "#0056b3" }}>
        ← Back to blog
      </Link>
    </div>
  ),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://ereudition-jp-suite.lovable.app/blog/${post.slug}`;
  const shareText = `${post.title} , ${company.short}`;

  const shares = {
    whatsapp: waLink(`${shareText}\n${shareUrl}`),
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    } catch {
      /* noop */
    }
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/blog" className="text-xs font-semibold" style={{ color: "#0056b3" }}>
        ← Back to blog
      </Link>
      <div className="mt-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>
        {post.category}
      </div>
      <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
      <div className="mt-3 text-xs text-gray-500">
        {post.author} · {post.readTime} read
      </div>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mt-6 h-72 w-full rounded-2xl object-cover shadow-sm md:h-96"
        />
      )}
      <p className="mt-6 text-lg font-medium text-gray-800">{post.excerpt}</p>

      <div className="prose prose-slate mt-8 max-w-none">
        {post.body.map((line: string, i: number) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="mt-8 text-xl font-bold text-gray-900 md:text-2xl">
                {line.replace(/^##\s+/, "")}
              </h2>
            );
          }
          return (
            <p key={i} className="mt-4 text-[15px] leading-7 text-gray-700">
              {line}
            </p>
          );
        })}
      </div>

      {/* Share bar */}
      <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-5">
        <div className="text-sm font-bold text-gray-900">Share this article</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <a href={shares.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:opacity-90">WhatsApp</a>
          <a href={shares.facebook} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#1877F2] px-4 py-2 text-xs font-bold text-white hover:opacity-90">Facebook</a>
          <a href={shares.twitter} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-black px-4 py-2 text-xs font-bold text-white hover:opacity-90">X / Twitter</a>
          <a href={shares.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#0A66C2] px-4 py-2 text-xs font-bold text-white hover:opacity-90">LinkedIn</a>
          <a href={shares.telegram} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#229ED9] px-4 py-2 text-xs font-bold text-white hover:opacity-90">Telegram</a>
          <button onClick={copyLink} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-100">Copy link</button>
        </div>
      </div>

      <div className="mt-10 rounded-2xl p-6 text-white" style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}>
        <div className="text-lg font-bold">Have questions on this topic?</div>
        <p className="mt-1 text-sm text-white/80">Chat with our team on WhatsApp , we respond fast.</p>
        <a
          href={waLink(`Hello Erudition JP , I read "${post.title}" and have a question.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-bold"
          style={{ color: "#0056b3" }}
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold">Related articles</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/blog/$slug"
              params={{ slug: r.slug }}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md"
            >
              {r.image && <img src={r.image} alt={r.title} className="h-32 w-full object-cover" />}
              <div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>
                  {r.category}
                </div>
                <div className="mt-1 text-sm font-bold">{r.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
