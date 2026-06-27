import { useState } from "react";
import { company } from "@/data/company";

type Property = { title: string; location?: string; price?: string };

export function BookATourForm({ property }: { property?: Property }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    party: "1",
    propertyName: property?.title || "",
    notes: "",
  });
  const upd = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Erudition JP, I'd like to book a property tour.",
      "",
      `Property: ${form.propertyName || "Not specified"}`,
      property?.location ? `Location: ${property.location}` : "",
      property?.price ? `Price: ${property.price}` : "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Number of guests: ${form.party}`,
      form.notes ? `\nNotes: ${form.notes}` : "",
    ].filter(Boolean);
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
  };

  const input =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/15";
  const label = "text-xs font-semibold text-gray-700";

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <div
            className="text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: "#0056b3" }}
          >
            Book a Tour
          </div>
          <h3 className="mt-1 text-xl font-bold">Schedule a viewing</h3>
        </div>
        <div
          className="hidden h-12 w-12 items-center justify-center rounded-2xl text-xl md:flex"
          style={{ background: "#EFF6FF", color: "#0056b3" }}
        >
          🏠
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className={label}>Property of interest</label>
          <input
            className={input}
            value={form.propertyName}
            onChange={(e) => upd("propertyName", e.target.value)}
            placeholder="e.g. 3-Bedroom Bungalow, Ushafa"
            required
          />
        </div>
        <div>
          <label className={label}>Full name</label>
          <input className={input} required value={form.name} onChange={(e) => upd("name", e.target.value)} />
        </div>
        <div>
          <label className={label}>Phone number</label>
          <input className={input} required value={form.phone} onChange={(e) => upd("phone", e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className={label}>Email (optional)</label>
          <input type="email" className={input} value={form.email} onChange={(e) => upd("email", e.target.value)} />
        </div>
        <div>
          <label className={label}>Preferred date</label>
          <input type="date" className={input} required value={form.date} onChange={(e) => upd("date", e.target.value)} />
        </div>
        <div>
          <label className={label}>Preferred time</label>
          <input type="time" className={input} required value={form.time} onChange={(e) => upd("time", e.target.value)} />
        </div>
        <div>
          <label className={label}>Number of guests</label>
          <select className={input} value={form.party} onChange={(e) => upd("party", e.target.value)}>
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={label}>Anything we should know?</label>
          <textarea rows={3} className={input} value={form.notes} onChange={(e) => upd("notes", e.target.value)} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-95"
        style={{ background: "linear-gradient(135deg, #003d82, #0056b3)" }}
      >
        Send Booking on WhatsApp
        <span aria-hidden>→</span>
      </button>
      <p className="mt-3 text-center text-[11px] text-gray-500">
        Your details open in WhatsApp so our team can confirm your tour instantly.
      </p>
    </form>
  );
}
