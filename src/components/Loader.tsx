import { useEffect, useState } from "react";
import { company } from "@/data/company";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setProgress((p) => Math.min(100, p + 4)), 55);
    const fadeT = setTimeout(() => setFading(true), 1500);
    const t = setTimeout(() => setVisible(false), 2100);
    return () => { clearInterval(i); clearTimeout(t); clearTimeout(fadeT); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500"
      style={{ background: "linear-gradient(135deg, #003d82 0%, #0056b3 45%, #1a73c8 100%)", opacity: fading ? 0 : 1 }}
    >
      {Array.from({ length: 18 }).map((_, i) => {
        const size = 30 + ((i * 37) % 160);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size, height: size,
              background: "rgba(255,255,255,0.06)",
              top: `${(i * 53) % 100}%`,
              left: `${(i * 71) % 100}%`,
              animation: `ejp-float ${3 + (i % 4)}s ease-in-out ${(i * 0.2) % 2}s infinite`,
            }}
          />
        );
      })}

      <span className="absolute rounded-full border" style={{ width: 320, height: 320, borderColor: "rgba(255,255,255,0.12)", animation: "ejp-pulse-ring 2.5s ease-in-out infinite" }} />
      <span className="absolute rounded-full border" style={{ width: 220, height: 220, borderColor: "rgba(255,255,255,0.18)", animation: "ejp-pulse-ring 2s ease-in-out 0.3s infinite" }} />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <div
          className="rounded-3xl p-6 backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.20)",
          }}
        >
          <img src={company.logo} alt="EJP" className="h-[100px] w-[100px] object-contain" />
        </div>
        <div className="text-center">
          <div className="text-white" style={{ fontSize: 18, fontWeight: 700, letterSpacing: ".5px" }}>{company.name}</div>
          <div className="italic" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>"{company.tagline}"</div>
        </div>
        <div className="h-[3px] w-[200px] overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div className="h-full transition-all" style={{ width: `${progress}%`, background: "linear-gradient(90deg, rgba(255,255,255,0.6), white)" }} />
        </div>
        <div className="flex gap-2">
          {[0, 0.2, 0.4].map((d, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full" style={{ background: "rgba(255,255,255,.5)", animation: `ejp-pulse-dot 1.2s ease-in-out ${d}s infinite` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
