"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- PROPERTY DATA -------------------- */

const PROPERTIES = [
  {
    id: "pachpedi-naka-tower",
    title: "Prime Hospital / Medical Tower – Pachpedi Naka",
    location: "Main road, Pachpedi Naka, Raipur (next to Ganeshi Hospital)",
    size: "Approx 8,800 sq.ft plot • Multi-storey RCC structure ready",
  },
  {
    id: "raipur-3000",
    title: "3,000 sq.ft Construction-Ready Land in Raipur",
    location: "Well-connected location, Raipur",
    size: "Approx 3,000 sq.ft construction potential",
  },
  {
    id: "raigarh-50000",
    title: "Up to 50,000 sq.ft Construction near AIIMS, Raigarh",
    location: "Raigarh",
    size: "Approx 50,000 sq.ft construction potential",
  },
  {
    id: "tatibandh-40000-100000",
    title: "40,000 – 1,00,000 sq.ft Options in Tatibandh",
    location: "Near AIIMS Tatibandh, Raipur",
    size: "40,000 to 1,00,000 sq.ft construction potential",
  },
  {
    id: "swarn-bhumi-60000",
    title: "Around 60,000 sq.ft Construction near Swarn Bhoomi",
    location: "Near Swarn Bhoomi, Raipur",
    size: "Approx 60,000 sq.ft construction potential",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function PropertyCard({ property, index }) {
  const { label, city, title, location, size, details = [] } = property;

  return (
    <article className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge */}
      <div className="absolute right-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-slate-200 ring-1 ring-white/15">
        Option {index + 1}
      </div>

      <div className="p-5 md:p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          {/* <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
            {label} • {city}
          </span> */}
          <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
            Price on Request
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
            {title}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
            Land & Construction Opportunity
          </p>
        </div>

        {/* Highlight box for location & size */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            Key Highlights
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">
              Construction potential:
            </span>{" "}
            {size}
          </p>
        </div>

        {/* Small generic line */}
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
          Suitable for hospital, medical campus or commercial development as per
          your project requirement and planning.
        </p>

        {/* Bullet points (optional, future use) */}
        {details.length > 0 && (
          <ul className="mt-1 space-y-1.5 text-sm text-slate-300 list-disc list-inside">
            {details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your requirement and budget – we&apos;ll share exact location,
            layouts and commercial terms for this option.
          </span>

          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors duration-200"
            style={{ backgroundColor: CTA_COLOR }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = CTA_HOVER;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = CTA_COLOR;
            }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function HospitalListings({ filters }) {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-950 text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Orange aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(245,73,0,0.25) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <div className="mb-6 flex items-center justify-between">
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
        </div>

        {/* Heading */}
        <header className="mb-8 space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900] text-center">
            HOSPITAL • LAND • CONSTRUCTION
          </p>


          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">

          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROPERTIES.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}