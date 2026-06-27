import { waLink } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello Erudition JP — I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-pulse group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7">
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.85c.14.18 1.95 2.98 4.72 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.74.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.06-.11-.25-.18-.52-.32zM16.02 4C9.39 4 4 9.4 4 16.04c0 2.35.68 4.54 1.85 6.39L4 28l5.74-1.81a11.98 11.98 0 0 0 6.28 1.74h.01c6.63 0 12.02-5.4 12.02-12.04C28.05 9.4 22.66 4 16.03 4zm0 21.92h-.01a9.92 9.92 0 0 1-5.07-1.39l-.36-.22-3.41 1.08 1.1-3.33-.24-.34a9.95 9.95 0 1 1 17.97-5.69c0 5.49-4.46 9.95-9.98 9.95z"/>
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:block group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
