"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- LAND / PLOT INVESTMENT DATA -------------------- */

const LAND_INVEST_OPTIONS = [
  {
    id: "vip-60000",
    type: "LAND / PLOT INVESTMENT",
    city: "Raipur",
    title: "60,000 SQ.FT LAND INVESTMENT – VIP ROAD, RAIPUR",
    location: "VIP Road, Raipur",
    size: "Approx 60,000 sq.ft",
    note: "Suitable for large commercial, mixed-use or long-term investment holding on VIP Road belt.",
  },
  {
    id: "vip-30000",
    type: "LAND / PLOT INVESTMENT",
    city: "Raipur",
    title: "30,000 SQ.FT LAND INVESTMENT – VIP ROAD, RAIPUR",
    location: "VIP Road, Raipur",
    size: "Approx 30,000 sq.ft",
    note: "Ideal ticket size for branded showroom, office block or mid-sized mixed-use development.",
  },
  {
    id: "kamal-vihar-30000",
    type: "LAND / PLOT INVESTMENT",
    city: "Raipur",
    title: "30,000 SQ.FT LAND INVESTMENT – KAMAL VIHAR, RAIPUR",
    location: "Kamal Vihar area, Raipur",
    size: "Approx 30,000 sq.ft",
    note: "Located in Kamal Vihar planning area – suitable for residential, mixed-use or plotted development.",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function LandInvestCard({ item, index }) {
  const { type, city, title, location, size, note } = item;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-90"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge */}
      <div className="absolute right-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-slate-200 ring-1 ring-white/15">
        OPTION {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
            {type} • {city}
          </span>
          <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
            Investment • Price on Request
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
            LAND / PLOT FOR INVESTMENT
          </p>
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
            <span className="font-semibold text-slate-100">Size:</span> {size}
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
            Share your investment budget and horizon – we&apos;ll share exact
            plots, ownership details and expected returns for these{" "}
            <span className="font-semibold text-slate-100">
              Land / Plot Investment
            </span>{" "}
            options.
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
            ENQUIRE LAND INVESTMENT
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function LandInvestmentListings() {
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
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-8 space-y-3 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            LAND / PLOT INVESTMENT 
          </p>
        </header>
        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {LAND_INVEST_OPTIONS.map((item, index) => (
            <LandInvestCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}