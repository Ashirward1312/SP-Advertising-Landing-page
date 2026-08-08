"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ motion import

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

/* -------------------- SUBSECTION DATA -------------------- */

// PRE-RENTED
const PRE_RENTED_ITEMS = [
  {
    id: "pre-rented-1",
    title: "Pre-Rented Commercial Property",
    location: "Raipur",
    details: [
      { label: "Price", value: "₹1.55 Cr" },
      { label: "Rental", value: "₹70,000 per month" },
      { label: "Agreement", value: "9 Years" },
    ],
    badge: "PRE-RENTED",
    badgeClass: "bg-emerald-500/95 ring-emerald-300/80 text-black",
  },
  {
    id: "pre-rented-warehouse",
    title: "Pre-Rented Warehouse",
    location: "Raipur",
    details: [
      { label: "Price", value: "₹4.25 Cr" },
      { label: "Rent", value: "₹2.25 Lac per month" },
      { label: "Agreement", value: "4 Years" },
      { label: "Land Size", value: "15,200 Sq. Ft." },
      { label: "Construction", value: "1,200 Sq. Ft." },
    ],
    badge: "PRE-RENTED • WAREHOUSE",
    badgeClass: "bg-emerald-500/95 ring-emerald-300/80 text-black",
  },
];

// PRE-LAUNCH
const PRE_LAUNCH_ITEMS = [
  {
    id: "pre-launch-naya-raipur",
    title: "Premium Residential Project Near Naya Raipur",
    location: "Near Naya Raipur",
    details: [{ label: "Plot Size", value: "5,000–10,000 Sq. Ft." }],
    badge: "PRE-LAUNCH",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "pre-launch-daldal-seoni",
    title: "Near Daldal Seoni, Mowa | Residential Plotting",
    location: "Near Daldal Seoni, Mowa, Raipur",
    details: [],
    badge: "PRE-LAUNCH",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
];

// EOI
const EOI_ITEMS = [
  {
    id: "eoi-daldal-seoni",
    title: "Near Daldal Seoni, Mowa | Residential Plotting",
    location: "Near Daldal Seoni, Mowa, Raipur",
    details: [],
    badge: "EOI",
    badgeClass: "bg-amber-500/95 ring-amber-300/80 text-black",
  },
];

// RENT
const RENT_ITEMS = [
  {
    id: "rent-pandri",
    title: "Land in Pandri",
    location: "Pandri, Raipur",
    details: [{ label: "Price", value: "₹1,800 per Sq. Ft." }],
    badge: "RENT",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "rent-ambuja",
    title: "Property Near Ambuja",
    location: "Near Ambuja, Raipur",
    details: [{ label: "Size", value: "6,000 Sq. Ft." }],
    badge: "RENT",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "rent-telibandha",
    title: "Telibandha",
    location: "Telibandha, Raipur",
    details: [
      { label: "Status", value: "Ready Possession" },
      { label: "Approx. Size", value: "50,000 Sq. Ft." },
    ],
    badge: "RENT",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "rent-ambuja-mall",
    title: "Property Near Ambuja Mall",
    location: "Near Ambuja Mall, Raipur",
    details: [],
    badge: "RENT",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "rent-jaistambh-chowk",
    title: "Near Jaistambh Chowk | Residential",
    location: "Near Jaistambh Chowk, Raipur",
    details: [],
    badge: "RENT • RESIDENTIAL",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
  {
    id: "rent-vidhan-sabha",
    title: "Commercial Project | Vidhan Sabha Road",
    location: "Vidhan Sabha Road, Raipur",
    details: [],
    badge: "RENT • COMMERCIAL",
    badgeClass: "bg-sky-500/95 ring-sky-300/80 text-black",
  },
];

// ROI
const ROI_ITEMS = [
  {
    id: "roi-pandri",
    title: "Land in Pandri",
    location: "Pandri, Raipur",
    details: [{ label: "Price", value: "₹1,800 per Sq. Ft." }],
    badge: "ROI",
    badgeClass: "bg-violet-500/95 ring-violet-300/80 text-white",
  },
  {
    id: "roi-pachpedi-naka",
    title: "Land in Pachpedi Naka",
    location: "Pachpedi Naka, Raipur",
    details: [{ label: "Size", value: "6,000 Sq. Ft." }],
    badge: "ROI",
    badgeClass: "bg-violet-500/95 ring-violet-300/80 text-white",
  },
];

// UNDER CONSTRUCTION / BTS DEALS
const BTS_ITEMS = [
  {
    id: "bts-pandri",
    title: "Land in Pandri",
    location: "Pandri, Raipur",
    details: [{ label: "Price", value: "₹1,800 per Sq. Ft." }],
    badge: "UNDER CONSTRUCTION / BTS",
    badgeClass: "bg-orange-500/95 ring-orange-300/80 text-black",
  },
  {
    id: "bts-ambuja",
    title: "Property Near Ambuja",
    location: "Near Ambuja, Raipur",
    details: [{ label: "Size", value: "6,000 Sq. Ft." }],
    badge: "UNDER CONSTRUCTION / BTS",
    badgeClass: "bg-orange-500/95 ring-orange-300/80 text-black",
  },
  {
    id: "bts-telibandha",
    title: "Telibandha",
    location: "Telibandha, Raipur",
    details: [
      { label: "Status", value: "Ready Possession" },
      { label: "Approx. Size", value: "50,000 Sq. Ft." },
    ],
    badge: "UNDER CONSTRUCTION / BTS",
    badgeClass: "bg-orange-500/95 ring-orange-300/80 text-black",
  },
  {
    id: "bts-ambuja-mall",
    title: "Property Near Ambuja Mall",
    location: "Near Ambuja Mall, Raipur",
    details: [],
    badge: "UNDER CONSTRUCTION / BTS",
    badgeClass: "bg-orange-500/95 ring-orange-300/80 text-black",
  },
];

/* -------------------- STANDALONE CARD COMPONENT -------------------- */

function StandAloneCard({ item, index }) {
  const { title, location, details, badge, badgeClass } = item;

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
            STANDALONE
          </span>
          <span className={`rounded-full px-3 py-1 ring-1 ${badgeClass}`}>
            {badge}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h3>
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
          {details.map((d, i) => (
            <p key={i} className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">{d.label}:</span>{" "}
              {d.value}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share whether you are looking for{" "}
            <span className="font-semibold text-slate-100">sale or rent</span>{" "}
            – we&apos;ll share exact availability, floor plans, and deal
            structure for this{" "}
            <span className="font-semibold text-slate-100">Stand Alone</span>{" "}
            option.
          </span>

          <a
            href="/contact"
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

/* -------------------- SUBSECTION HEADING COMPONENT -------------------- */

function SubsectionHeading({ title, accent }) {
  return (
    <div className="mb-6 mt-10 first:mt-0">
      <div className="flex items-center gap-3">
        <div
          className="h-7 w-1 rounded-full"
          style={{ background: `linear-gradient(180deg, ${BRAND.base}, ${BRAND.soft})` }}
        />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
          {title}
          {accent && (
            <span className="ml-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              {accent}
            </span>
          )}
        </h2>
      </div>
      <div
        className="mt-2 h-px w-full opacity-20"
        style={{ background: `linear-gradient(90deg, ${BRAND.base}, transparent)` }}
      />
    </div>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function StandAloneListings() {
  const navigate = useNavigate();

  const subsections = [
    { id: "pre-rented", label: "Pre-Rented" },
    { id: "pre-launch", label: "Pre-Launch" },
    { id: "eoi", label: "EOI" },
    { id: "rent", label: "Rent" },
    { id: "roi", label: "ROI" },
    { id: "bts", label: "Under Construction / BTS" },
  ];

  const [activeTab, setActiveTab] = useState("all");

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

        {/* Heading with motion + gradient color */}
        <header className="mb-8 space-y-3 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] text-white"
          >
            STAND ALONE PROPERTY{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              IN RAIPUR (C.G)
            </span>
          </motion.h1>
        </header>

        {/* Quick-jump tabs */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          {subsections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center rounded-full border border-white/15 bg-black/60 px-4 py-1.5 text-xs font-semibold text-slate-200 hover:bg-black/90 hover:border-[#f97316]/60 hover:text-white transition"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* ===================== PRE-RENTED ===================== */}
        <div id="pre-rented">
          <SubsectionHeading title="Pre-Rented" />
          <div className="grid gap-6 md:grid-cols-2">
            {PRE_RENTED_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ===================== PRE-LAUNCH ===================== */}
        <div id="pre-launch" className="mt-14">
          <SubsectionHeading title="Pre-Launch" />
          <div className="grid gap-6 md:grid-cols-2">
            {PRE_LAUNCH_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ===================== EOI ===================== */}
        <div id="eoi" className="mt-14">
          <SubsectionHeading title="EOI" accent="(Expression of Interest)" />
          <div className="grid gap-6 md:grid-cols-2">
            {EOI_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ===================== RENT ===================== */}
        <div id="rent" className="mt-14">
          <SubsectionHeading title="Rent" />
          <div className="grid gap-6 md:grid-cols-2">
            {RENT_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ===================== ROI ===================== */}
        <div id="roi" className="mt-14">
          <SubsectionHeading title="ROI" />
          <div className="grid gap-6 md:grid-cols-2">
            {ROI_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* ===================== UNDER CONSTRUCTION / BTS DEALS ===================== */}
        <div id="bts" className="mt-14">
          <SubsectionHeading title="Under Construction /" accent="BTS Deals" />
          <div className="grid gap-6 md:grid-cols-2">
            {BTS_ITEMS.map((item, index) => (
              <StandAloneCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}