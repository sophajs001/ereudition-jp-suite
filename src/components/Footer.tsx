import { Link } from "@tanstack/react-router";
import { company, waLink } from "@/data/company";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={company.logo} alt="EJP" className="h-10 w-10 rounded-md object-contain" />
            <div>
              <div className="text-base font-bold" style={{ color: "#0056b3" }}>Erudition JP</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Enterprise</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">{company.tagline}. Trusted construction and real estate solutions in Abuja.</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold text-gray-900">Quick Links</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/about" className="hover:text-[#0056b3]">About</Link></li>
            <li><Link to="/services" className="hover:text-[#0056b3]">Services</Link></li>
            <li><Link to="/properties" className="hover:text-[#0056b3]">Properties</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#0056b3]">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-[#0056b3]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#0056b3]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold text-gray-900">Services</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/services" className="hover:text-[#0056b3]">Design & Construction</Link></li>
            <li><Link to="/services" className="hover:text-[#0056b3]">Consultancy & Planning</Link></li>
            <li><Link to="/services" className="hover:text-[#0056b3]">Materials & Supply</Link></li>
            <li><Link to="/services" className="hover:text-[#0056b3]">Real Estate & Property</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold text-gray-900">Contact</div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📍 {company.address}</li>
            {company.phones.map((p) => <li key={p}>📞 {p}</li>)}
            <li>✉️ <a href={`mailto:${company.email}`} className="hover:text-[#0056b3]">{company.email}</a></li>
            <li>
              <a href={waLink("Hello Erudition JP")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold text-white" style={{ background: "#25D366" }}>WhatsApp Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
