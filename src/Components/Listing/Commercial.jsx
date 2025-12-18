"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- COMMERCIAL DATA (NO IMAGES) -------------------- */

const COMMERCIAL_OPTIONS = [
  // 400–15,000 sq.ft belt: Jai Stambh -> Kamal Vihar
  {
    id: "jai-stambh",
    area: "Central Raipur",
    title: "Offices & Showrooms – Near Jai Stambh Chowk",
    location: "Near Jai Stambh Chowk, Raipur",
    size: "Approx 400 to 15,000 sq.ft (ready position units)",
    note: "Central Raipur – suitable for offices, consultancy and branded retail.",
  },
  {
    id: "vidhan-sabha",
    area: "Institutional Belt",
    title: "Commercial Spaces – Near Vidhan Sabha",
    location: "Vidhan Sabha Road, Raipur",
    size: "Approx 400 to 15,000 sq.ft (shops & offices)",
    note: "Institutional corridor – good for clinics, offices and showrooms.",
  },
  {
    id: "shankar-nagar",
    area: "Premium Residential Belt",
    title: "Commercial Spaces – Near Shankar Nagar",
    location: "Near Shankar Nagar, Raipur",
    size: "Approx 400 to 15,000 sq.ft (shops & offices)",
    note: "Strong residential catchment – ideal for everyday retail and services.",
  },
  {
    id: "kamal-vihar-400-15000",
    area: "Kamal Vihar Planning Area",
    title: "Commercial Spaces – Near Kamal Vihar",
    location: "Near Kamal Vihar, Raipur",
    size: "Approx 400 to 15,000 sq.ft commercial spaces",
    note: "Suitable for showrooms, mid-size offices and commercial blocks in a developing zone.",
  },

  // Magneto / VIP / Tatibandh / Pachpedi – rent or sale
  {
    id: "magneto-mall",
    area: "Magneto Belt",
    title: "Commercial Spaces – Near Magneto Mall",
    location: "Near Magneto Mall, Raipur",
    size: "Various commercial sizes • Rent / Sale available",
    note: "High footfall zone with strong brand visibility potential.",
  },
  {
    id: "vip-chowk",
    area: "VIP Corridor",
    title: "Commercial Spaces – VIP Chowk",
    location: "VIP Chowk area, Raipur",
    size: "Various commercial sizes • Rent / Sale available",
    note: "Airport-side connectivity – ideal for corporate and high-end retail.",
  },
  {
    id: "tatibandh",
    area: "Transport / Commercial Hub",
    title: "Commercial Spaces – Tatibandh",
    location: "Tatibandh, Raipur",
    size: "Various commercial sizes • Rent / Sale available",
    note: "Good for logistics offices, showrooms and commercial godowns.",
  },
  {
    id: "pachpedi-naka",
    area: "Hospital / Mixed Use Belt",
    title: "Commercial Spaces – Pachpedi Naka",
    location: "Pachpedi Naka, Raipur",
    size: "Various commercial sizes • Rent / Sale available",
    note: "Surrounded by hospitals and dense residential pockets – suitable for medical & support retail.",
  },

  // Towers / complexes
  {
    id: "at-tiara",
    area: "Premium Commercial Tower",
    title: "AT TIARA – Offices & Retail",
    location: "AT Tiara, Raipur",
    size: "Office & retail units – sizes as per requirement",
    note: "Premium commercial tower – also available on rent and for sale. Price on request.",
  },
  {
    id: "humming-sanjeeva-promenade",
    area: "Premium Commercial Promenade",
    title: "HUMMING SANJEEVA PROMENADE – Commercial Spaces",
    location: "Humming Sanjeeva Promenade, Raipur",
    size: "Commercial units – multiple sizes • Rent / Sale",
    note: "Modern promenade – suitable for showrooms, restaurants and branded outlets.",
  },
  {
    id: "vb-tower",
    area: "Premium Tower",
    title: "VB TOWER – Offices & Showrooms",
    location: "VB Tower, Raipur",
    size: "Office / showroom spaces – sizes as per layout",
    note: "High-visibility tower – also available for investment, rent and sale. Price on request.",
  },
  {
    id: "anand-arcade",
    area: "Established Commercial Complex",
    title: "ANAND ARCADE – Commercial Spaces",
    location: "Anand Arcade, Raipur",
    size: "Shops & offices – sizes as per requirement",
    note: "Established commercial complex – spaces available on rent as well as for sale.",
  },
];

/* -------------------- MAIN COMPONENT -------------------- */

export default function CommercialListings({ filters }) {
  const navigate = useNavigate();

  const properties =
    !filters || !filters.category || filters.category === "commercial"
      ? COMMERCIAL_OPTIONS
      : [];

  if (!properties.length) {
    return (
      <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm">
            No commercial listings in Raipur match the selected filters right
            now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 text-slate-100 pt-24 pb-12 md:pt-28 md:pb-16">
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
        <header className="mb-8 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            COMMERCIAL • OFFICES • SHOPS • TOWERS
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((prop, index) => (
            <article
              key={prop.id}
              className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden"
            >
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
                    Commercial • Raipur
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/15">
                    {prop.area}
                  </span>
                  <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
                    Rent &amp; Sale Available
                  </span>
                  <span className="rounded-full bg-[#f97316]/15 px-3 py-1 text-[#fed7aa] ring-1 ring-[#f97316]/40">
                    Price on Request
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    {prop.title}
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
                    COMMERCIAL OFFICES / SHOPS / TOWERS
                  </p>
                </div>

                {/* Simple details */}
                <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                    KEY DETAILS
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">
                      Location:
                    </span>{" "}
                    {prop.location}
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">
                      Size:
                    </span>{" "}
                    {prop.size}
                  </p>
                  {prop.note && (
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-100">
                        Note:
                      </span>{" "}
                      {prop.note}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs text-slate-400 sm:flex-1">
                    Share your size, budget and preferred micro‑market – we&apos;ll
                    share exact units, floor options and detailed{" "}
                    <span className="font-semibold text-slate-100">
                      rent / sale • Price on Request
                    </span>{" "}
                    proposals for these commercial spaces.
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
                    ENQUIRE COMMERCIAL
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}