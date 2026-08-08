"use client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ import motion

// ✅ fadeUp variants (same)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- UPDATED JV DATA -------------------- */
// Old Option 1 (jv-saddu-avinash-cosmos) REMOVED
// Old Option 3 (jv-near-ghadi-chowk) REMOVED
// Old Option 2 (jv-near-zora-mall) KEPT and updated with size 5–7 Acres
// 7 new properties ADDED as requested

const OPPORTUNITIES = [
  {
    // Existing Option 2 – kept and updated size to 5–7 Acres
    id: "jv-near-zora-mall",
    dealType: "JV",
    city: "Raipur",
    title: "TOWNSHIP LAND – NEAR ZORA MALL",
    location: "Near Zora Mall, Raipur",
    size: "5–7 Acres",
    dealValue: "Price / Terms on Discussion",
    extra: "Commercial potential: ~10,000 sq.ft commercial",
  },
  {
    id: "jv-vip-road-raipur",
    dealType: "JV",
    city: "Raipur",
    title: "3, 5 AND 7 ACRE JV LAND NEAR VIP ROAD, RAIPUR",
    location: "Near VIP Road, Raipur",
    size: "3, 5 and 7 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-baloda-bazaar",
    dealType: "JV",
    city: "Raipur",
    title: "10–25 ACRE LAND NEAR BALODA BAZAAR",
    location: "Near Baloda Bazaar",
    size: "10–25 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-persulidih-tekari",
    dealType: "PARTNERSHIP",
    city: "Raipur",
    title: "7–10 ACRE PARTNERSHIP LAND, PERSULIDIH / TEKARI BELT",
    location: "Persulidih / Tekari Belt",
    size: "7–10 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-mm-fun-city",
    dealType: "JV",
    city: "Raipur",
    title: "8 ACRE LAND NEAR MM FUN CITY",
    location: "Near MM Fun City, Raipur",
    size: "8 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-70acre-durg",
    dealType: "JV",
    city: "Durg",
    title: "70 ACRE JV LAND NEAR DURG",
    location: "Near Durg",
    size: "70 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-50acre-dhamdha",
    dealType: "JV",
    city: "Raipur",
    title: "50 ACRE JV LAND, DHAMDHA",
    location: "Dhamdha",
    size: "50 Acres",
    dealValue: "Price on Request",
    extra: "",
  },
  {
    id: "jv-commercial-kamal-vihar",
    dealType: "COMMERCIAL",
    city: "Raipur",
    title: "COMMERCIAL PROPERTY, KAMAL VIHAR / NEAR NEW DHAMTARI ROAD",
    location: "Kamal Vihar / Near New Dhamtari Road, Raipur",
    size: "Price on Request",
    dealValue: "Price on Request",
    extra: "",
  },
];

/* -------------------- CARD COMPONENT (DESIGN SAME) -------------------- */
function OpportunityCard({ item, index }) {
  const { dealType, city, title, location, size, dealValue, extra, id } = item;
  const isJV = dealType === "JV";
  const isPartnership = dealType === "PARTNERSHIP";
  const isCommercial = dealType === "COMMERCIAL";

  const badgeClass = isJV
    ? "bg-sky-500/95 ring-sky-300/80 text-black"
    : isPartnership
    ? "bg-emerald-500/95 ring-emerald-300/80 text-black"
    : "bg-amber-500/95 ring-amber-300/80 text-black";

  const badgeLabel = isJV
    ? "JV Opportunity"
    : isPartnership
    ? "Partnership"
    : "Commercial";

  const typeLabel = isJV
    ? "Joint Venture Land"
    : isPartnership
    ? "Partnership Land"
    : "Commercial Property";

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
            {city}
          </span>

          <span className={`rounded-full px-3 py-1 ring-1 ${badgeClass}`}>
            {badgeLabel}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
            {title}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
            {typeLabel}
          </p>
        </div>

        {/* Highlight box */}
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

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">
              {isJV ? "Deal Value:" : "Price:"}
            </span>{" "}
            {dealValue}
          </p>

          {extra ? (
            <p className="text-xs text-slate-400 pt-1">
              <span className="font-semibold text-slate-100">Note:</span> {extra}
            </p>
          ) : null}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your profile, project plan and expected JV structure – we&apos;ll
            connect you for detailed discussion on{" "}
            <span className="font-semibold text-slate-100">JV terms</span>.
          </span>

          <a
            href={`/contact?ref=${encodeURIComponent(id)}`}
            className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors duration-200"
            style={{ backgroundColor: CTA_COLOR }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = CTA_HOVER;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = CTA_COLOR;
            }}
          >
            Discuss JV
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */
export default function JVListings() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Joint Ventures Property Lands in Raipur | Mahesh Ventures";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Explore joint venture (JV) township land and large parcel JV opportunities in Raipur with Mahesh Ventures. Curated options near VIP Road, Baloda Bazaar, MM Fun City, Durg, Dhamdha, and Kamal Vihar."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "joint venture land raipur, JV township land raipur, vip road JV land, baloda bazaar land, mm fun city land, durg JV land, dhamdha JV land, kamal vihar commercial, Mahesh Ventures JV"
      );
  }, []);

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
            onClick={() => navigate("/categories")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </button>
        </div>

        {/* Heading with motion (same) */}
        <header className="mb-8 space-y-3 text-center flex flex-col items-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            JOINT VENTURE PROPERTY{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              LAND &amp; COMMERCIAL IN RAIPUR (C.G)
            </span>
          </motion.h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            JV (Joint Venture) is an{" "}
            <span className="font-semibold text-slate-100">
              agreement and mutual understanding
            </span>{" "}
            between the client and the land owner to develop a project together
            and share profits, revenue or developed area as per agreed terms.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((item, index) => (
            <OpportunityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}