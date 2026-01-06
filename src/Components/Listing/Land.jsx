"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

// Hospital jaisa color theme
const PRIMARY_ORANGE = "#f54900";   // BRAND.base
const GRADIENT_FROM = "#f54900";    // BRAND.base
const GRADIENT_TO = "#ff9b2e";      // BRAND.soft

const LAND_CARDS = [
  {
    id: "vip-3000-6000",
    title: "3,000 – 6,000 sq.ft Land – VIP Road Belt",
    locationTag: "VIP Road, Raipur",
    size: "Approx 3,000 – 6,000 sq.ft plots available",
  },
  {
    id: "magneto-3000-6000",
    title: "3,000 – 6,000 sq.ft Land – Near Magneto",
    locationTag: "Near Magneto Mall, Raipur",
    size: "Approx 3,000 – 6,000 sq.ft plots available",
  },
  {
    id: "sayaji-3000-6000",
    title: "3,000 – 6,000 sq.ft Land – Near Sayaji",
    locationTag: "Near Sayaji, Raipur",
    size: "Approx 3,000 – 6,000 sq.ft plots available",
  },
  {
    id: "pachpedi",
    title: "Land Near Pachpedi Naka",
    locationTag: "Pachpedi Naka, Raipur",
    size: "Size as per requirement",
  },
  {
    id: "tagore",
    title: "Land Near Tagore Nagar",
    locationTag: "Tagore Nagar, Raipur",
    size: "Size as per requirement",
  },
];

export default function LandListings() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-950 text-slate-100 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Soft orange glow – hospital jaise tone */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background: `radial-gradient(60% 60% at 50% 0%, ${PRIMARY_ORANGE}20 0%, rgba(0,0,0,0) 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <div className="mb-8 flex items-center justify-between">
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
        <header className="mb-12 text-center">
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            PREMIUM LUXURY PLOTS IN  RAIPUR 
          </h1>
        </header>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {LAND_CARDS.map((land, index) => (
            <article
              key={land.id}
              className="group rounded-2xl bg-slate-900/95 ring-1 ring-slate-800/80 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.9)] transition-all duration-300 hover:ring-2 hover:ring-[#f97316] hover:shadow-[0_25px_70px_rgba(249,115,22,0.25)]"
            >
              {/* Top small accent line + option badge */}
              <div className="flex items-center justify-between px-6 pt-4">
                <div
                  className="h-[3px] w-24 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${GRADIENT_FROM}, ${GRADIENT_TO}, transparent)`,
                  }}
                />
                <span className="rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold text-slate-200 ring-1 ring-white/10">
                  Option {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-7 sm:pt-5 space-y-4">
                {/* Location tag */}
                <span className="inline-flex items-center rounded-full bg-black/80 px-3.5 py-1.5 text-[11px] font-semibold text-slate-100 ring-1 ring-white/20">
                  <span
                    className="h-1.5 w-1.5 rounded-full mr-1.5"
                    style={{ backgroundColor: PRIMARY_ORANGE }}
                  />
                  {land.locationTag}
                </span>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-200 group-hover:text-[#f54900]">
                  {land.title}
                </h2>

                {/* Simple details */}
                <div className="mt-2 space-y-1.5 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">
                      Location:
                    </span>{" "}
                    {land.locationTag}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-100">
                      Size / Range:
                    </span>{" "}
                    {land.size}
                  </p>
                </div>

                {/* CTA row */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${GRADIENT_FROM}, ${GRADIENT_TO})`,
                    }}
                  >
                    Contact about this land
                  </a>
                  <span className="text-xs text-slate-400 text-right">
                    Exact pricing & layout
                    <br />
                    shared on request
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}