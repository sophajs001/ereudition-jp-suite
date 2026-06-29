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
          <div className="mt-4 flex items-center gap-3">
            <a
              href={company.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>
            </a>
            <a
              href={company.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a
              href={waLink("Hello Erudition JP")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Zm-3.1 13.1c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.7-.1-.4-.1-1-.3-1.8-.6-3.2-1.4-5.3-4.7-5.5-4.9-.2-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.4 1.1-2.7.3-.3.7-.4.9-.4h.6c.2 0 .5 0 .7.5.3.7.9 2.2.9 2.4.1.2.1.3 0 .5 0 .2-.1.3-.3.5l-.5.6c-.2.2-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.6 1.5 2.9 1.7.3.1.5.1.7-.1.2-.2.8-1 1-1.3.2-.3.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.1.1.6-.1 1.4Z"/></svg>
            </a>
          </div>
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
