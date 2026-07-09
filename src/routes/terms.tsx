import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Erudition JP" },
      { name: "description", content: "Terms governing your use of Erudition JP services." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="The rules that govern the services we provide."
        image="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Terms" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>
        <div className="prose prose-sm mt-6 max-w-none text-gray-700">
          <p>
            These Terms of Service ("Terms") govern your engagement with {company.name}
            ("we", "us"). By engaging our services you agree to these Terms.
          </p>

          <h2 className="mt-8 text-lg font-bold">1. Acceptance</h2>
          <p>Engaging our services (design, construction, consultancy, materials supply or
          real estate) constitutes acceptance of these Terms.</p>

          <h2 className="mt-6 text-lg font-bold">2. Engagement</h2>
          <p>Every service begins with a written proposal and a signed agreement. Work
          starts once the agreement is signed and the initial payment is received.</p>

          <h2 className="mt-6 text-lg font-bold">3. Payments</h2>
          <p>Payments follow a milestone schedule tied to deliverables (foundation, roofing,
          finishing, handover, etc.). No monthly fixed payments are accepted.</p>

          <h2 className="mt-6 text-lg font-bold">4. Scope changes</h2>
          <p>Any change to the agreed scope requires a written variation order and may
          affect cost and timeline. Verbal instructions are not implemented.</p>

          <h2 className="mt-6 text-lg font-bold">5. Standards</h2>
          <p>All work meets or exceeds Nigerian Building Code standards and applicable
          professional guidelines (NIOB, COREN, AMAC).</p>

          <h2 className="mt-6 text-lg font-bold">6. Liability</h2>
          <p>Our liability is limited to the quality of the work we directly supervise. We
          are not liable for defects caused by third-party contractors we did not engage or
          materials sourced outside our supply chain.</p>

          <h2 className="mt-6 text-lg font-bold">7. Dispute resolution</h2>
          <p>Disputes are resolved in this order: (a) direct negotiation; (b) mediation;
          (c) arbitration or the courts of the Federal Capital Territory under Nigerian
          law.</p>

          <h2 className="mt-6 text-lg font-bold">8. Confidentiality</h2>
          <p>We maintain confidentiality of all client information, drawings and financial
          records for the duration of the engagement and thereafter.</p>

          <h2 className="mt-6 text-lg font-bold">9. Termination</h2>
          <p>Either party may terminate on written notice. Work completed and materials
          delivered up to termination are compensated in full.</p>

          <h2 className="mt-6 text-lg font-bold">10. Governing law</h2>
          <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>

          <h2 className="mt-6 text-lg font-bold">11. Contact</h2>
          <p><a className="text-[#0056b3] underline" href={`mailto:${company.email}`}>{company.email}</a> — {company.address}.</p>
        </div>
      </div>
    </>
  );
}
