import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Erudition JP" },
      { name: "description", content: "How Erudition JP collects, uses and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle the information you share with us."
        image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1800&q=80"
        crumbs={[{ label: "Home" }, { label: "Privacy" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm text-gray-500">Last updated: {new Date().getFullYear()}</p>
        <div className="prose prose-sm mt-6 max-w-none text-gray-700">
          <p>
            This Privacy Policy explains how {company.name} ("we", "us", "our") collects,
            uses and protects information you provide when using our website or our
            construction, consultancy, materials and real estate services.
          </p>

          <h2 className="mt-8 text-lg font-bold">1. Information we collect</h2>
          <p>Your name, phone number, email, project details, property preferences and any
          message you submit through our contact forms, WhatsApp, phone or email.</p>

          <h2 className="mt-6 text-lg font-bold">2. How we use it</h2>
          <p>To respond to your enquiries, prepare quotes and Bills of Quantities, schedule
          property tours, deliver services you engage us for, and keep you informed about
          your project.</p>

          <h2 className="mt-6 text-lg font-bold">3. Information sharing</h2>
          <p>We never sell your information. We share it only with contractors, suppliers,
          surveyors or legal professionals engaged on your project, and only as strictly
          necessary to deliver the work.</p>

          <h2 className="mt-6 text-lg font-bold">4. Data security</h2>
          <p>Records are kept in secured storage with access restricted to authorised staff.
          We use industry-standard technical and organisational measures to protect your
          data.</p>

          <h2 className="mt-6 text-lg font-bold">5. Communication</h2>
          <p>By contacting us, you consent to receive a reply on the channel you used
          (WhatsApp, phone, email). You can opt out of non-essential communications at any
          time.</p>

          <h2 className="mt-6 text-lg font-bold">6. Third-party links</h2>
          <p>Our site may link to third-party sites (e.g. Google Maps, WhatsApp, Instagram).
          We are not responsible for their privacy practices.</p>

          <h2 className="mt-6 text-lg font-bold">7. Your rights</h2>
          <p>You may request access to, correction of, or deletion of the personal
          information we hold about you. To exercise these rights, contact us at the email
          below.</p>

          <h2 className="mt-6 text-lg font-bold">8. Contact</h2>
          <p>Privacy queries: <a className="text-[#0056b3] underline" href={`mailto:${company.email}`}>{company.email}</a>.</p>
          <p>Address: {company.address}.</p>
        </div>
      </div>
    </>
  );
}
