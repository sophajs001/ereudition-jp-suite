import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { company, services, testimonials, waLink } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erudition JP Enterprise ,  Build Your Dreams in Abuja" },
      { name: "description", content: "Trusted design, construction, real estate and materials in Abuja FCT. 150+ projects. 10+ years." },
      { property: "og:title", content: "Erudition JP Enterprise" },
      { property: "og:description", content: "We build your dreams ,  Abuja's reliable construction partner." },
    ],
  }),
  component: Home,
});

const slides = [
  { tag: "Nigeria's Trusted Construction Partner", h1: "We Build Your Dreams", h2: "With Precision.", cta: { label: "Get a Free Quote", href: waLink("Hello Erudition JP ,  I'd like a free quote.") }, bg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" },
  { tag: "Architectural Design Excellence", h1: "Beautiful Designs,", h2: "Built to Last.", cta: { label: "Explore Our Designs", href: "/services" }, bg: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80" },
  { tag: "Real Estate & Property", h1: "Find Your Perfect", h2: "Property in Abuja.", cta: { label: "View Properties", href: "/properties" }, bg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80" },
  { tag: "Quality Materials & Supply", h1: "Premium Materials,", h2: "Delivered to Your Site.", cta: { label: "Talk to Us", href: waLink("Hello Erudition JP ,  I'd like to enquire about materials.") }, bg: "https://images.unsplash.com/photo-1581094289810-adf5d25690e3?w=1600&q=80" },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  const isExternal = s.cta.href.startsWith("http");

  return (
    <>
      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        {slides.map((sl, idx) => (
          <div key={idx} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: idx === i ? 1 : 0 }}>
            <img src={sl.bg} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,20,60,0.78), rgba(0,40,100,0.5), rgba(0,0,0,0.3))" }} />
          </div>
        ))}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white">
          <div className="mb-3 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{s.tag}</div>
          <h1 className="font-extrabold leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)" }}>
            {s.h1}<br />
            <span style={{ color: "#93c5fd" }}>{s.h2}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/80">Design, construction, materials and verified real estate ,  delivered with integrity and on time, across Abuja FCT.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {isExternal ? (
              <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-7 py-3 text-sm font-bold" style={{ color: "#0056b3" }}>{s.cta.label} →</a>
            ) : (
              <Link to={s.cta.href} className="rounded-xl bg-white px-7 py-3 text-sm font-bold" style={{ color: "#0056b3" }}>{s.cta.label} →</Link>
            )}
            <Link to="/contact" className="rounded-xl border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">Contact Us</Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs text-white/70">
            <span>{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            <div className="flex gap-1.5">
              {slides.map((_, k) => (
                <button key={k} aria-label={`slide ${k + 1}`} onClick={() => setI(k)} className="h-1.5 rounded-full transition-all" style={{ width: k === i ? 28 : 10, background: k === i ? "white" : "rgba(255,255,255,.4)" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 mx-auto mt-6 max-w-6xl px-4 md:-mt-12">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:grid-cols-4">
          {[["150+", "Projects Completed"], ["10+", "Years Experience"], ["200+", "Happy Clients"], ["30+", "Properties Listed"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-3xl font-black" style={{ color: "#0056b3" }}>{n}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>What We Do</div>
          <h2 className="mt-2 text-3xl font-bold">Our Core Services</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.id} to="/services" className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl" style={{ background: "#EFF6FF", color: "#0056b3" }}>◆</div>
              <h3 className="text-base font-bold">{s.title}</h3>
              <p className="mt-1 text-xs font-semibold" style={{ color: "#0056b3" }}>{s.tag}</p>
              <p className="mt-3 text-sm text-gray-600">{s.summary}</p>
              <ul className="mt-3 space-y-1 text-xs text-gray-500">
                {s.items.slice(0, 3).map((i) => <li key={i}>· {i}</li>)}
              </ul>
              <div className="mt-4 text-sm font-semibold group-hover:underline" style={{ color: "#0056b3" }}>Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80" alt="Build site" className="rounded-2xl shadow-lg" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>Why Choose Us</div>
            <h2 className="mt-2 text-3xl font-bold">Don't struggle alone ,  let us help you build right.</h2>
            <ul className="mt-6 space-y-4">
              {["Academic & Practical Expertise ,  degree-trained and site-trained since 1992", "Timely delivery on every milestone", "200+ satisfied clients across the FCT"].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-white" style={{ background: "#0056b3" }}>✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <a href={waLink("Hello Erudition JP ,  I want to discuss a project.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white" style={{ background: "#0056b3" }}>Talk to Us →</a>
          </div>
        </div>
      </section>

      {/* VISION/MISSION */}
      <section style={{ background: "#0056b3" }} className="py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-white/70">Our Vision</div>
            <p className="mt-2 text-base font-medium">To be Nigeria's most trusted partner for innovative construction and real estate solutions, delivering safe, functional and lasting structures.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-white/70">Our Mission</div>
            <p className="mt-2 text-base font-medium">To deliver professional construction, design, quantity surveying, consultancy and supply services with integrity, quality, precision and timely delivery.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mb-10 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>Testimonials</div>
          <h2 className="mt-2 text-3xl font-bold">What our clients say</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-5 ejp-marquee">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className="w-[320px] flex-none rounded-2xl border border-gray-200 bg-white p-6" style={{ boxShadow: "0 6px 20px rgba(0,86,179,0.06)" }}>
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-3 text-sm text-gray-700">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "#0056b3" }}>{t.author[0]}</div>
                  <div>
                    <div className="text-sm font-bold">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-3xl p-10 text-center text-white" style={{ background: "linear-gradient(135deg, #003d82, #0056b3, #1a73c8)" }}>
          <h2 className="text-3xl font-bold">Ready to Build Something Great?</h2>
          <p className="mt-2 text-sm text-white/80">Tell us about your project ,  we'll respond within hours.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={waLink("Hello Erudition JP ,  let's discuss my project.")} target="_blank" rel="noopener noreferrer" className="rounded-xl px-6 py-3 text-sm font-bold text-white" style={{ background: "#0056b3" }}>Chat on WhatsApp</a>
            <a href={`tel:${company.phones[0]}`} className="rounded-xl bg-white px-6 py-3 text-sm font-bold" style={{ color: "#0056b3" }}>Call {company.phones[0]}</a>
          </div>
        </div>
      </section>
    </>
  );
}
