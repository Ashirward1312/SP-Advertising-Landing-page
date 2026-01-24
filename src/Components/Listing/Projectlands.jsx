"use client";
import React from "react";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- PROJECT LANDS DATA -------------------- */

const PROJECT_LANDS = [
  {
    id: "avanti-vihar-1-2lakh",
    city: "Raipur",
    title: "Residential Project Land – Near Avanti Vihar",
    location: "Near Avanti Vihar, Raipur",
    size: "Range 100,000 – 200,000 sq ft (1–2 lakh sq ft)",
    zoning: "Residential project land",
    highlights:
      "Suitable for mid to large-scale residential projects such as apartments, gated community or group housing, subject to approvals.",
  },
  {
    id: "ring-road-4-4acres",
    city: "Raipur",
    title: "4 Acre Mixed-Use Land – Near Ring Road No. 4",
    location: "Near Ring Road No. 4, Raipur",
    size: "Range 4 acres",
    zoning: "Residential / Commercial (mixed-use potential)",
    highlights:
      "Strategic frontage near Ring Road No. 4 – suitable for mixed-use development with residential and commercial components, as per planning.",
  },
  {
    id: "vw-canyon-1-1_5lakh",
    city: "Raipur",
    title: "Project Land – Near VW Canyon",
    location: "Near VW Canyon, Raipur",
    size: "Range 100,000 – 150,000 sq ft (1–1.5 lakh sq ft)",
    zoning: "Residential / project development",
    highlights:
      "Good sized project land suitable for residential or plotted development, depending on the project concept and approvals.",
  },
  {
    id: "raj-bhawan-10000",
    city: "Raipur",
    title: "Prime City Plot – Near Raj Bhawan & Ghadi Chowk",
    location: "Near Raj Bhawan & Ghadi Chowk, Raipur city core",
    size: "Range 10,000 sq ft",
    zoning: "Residential / Commercial (city core usage)",
    highlights:
      "Premium city-centre location ideal for boutique residential, office, clinic or small commercial building, subject to town planning norms.",
  },
  {
    id: "saddu-15-20acres",
    city: "Raipur",
    title: "15–20 Acre Township Land – Near Saddu",
    location: "Near Saddu, Raipur",
    size: "Range 15–20 acres",
    zoning: "Township / large residential project land",
    highlights:
      "Large contiguous land parcel suitable for township, plotted development or group housing, as per approvals and project vision.",
  },
  {
    id: "monnet-ispat",
    city: "Raipur",
    title: "12–20 Acre Project Land ",
    location: "Monnet Ispat, Arang Road, Raipur",
    size: "Range 12–20 acres (flexible configuration)",
    zoning: "Residential / Commercial / Mixed-use potential",
    highlights:
      "High visibility corridor near Magneto Mall and Arang Road – suitable for mixed-use, residential or commercial projects, subject to zoning.",
  },
  {
    id: "shadani-darbar-56000",
    city: "Raipur",
    title: "Project Land – Near Shadani Darbar",
    location: "Near Shadani Darbar, Raipur",
    size: "Approx. 56,000 sq ft",
    zoning: "Residential / Institutional / Commercial (as permitted)",
    highlights:
      "Well-sized project land near a prominent landmark, suitable for residential, institutional or commercial use as per sanctioned permissions.",
  },
  {
  id: "evaraa-sector-25-naya-raipur",
  city: "Naya Raipur",
  title: "EVARAA – Ultra Luxurious Villas Project",
  location: "Sector 25, Naya Raipur, Chhattisgarh",
  size: "All villas offered in structure-only format",
  zoning: "Ultra luxurious residential villas project",
  highlights:
    "Plot rate approx ₹5,000/- per sq.ft and construction rate approx ₹1,500/- per sq.ft (structure only), plus other applicable charges, registry and GST. Located in premium Sector 25, Naya Raipur, Chhattisgarh.",
}
];

/* -------------------- CARD COMPONENT -------------------- */

function ProjectLandCard({ item, index }) {
  const { city, title, location, size, zoning, highlights } = item;

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
            Project Land • {city}
          </span>

          {zoning && (
            <span className="rounded-full bg-sky-500/95 px-3 py-1 text-black ring-1 ring-sky-300/80">
              {zoning}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Details box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            Key Details
          </p>

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Land Size:</span>{" "}
            {size}
          </p>

          {zoning && (
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">
                Zoning / Use:
              </span>{" "}
              {zoning}
            </p>
          )}

          {highlights && (
            <p className="text-xs text-slate-400 pt-1 border-t border-white/5 mt-2">
              {highlights}
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your project requirement and profile – we will share
            ownership details, town planning status and commercial terms for
            suitable project lands.
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
            Discuss Project Land
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function ProjectsListings() {
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
          <a
            href="/categories"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </a>
        </div>

        {/* Heading */}
        <header className="mb-8 space-y-3 text-center">
          <p className="text-xl sm:text-2xl font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            PROJECT LANDS • RESIDENTIAL • COMMERCIAL
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase">
            KEY PROJECT LAND OPTIONS
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated{" "}
            <span className="font-semibold text-slate-100">
              residential, commercial and mixed-use project lands
            </span>{" "}
            in and around Raipur – suitable for developers, builders and
            investors planning structured projects, subject to due diligence and
            statutory approvals.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_LANDS.map((item, index) => (
            <ProjectLandCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}