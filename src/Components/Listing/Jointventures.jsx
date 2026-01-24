import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

/* -------------------- OPPORTUNITIES DATA -------------------- */

const OPPORTUNITIES = [
  {
  id: "vip-road-jv",
  dealType: "JV",
  city: "Raipur",
  title: "3, 5 & 7 Acre JV Land – VIP Road, Raipur",
  location: "VIP Road corridor, Raipur",
  size: "Range of 3, 5 & 7 acres – ideal for resort development",
},
{
  id: "baloda-bazar-road-jv",
  dealType: "JV",
  city: "Raipur",
  title: "10–25 Acre JV Land – Baloda Bazar Road",
  location: "Baloda Bazar Road, Raipur outskirts",
  size: "Range of 10 to 25 acres (contiguous land) available for JV",
},
{
  id: "persulidih-tekari-jv",
  dealType: "PARTNERSHIP",
  city: "Raipur",
  title: "7–10 Acre Partnership Land – Persulidih / Tekari Belt",
  location: "Persulidih–Tekari belt, Raipur",
  size: "Range of 7 to 10 acres available for partnership",
},
{
  id: "saddu-jv",
  dealType: "PARTNERSHIP",
  city: "Raipur",
  title: "Up to 5 Acre Partnership Land – Near Saddu",
  location: "Saddu side, Raipur",
  size: "Land size range up to 5 acres available for partnership",
},
{
  id: "mm-fun-city-jv",
  dealType: "JV",
  city: "Raipur",
  title: "Up to 8 Acre JV Land – Near MM Fun City",
  location: "Near MM Fun City, Raipur",
  size: "Land size range up to 8 acres available for joint venture",
},
{
  id: "ghadi-chowk-sale",
  dealType: "SALE",
  city: "Raipur",
  title: "10,000–40,000 sq.ft Commercial Property – Near Ghadi Chowk / Raj Bhawan",
  location: "Near Ghadi Chowk / Raj Bhawan, Raipur",
  size: "Range of 10,000 to 40,000 sq.ft commercial space or land",
},

];

/* -------------------- CARD COMPONENT -------------------- */

function OpportunityCard({ item, index }) {
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
            Raipur • {city}
          </span>

          {isJV ? (
            <span className="rounded-full bg-sky-500/95 px-3 py-1 text-black ring-1 ring-sky-300/80">
              JV Opportunity
            </span>
          ) : (
            <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
              Outright Sale • Price on Request
            </span>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
            {title}
          </h2>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f54900]">
            {isJV ? "Joint Venture Land" : "Prime Commercial for Sale"}
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
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your profile, project idea and budget – we&apos;ll connect
            you for detailed discussion on{" "}
            {isJV ? "JV terms and structure." : "commercial pricing and terms."}
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
            {isJV ? "Discuss JV" : "Enquire for Sale"}
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function JVListings() {
  const navigate = useNavigate();

  // ✅ SEO: Title + Description + Keywords for this page
  useEffect(() => {
    document.title =
      "Joint Ventures Property Lands and Commercial in Raipur | Mahesh Ventures";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Explore joint ventures property lands and prime commercial opportunities in Raipur with Mahesh Ventures. Curated JV and partnership lands from 3 to 25 acres and commercial spaces near VIP Road, MM Fun City, Ghadi Chowk and more."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "joint venture land raipur, JV land raipur, partnership land raipur, commercial property JV raipur, resort JV VIP Road raipur, commercial land for sale raipur, ghadi chowk commercial raipur, MM Fun City land raipur, Mahesh Ventures JV"
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

        {/* Heading */}
        <header className="mb-8 space-y-3 text-center flex flex-col items-center">
          <p className="text-xl sm:text-2xl font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            JOINT VENTURE (JV) • LAND • COMMERCIAL
          </p>

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