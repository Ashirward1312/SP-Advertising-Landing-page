"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- MALL JV DATA -------------------- */

const MALL_OPPORTUNITIES = [
  {
    id: "ambuja-mall-jv",
    dealType: "JV",
    city: "Raipur",
    title: "Malls  – Near Ambuja",
    location: "Near Ambuja Mall, Raipur",
    size: "Size as per project plan (JV basis)",
  },
  {
    id: "kamal-vihar-mall-jv",
    dealType: "JV",
    city: "Raipur",
    title: "Malls – Near Kamal Vihar",
    location: "Near Kamal Vihar, Raipur",
    size: "Size as per project plan (JV basis)",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function MallCard({ item, index }) {
  const { dealType, city, title, location, size } = item;
  const isJV = dealType === "JV";

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
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

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
            Mall  • {city}
          </span>

          {isJV && (
            <span className="rounded-full bg-sky-500/95 px-3 py-1 text-black ring-1 ring-sky-300/80">
              JV Opportunity
            </span>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Simple details box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            Key Details
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Size:</span> {size}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your profile and mall concept – we&apos;ll help structure the JV
            with the land owner and share detailed terms.
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
            Discuss Mall JV
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function MallsListings() {
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
            MALLS • RETAIL • JOINT VENTURE
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase">
            MALLS &  JV OPPORTUNITIES – RAIPUR
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            These are{" "}
            <span className="font-semibold text-slate-100">
              Joint Venture (JV)
            </span>{" "}
            opportunities for mall / retail development near Ambuja and near
            Kamal Vihar. JV is an agreement and mutual understanding between the
            client and the land owner to develop a project together and share
            profits, revenue or developed area as per agreed terms.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {MALL_OPPORTUNITIES.map((item, index) => (
            <MallCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}