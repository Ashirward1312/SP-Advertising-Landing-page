"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, MapPin } from "lucide-react";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const HOSTEL_ITEMS = [
  {
    id: "ivy",
    type: "HOSTEL PROPERTY",
    city: "Raipur",
    title: "Hostel available near Ivy",
    location: "Near Ivy Hospital, Pachpedi Naka, Raipur",
  },
  {
    id: "pandri",
    type: "HOSTEL PROPERTY",
    city: "Raipur",
    title: "Hostel available near Pandri",
    location: "Near Pandri, Raipur",
  },
];

function HostelCard({ item, index }) {
  const { type, city, title, location } = item;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line – same style as Stand Alone */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-90"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-orange-400" />
            {type} • {city}
          </span>
          <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
            HOSTEL AVAILABLE
          </span>
        </div>

        {/* Title – simple text, no extra detail */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Details box – sirf location */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            KEY DETAILS
          </p>
          <p className="text-sm text-slate-300 flex gap-1.5 items-start">
            <MapPin className="h-4 w-4 mt-0.5 text-orange-400 shrink-0" />
            <span>
              <span className="font-semibold text-slate-100">Location:</span>{" "}
              {location}
            </span>
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Is{" "}
            <span className="font-semibold text-slate-100">
              hostel property
            </span>{" "}
            ke liye details chahiye ho to enquiry bhejein.
          </span>

          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-white bg-orange-500 shadow-lg shadow-orange-500/30 transition-colors duration-200 hover:bg-orange-400"
          >
            ENQUIRE PROPERTY
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Others() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
       <button
            type="button"
            onClick={() => navigate("/#categories")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>
              BACK TO CATEGORIES
            </span>
          </button>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-orange-400">HOSTEL PROPERTY</span> AVAILABLE
          </h1>
        </div>

        {/* Stand Alone style cards for hostels */}
        <div className="grid gap-6 md:grid-cols-2">
          {HOSTEL_ITEMS.map((item, index) => (
            <HostelCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}