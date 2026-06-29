import { useEffect } from "react";

export function Lightbox({ src, alt, caption, onClose }: { src: string; alt: string; caption?: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      style={{ animation: "ejp-fade-up .25s ease-out both" }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        ✕
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-5xl">
        <img src={src} alt={alt} className="max-h-[82vh] w-auto rounded-lg object-contain shadow-2xl" />
        {caption && <figcaption className="mt-3 text-center text-sm text-white/80">{caption}</figcaption>}
      </figure>
    </div>
  );
}
