"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- STAND ALONE DATA -------------------- */

const STANDALONE_ITEMS = [
  {
    id: "standalone-colors-mall",
    type: "STAND ALONE COMMERCIAL BUILDING",
    city: "Raipur",
    deal: "SALE",
    title: "Standalone Commercial Building – Approx 40,000 sq ft Construction",
    location: "Near Colors Mall, Raipur",
    priceInfo: "For Sale • Approx 40,000 sq ft constructed area. Pricing on request.",
    note: "On sell near Colors Mall – suitable for showroom, corporate office, or multi-brand commercial use in a high visibility belt.",
  },
  {
    id: "standalone-mahadev-ghat",
    type: "STAND ALONE BUILDING",
    city: "Raipur",
    deal: "SALE",
    title: "Standalone Building – Approx 6,000–7,000 sq ft (Approx)",
    location: "Near Mahadev Ghat, Raipur",
    priceInfo: "For Sale • Approx 6,000–7,000 sq ft constructed area. Pricing on request.",
    note: "On sell near Mahadev Ghat – ideal for own use or investment as a mid-size independent building.",
  },
  {
    id: "standalone-ivy-hotel-rent",
    type: "STAND ALONE COMMERCIAL / RETAIL",
    city: "Raipur",
    deal: "RENT",
    title: "Standalone Commercial Space on Rent – Near Ivy Hotel",
    location: "Near Ivy Hotel, Pachpedi Naka, Raipur",
    priceInfo: "On Rent • Multiple floor / unit options possible. Rent on request.",
    note: "On rent near Ivy Hotel, Pachpedi Naka – suitable for clinic, diagnostics, office, or retail with good traffic.",
  },
  {
    id: "standalone-aiims-rent",
    type: "STAND ALONE COMMERCIAL / MEDICAL SUPPORT",
    city: "Raipur",
    deal: "RENT",
    title: "Standalone Commercial / Retail on Rent – Near AIIMS",
    location: "Near AIIMS, Raipur",
    priceInfo: "On Rent • Ideal for medical-support services, retail, or office use. Rent on request.",
    note: "Near AIIMS on rent – strong catchment of students, staff, and patients in the immediate vicinity.",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function StandAloneCard({ item, index }) {
  const { type, city, title, location, priceInfo, note, deal } = item;

  const dealIsRent = deal === "RENT";
  const dealLabel = dealIsRent ? "ON RENT" : "FOR SALE";
  const dealBadgeClass = dealIsRent
    ? "bg-sky-500/95 ring-sky-300/80"
    : "bg-emerald-500/95 ring-emerald-300/80";

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-90"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />



      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
            {type} • {city}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-black ring-1 ${dealBadgeClass}`}
          >
            STAND ALONE • {dealLabel}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Details box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            KEY DETAILS
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Deal:</span>{" "}
            {priceInfo}
          </p>
          {note && (
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-100">Note:</span> {note}
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share whether you are looking for{" "}
            <span className="font-semibold text-slate-100">
              sale or rent
            </span>{" "}
            – we&apos;ll share exact availability, floor plans, and deal
            structure for this{" "}
            <span className="font-semibold text-slate-100">
              Stand Alone
            </span>{" "}
            option.
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
            ENQUIRE STAND ALONE
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function StandAloneListings() {
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
        <header className="mb-8 space-y-3 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            STAND ALONE
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {STANDALONE_ITEMS.map((item, index) => (
            <StandAloneCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}