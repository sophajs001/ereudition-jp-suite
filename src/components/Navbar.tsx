import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="text-white" style={{ background: "#0056b3" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden sm:inline">📞 {company.phones[0]}</span>
            <span>✉️ {company.email}</span>
          </div>
          <span className="hidden italic opacity-80 md:inline">"{company.tagline}"</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={company.logo} alt="Erudition JP" className="h-11 w-11 object-contain" />
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
          href={waLink("Hello Erudition JP, I'd like to request a quote.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 lg:inline-flex"
          style={{ background: "#0056b3" }}
        >
          Request a Quote
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md lg:hidden"
          style={{ background: open ? "rgba(255,255,255,0.15)" : "#0056b3" }}
        >
          <span className="relative block h-4 w-5">
            <span
              className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-all duration-300"
              style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white transition-all duration-300"
              style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile fullscreen drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40 transition-opacity duration-300"
          style={{ opacity: open ? 1 : 0 }}
        />
        <aside
          className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto text-white shadow-2xl transition-transform duration-300"
          style={{
            transform: open ? "translateX(0)" : "translateX(100%)",
            background:
              "linear-gradient(160deg, #003d82 0%, #0056b3 55%, #1a73c8 100%)",
          }}
        >
          <div className="flex items-center gap-3 px-6 pb-4 pt-6">
            <img src={company.logo} alt="" className="h-11 w-11 object-contain" />
            <div className="leading-tight">
              <div className="text-base font-bold">Erudition JP</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Enterprise</div>
            </div>
          </div>

          <nav className="mt-2 flex-1 px-4">
            <ul className="space-y-1">
              {nav.map((n, i) => (
                <li
                  key={n.to}
                  className="ejp-fade-up"
                  style={{ animationDelay: `${0.05 + i * 0.04}s` }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-white/90 transition hover:bg-white/10"
                    activeProps={{
                      className:
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold text-white bg-white/15",
                    }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    <span>{n.label}</span>
                    <span className="text-white/50">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-white/15 px-6 py-6">
            <a
              href={waLink(`Hello Erudition JP, I'd like to chat. (${company.phones[0]})`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold shadow-md"
              style={{ color: "#0056b3" }}
            >
              <span>💬</span> Chat on WhatsApp
            </a>
            <a
              href={`tel:${company.phones[0]}`}
              className="block text-center text-sm text-white/80"
            >
              📞 {company.phones[0]}
            </a>
            <div className="text-center text-[11px] text-white/55">
              {company.address}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
