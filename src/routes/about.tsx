import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { team, faqs } from "@/data/company";
import { PageHero } from "@/components/PageHero";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ,  Erudition JP Enterprise" },
      { name: "description", content: "Our story, leadership, vision & mission. Erudition JP = Judemary + Prisca." },
      { property: "og:title", content: "About Erudition JP Enterprise" },
      { property: "og:description", content: "Our story, leadership team and values." },
    ],
  }),
  component: About,
});

function Accordion({ title, defaultOpen, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="text-base font-bold">{title}</span>
        <span className="text-xl" style={{ color: "#0056b3" }}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="border-t border-gray-100 px-6 py-5 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Erudition JP Enterprise"
        subtitle="JP stands for Judemary and Prisca. Two names, one vision: building Nigerian dreams with integrity, precision and trust."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "About" }]}
      />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mt-2 space-y-4">

        <Accordion title="Our History & Story" defaultOpen>
          <p>Erudition JP Enterprise was founded by <strong>Onyeke Judemary O.</strong> and <strong>Prisca</strong> to bridge academic knowledge and practical construction realities in Nigeria.</p>
          <p className="mt-3"><strong>Our CEO is a professional Building graduate from the University of Jos and a Graduate Member of the Nigerian Institute of Building (GNIOB).</strong> His masonry journey began in 1992 ,  long before formal study ,  and he continued hands-on site work all through his university years (from 2019) to fund his education. The result is rare: deep practical mastery <em>and</em> rigorous theoretical training, from the trowel up.</p>
          <p className="mt-3">Our COO, Mrs. Prisca Aliyu, is a <strong>Pure Mathematics graduate from Plateau State University, Bokkos</strong>, bringing analytical rigour to every project, contract and budget.</p>
          <p className="mt-3">From humble Abuja beginnings, we have grown to deliver 150+ projects across the FCT and beyond, anchored in four pillars: Design & Construction, Consultancy & Planning, Materials & Supply, and Real Estate.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[["Founded", "in Abuja"], ["Founders", "Judemary & Prisca"], ["150+", "Projects delivered"]].map(([a, b]) => (
              <div key={b} className="rounded-xl bg-gray-50 p-4">
                <div className="text-lg font-bold" style={{ color: "#0056b3" }}>{a}</div>
                <div className="text-xs text-gray-500">{b}</div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Leadership & Team">
          <div className="grid gap-5 md:grid-cols-2">
            {team.map((m) => (
              <div key={m.name} className={`rounded-2xl border p-5 ${m.featured ? "border-[#0056b3] bg-[#EFF6FF] md:col-span-2" : "border-gray-100 bg-white"}`}>
                <div className="flex gap-4">
                  <img src={m.img} alt={m.name} className="h-20 w-20 flex-none rounded-xl object-cover" />
                  <div>
                    <div className="text-sm font-bold">{m.name}</div>
                    <div className="text-xs font-semibold" style={{ color: "#0056b3" }}>{m.role}</div>
                    <p className="mt-2 text-xs text-gray-600">{m.bio}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.expertise.map((e) => <span key={e} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-gray-700 ring-1 ring-gray-200">{e}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Vision, Mission & Core Values">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl p-4 text-white" style={{ background: "#0056b3" }}>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Vision</div>
              <p className="mt-2 text-sm">To be Nigeria's most trusted partner for innovative construction and real estate solutions, setting the standard for reliability by delivering safe, functional, and lasting structures.</p>
            </div>
            <div className="rounded-xl border border-[#0056b3] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#0056b3" }}>Mission</div>
              <p className="mt-2 text-sm text-gray-700">To deliver professional construction, building design, quantity surveying, consultancy and supply services tailored to our clients with integrity, quality, precision and timely delivery.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {[
              ["Integrity", "Transparency in every interaction."],
              ["Innovation", "Modern techniques and creative solutions."],
              ["Sustainability", "Responsible materials and methods."],
              ["Client-First", "Your vision is our priority."],
              ["Excellence", "The highest standards, end to end."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl bg-gray-50 p-3">
                <div className="text-sm font-bold" style={{ color: "#0056b3" }}>{t}</div>
                <p className="mt-1 text-xs text-gray-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 italic text-gray-600">"We are the smartest way to build your home. We build your dreams. We build trust as we build structures."</p>
        </Accordion>

        <Accordion title="Privacy Policy">
          <ol className="list-decimal space-y-2 pl-5">
            <li><strong>Information We Collect</strong> ,  name, phone, email and project details you share with us.</li>
            <li><strong>How We Use It</strong> ,  to respond to enquiries and prepare proposals.</li>
            <li><strong>Information Sharing</strong> ,  never sold; shared only with project contractors as needed.</li>
            <li><strong>Data Security</strong> ,  secure storage and restricted access.</li>
            <li><strong>Communication</strong> ,  by contacting us you consent to a reply via your chosen channel.</li>
            <li><strong>Third-Party Links</strong> ,  we are not responsible for external sites we link to.</li>
            <li><strong>Your Rights</strong> ,  you can access, correct or request deletion of your data.</li>
            <li><strong>Privacy queries</strong> ,  eruditionjpenterprise@gmail.com</li>
          </ol>
        </Accordion>

        <Accordion title="Terms of Service">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Acceptance of Terms.</li>
            <li>Service engagement requires a signed agreement and initial payment.</li>
            <li>Payments follow a milestone schedule.</li>
            <li>Scope changes require written requests and may affect cost/timeline.</li>
            <li>Work meets or exceeds industry standards.</li>
            <li>Liability covers quality of directly supervised work.</li>
            <li>Disputes resolved by negotiation → mediation → Nigerian law.</li>
            <li>Confidentiality maintained on all client information.</li>
            <li>Termination requires written notice; completed work is compensated.</li>
            <li>Governed by the laws of the Federal Republic of Nigeria.</li>
          </ol>
        </Accordion>

        <Accordion title="FAQs">
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl bg-gray-50 p-4">
                <div className="text-sm font-bold">{f.q}</div>
                <p className="mt-1 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </Accordion>
        </div>
      </div>
    </>
  );
}

