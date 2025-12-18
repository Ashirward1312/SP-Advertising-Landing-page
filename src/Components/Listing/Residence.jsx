"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- RESIDENTIAL DATA (NO IMAGES) -------------------- */

const RESIDENCE_OPTIONS = [
  {
    id: "at-classic",
    project: "AT Classic",
    city: "Raipur",
    title: "AT CLASSIC – 2 BHK READY POSITION",
    location: "AT Classic, Raipur",
    config: "2 BHK – Ready position",
    priceInfo: "Approx ₹55–65 Lakh* (2 BHK)",
    note: "Good for end use and investment in a developed residential belt.",
    statusTag: "2 BHK • Ready Position",
    priceTag: "Approx ₹55–65 Lakh • Price on Request",
  },
  {
    id: "aditya-heights",
    project: "Aditya Heights",
    city: "Raipur",
    title: "ADITYA HEIGHTS – 2 BHK READY POSITION",
    location: "Aditya Heights, Raipur",
    config: "2 BHK – Ready position",
    priceInfo: "Approx ₹55–65 Lakh* (2 BHK)",
    note: "Modern 2 BHK apartments with ready possession – suitable for small families.",
    statusTag: "2 BHK • Ready Position",
    priceTag: "Approx ₹55–65 Lakh • Price on Request",
  },
  {
    id: "vardhman-elements",
    project: "Vardhman Elements",
    city: "Raipur",
    title: "VARDHMAN ELEMENTS – 2 BHK READY POSITION",
    location: "Vardhman Elements, Raipur",
    config: "2 BHK – Ready position",
    priceInfo: "Approx ₹55–65 Lakh* (2 BHK)",
    note: "Well-planned residential project with good connectivity and amenities.",
    statusTag: "2 BHK • Ready Position",
    priceTag: "Approx ₹55–65 Lakh • Price on Request",
  },
  {
    id: "richmond-park-kachna",
    project: "Richmond Park",
    city: "Raipur",
    title: "RICHMOND PARK – 2 BHK READY POSITION (KACHNA)",
    location: "Richmond Park, Kachna, Raipur",
    config: "2 BHK – Ready position",
    priceInfo: "Approx ₹55–65 Lakh* (2 BHK)",
    note: "Located in the Kachna belt – upcoming residential corridor with good future potential.",
    statusTag: "2 BHK • Ready Position",
    priceTag: "Approx ₹55–65 Lakh • Price on Request",
  },

  // ✅ Additional projects – "Residence Available • Price on Request"
  {
    id: "ambience-kachna",
    project: "Ambience",
    city: "Raipur",
    title: "AMBIENCE – RESIDENTIAL APARTMENTS (KACHNA)",
    location: "Ambience, Kachna, Raipur",
    config: "Residential apartments – available",
    priceInfo: "Price on Request",
    note: "Premium residential apartments in the Kachna area – availability as per inventory.",
    statusTag: "Residence Available",
    priceTag: "Price on Request",
  },
  {
    id: "humming-residential",
    project: "Humming Residential",
    city: "Raipur",
    title: "HUMMING RESIDENTIAL – APARTMENTS",
    location: "Humming Residential, Raipur",
    config: "Residential apartments – available",
    priceInfo: "Price on Request",
    note: "Modern residential development – suitable for families and investors.",
    statusTag: "Residence Available",
    priceTag: "Price on Request",
  },
  {
    id: "rishabh-parksyde",
    project: "Rishabh The Parksyde",
    city: "Raipur",
    title: "RISHABH THE PARKSYDE – RESIDENTIAL APARTMENTS",
    location: "Rishabh The Parksyde, Raipur",
    config: "2 & 3 BHK apartments – available as per inventory",
    priceInfo: "Price on Request",
    note: "Lifestyle apartments with park-facing options (subject to availability).",
    statusTag: "Residence Available",
    priceTag: "Price on Request",
  },
  {
    id: "classic-tower-amlidih",
    project: "Classic Tower",
    city: "Raipur",
    title: "CLASSIC TOWER – AMLIDIH",
    location: "Classic Tower, Amlidih, Raipur",
    config: "Residential apartments – available",
    priceInfo: "Price on Request",
    note: "Located in the Amlidih area – convenient access to nearby social infrastructure.",
    statusTag: "Residence Available",
    priceTag: "Price on Request",
  },
  {
    id: "classic-castle-kachna",
    project: "Classic Castle",
    city: "Raipur",
    title: "CLASSIC CASTLE – KACHNA",
    location: "Classic Castle, Kachna, Raipur",
    config: "Residential apartments – available",
    priceInfo: "Price on Request",
    note: "Residential project in Kachna with scope for future appreciation.",
    statusTag: "Residence Available",
    priceTag: "Price on Request",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function ResidenceCard({ item, index }) {
  const { title, city, location, config, priceInfo, note, statusTag, priceTag } =
    item;

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
            Residential • Raipur
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/15">
            {city}
          </span>
          <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
            {statusTag}
          </span>
          <span className="rounded-full bg-[#f97316]/15 px-3 py-1 text-[#fed7aa] ring-1 ring-[#f97316]/40">
            {priceTag}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
            {title}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
            RESIDENTIAL APARTMENTS
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
            <span className="font-semibold text-slate-100">
              Configuration:
            </span>{" "}
            {config}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Price Band:</span>{" "}
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
            Share your{" "}
            <span className="font-semibold text-slate-100">
              budget and preferred project
            </span>{" "}
            – we&apos;ll share exact availability, floor plans and negotiation
            room for these{" "}
            <span className="font-semibold text-slate-100">
              residential options (Price on Request)
            </span>
            .
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
            ENQUIRE RESIDENTIAL
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function ResidentialListings({ filters }) {
  const navigate = useNavigate();

  const properties =
    !filters || !filters.category || filters.category === "residential"
      ? RESIDENCE_OPTIONS
      : [];

  if (!properties.length) {
    return (
      <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm">
            No residential listings match the selected filters right now.
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
            RESIDENTIAL • RAIPUR
          </p>
     
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((item, index) => (
            <ResidenceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}