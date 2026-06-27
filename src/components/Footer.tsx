import { Link } from "@tanstack/react-router";
import { company, waLink } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-20 text-gray-300" style={{ background: "#0b1220" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={company.logo} alt="Erudition JP" className="h-12 w-12 object-contain" />
            <div>
              <div className="text-base font-bold text-white">Erudition JP</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Enterprise</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            {company.tagline}. Trusted construction and real estate solutions across Abuja.
          </p>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-white">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
            <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-white">Services</div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-white">Design & Construction</Link></li>
            <li><Link to="/services" className="hover:text-white">Consultancy & Planning</Link></li>
            <li><Link to="/services" className="hover:text-white">Materials & Supply</Link></li>
            <li><Link to="/services" className="hover:text-white">Real Estate & Property</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-bold text-white">Contact</div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 {company.address}</li>
            {company.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="hover:text-white">📞 {p}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">✉️ {company.email}</a>
            </li>
            <li className="pt-2">
              <a
                href={waLink("Hello Erudition JP")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-sm"
                style={{ background: "#0056b3" }}
              >
                💬 Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-gray-500 md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div>
            Powered by{" "}
            <a
              href="https://sophajs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#1a73c8]"
            >
              Sophajs Global Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
