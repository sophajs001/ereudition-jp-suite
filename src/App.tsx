import { BrowserRouter, Route as RRoute, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { RouteView } from "@/lib/router-shim";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import { Route as IndexRoute } from "./routes/index";
import { Route as AboutRoute } from "./routes/about";
import { Route as ServicesRoute } from "./routes/services";
import { Route as ServiceSlugRoute } from "./routes/services.$slug";
import { Route as PropertiesRoute } from "./routes/properties";
import { Route as PropertySlugRoute } from "./routes/properties.$slug";
import { Route as PortfolioRoute } from "./routes/portfolio";
import { Route as PortfolioSlugRoute } from "./routes/portfolio.$slug";
import { Route as BlogRoute } from "./routes/blog";
import { Route as BlogSlugRoute } from "./routes/blog.$slug";
import { Route as ContactRoute } from "./routes/contact";
import { Route as PrivacyRoute } from "./routes/privacy";
import { Route as TermsRoute } from "./routes/terms";

// Convert TanStack-style "$slug" path segments to react-router ":slug".
const toRR = (p: string) => p.replace(/\$(\w+)/g, ":$1");

const routes = [
  IndexRoute,
  AboutRoute,
  ServicesRoute,
  ServiceSlugRoute,
  PropertiesRoute,
  PropertySlugRoute,
  PortfolioRoute,
  PortfolioSlugRoute,
  BlogRoute,
  BlogSlugRoute,
  ContactRoute,
  PrivacyRoute,
  TermsRoute,
];

function RevealOnScroll() {
  const location = useLocation();
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const apply = () => {
      const main = document.querySelector("main");
      if (!main) return;
      const targets = main.querySelectorAll<HTMLElement>(
        "section > *:not([data-reveal-skip]), [data-reveal]",
      );
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("ejp-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      targets.forEach((el) => {
        if (el.classList.contains("ejp-in") || el.dataset.revealInit === "1") return;
        el.dataset.revealInit = "1";
        el.classList.add("ejp-reveal-item");
        io.observe(el);
      });
    };
    const t = setTimeout(apply, 80);
    return () => clearTimeout(t);
  }, [location.pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-6xl font-bold" style={{ color: "#0056b3" }}>
        404
      </h1>
      <p className="mt-3 text-sm text-gray-500">Page not found.</p>
      <a
        href="/"
        className="mt-6 inline-flex rounded-md px-4 py-2 text-sm font-semibold text-white"
        style={{ background: "#0056b3" }}
      >
        Go home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RevealOnScroll />
      <Loader />
      <Navbar />
      <main className="min-h-[60vh]">
        <Routes>
          {routes.map((r) => (
            <RRoute
              key={r.path}
              path={toRR(r.path)}
              element={<RouteView route={r} />}
            />
          ))}
          <RRoute path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
