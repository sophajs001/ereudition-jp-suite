import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { company, waLink } from "@/data/company";
import { PageHero } from "@/components/PageHero";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ,  Erudition JP Enterprise" },
      { name: "description", content: "Reach Erudition JP via WhatsApp, phone or email. Ushafa Bwari, Abuja." },
      { property: "og:title", content: "Contact Erudition JP" },
      { property: "og:description", content: "Talk to us ,  we respond within hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Erudition JP,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0A%0A${form.message}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
  };
  const upd = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const input = "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#0056b3]";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Tell us about your project. Design, construction, materials or real estate, we respond within hours."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Contact" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">


      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold">Office</div>
            <p className="mt-2 text-sm text-gray-600">📍 {company.address}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold">Phone</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {company.phones.map((p) => <li key={p}><a href={`tel:${p}`} className="hover:underline">📞 {p}</a></li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold">Email</div>
            <a href={`mailto:${company.email}`} className="mt-2 inline-flex text-sm hover:underline">✉️ {company.email}</a>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold">Hours</div>
            <p className="mt-2 text-sm text-gray-600">🕐 {company.hours}</p>
          </div>
          <a href={waLink("Hello Erudition JP ,  I'd like to chat live.")} target="_blank" rel="noopener noreferrer" className="block rounded-2xl p-5 text-white" style={{ background: "#0056b3" }}>
            <div className="text-sm font-bold">Prefer live chat?</div>
            <div className="mt-1 text-xs opacity-90">Chat with us instantly on WhatsApp →</div>
          </a>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-gray-700">Full Name</label>
              <input required value={form.name} onChange={(e) => upd("name", e.target.value)} className={input} />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700">Email Address</label>
              <input required type="email" value={form.email} onChange={(e) => upd("email", e.target.value)} className={input} />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700">Phone Number</label>
              <input required value={form.phone} onChange={(e) => upd("phone", e.target.value)} className={input} />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700">Subject</label>
              <input required value={form.subject} onChange={(e) => upd("subject", e.target.value)} className={input} />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-gray-700">Message</label>
            <textarea required rows={6} value={form.message} onChange={(e) => upd("message", e.target.value)} className={input} />
          </div>
          <button type="submit" className="mt-5 rounded-xl px-6 py-3 text-sm font-bold text-white" style={{ background: "#0056b3" }}>Send via WhatsApp</button>
        </form>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100">
        <iframe
          title="Office location"
          src="https://www.google.com/maps?q=Ushafa+Bwari+Abuja&output=embed"
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
      </div>
    </>
  );
}

