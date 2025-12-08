"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

import L1Img from "../../images/Land 1.jpeg";
import L2Img from "../../images/Land 2.jpeg";
import L3Img from "../../images/Land 3.jpeg";
import L4Img from "../../images/Land 4.jpeg";

// Consistent Orange color for the entire website
const PRIMARY_ORANGE = "#FF8904"; 
const GRADIENT_FROM = "#FF8904";
const GRADIENT_TO = "#ff9b2e";

const LAND_CARDS = [
  {
    id: "pachpedi",
    title: "Land Near Pachpedi Naka",
    locationTag: "Pachpedi Naka, Raipur",
    desc: "Clear-title land parcel in the Pachpedi Naka belt – suitable for farmhouse, low-rise residential or long-term land banking close to the city.",
    image: L1Img,
  },
  {
    id: "tagore",
    title: "Land Near Tagore Nagar",
    locationTag: "Tagore Nagar, Raipur",
    desc: "Strategic land option near Tagore Nagar with access to established residential neighborhoods, social infrastructure and main city conveniences.",
    image: L2Img,
  },
  {
    id: "viproad",
    title: "Land On / Near VIP Road",
    locationTag: "VIP Road, Raipur",
    desc: "Premium visibility land near VIP Road – ideal for commercial, mixed-use or future investment-led development along a known corridor.",
    image: L3Img,
  },
  {
    id: "raipur",
    title: "Raipur Belt – Curated Land Parcels",
    locationTag: "Raipur Region",
    desc: "Select land parcels across key Raipur micro-markets, curated for serious investors looking at clear-title, thesis-led opportunities.",
    image: L4Img,
  },
];

export default function LandListings() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-950 text-slate-100 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Soft orange glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background: `radial-gradient(60% 60% at 50% 0%, ${PRIMARY_ORANGE}20 0%, rgba(0,0,0,0) 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back button (Improved style and consistency) */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/20 bg-black/70 px-4 py-2 text-sm font-medium text-slate-200 shadow-md transition-all duration-200 hover:ring-white/50 hover:bg-black/80"
          >
            {/* SVG for a cleaner icon */}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-12 text-left">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]" style={{ color: PRIMARY_ORANGE }}>
            LAND • RAIPUR BELT
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Premium Land Parcels In & Around Raipur
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-300 leading-relaxed">
            Curated, clear-title land options across key Raipur micro-markets like
            Pachpedi Naka, Tagore Nagar, VIP Road and select emerging locations –
            suitable for end-use as well as long-term investment.
          </p>
        </header>

        {/* Cards grid (Enhanced Shadow and Hover) */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {LAND_CARDS.map((land) => (
            <article
              key={land.id}
              className="group rounded-2xl bg-slate-900 ring-1 ring-slate-800/80 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.9)] transition-all duration-300 hover:ring-2 hover:ring-[#FF8904] hover:shadow-[0_25px_70px_rgba(255,137,4,0.15)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={land.image}
                  alt={land.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-black/80 px-3.5 py-1.5 text-xs font-semibold text-slate-100 ring-1 ring-white/20">
                    <span className="h-1.5 w-1.5 rounded-full mr-1" style={{ backgroundColor: PRIMARY_ORANGE }} />
                    {land.locationTag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-200 group-hover:text-[#FF8904]">
                  {land.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {land.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-6">
                  {/* CTA with Gradient (Consistent Style) */}
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03]"
                    style={{ 
                        backgroundImage: `linear-gradient(to right, ${GRADIENT_FROM}, ${GRADIENT_TO})`,
                    }}
                  >
                    Contact about this land
                  </a>
                  <span className="text-xs text-slate-400">
                    Price & details on request
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