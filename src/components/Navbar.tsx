import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { company, waLink } from "@/data/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="text-white" style={{ background: "#0056b3" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span>📞 {company.phones[0]}</span>
            <span className="hidden sm:inline">✉️ {company.email}</span>
          </div>
          <span className="italic opacity-80 hidden md:inline">"{company.tagline}"</span>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={company.logo} alt="EJP" className="h-10 w-10 rounded-md object-contain" />
          <div className="leading-tight">
            <div className="text-base font-bold" style={{ color: "#0056b3" }}>Erudition JP</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Enterprise</div>
          </div>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#F8FAFF] hover:text-[#0056b3]"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-[#0056b3] bg-[#EFF6FF]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={waLink("Hello Erudition JP — I'd like to request a quote.")}
          target="_blank" rel="noopener noreferrer"
          className="hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 lg:inline-flex"
          style={{ background: "#0056b3" }}
        >
          Request a Quote
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-md border border-gray-200 p-2 text-gray-700"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#EFF6FF] hover:text-[#0056b3]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
