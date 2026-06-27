type Crumb = { label: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  const bg =
    image ||
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80";
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,20,60,0.88), rgba(0,40,100,0.72) 55%, rgba(0,0,0,0.55))",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-white md:py-28">
        {eyebrow && (
          <div className="ejp-fade-up mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm">
            {eyebrow}
          </div>
        )}
        <h1
          className="ejp-fade-up font-extrabold leading-tight"
          style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", animationDelay: ".05s" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="ejp-fade-up mt-4 max-w-2xl text-sm text-white/85 md:text-base"
            style={{ animationDelay: ".15s" }}
          >
            {subtitle}
          </p>
        )}
        {crumbs && crumbs.length > 0 && (
          <div className="ejp-fade-up mt-6 flex flex-wrap items-center gap-2 text-xs text-white/70" style={{ animationDelay: ".25s" }}>
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-50">/</span>}
                <span>{c.label}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
