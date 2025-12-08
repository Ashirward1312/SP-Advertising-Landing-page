"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import VB2Img from "../../images/VB2.png";
import VB3Img from "../../images/VB3.png";
import VB4Img from "../../images/VB4.png";
import VB5Img from "../../images/VB5.png";
import VB6Img from "../../images/VB6.png";
import VB7Img from "../../images/VB7.png";
import VB8Img from "../../images/VB8.png";

const BRAND = {
  base: "#f54900",
  soft: "#ff9b2e",
};

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

function formatINR(val) {
  if (!val) return "Price on request";
  const crore = val / 10000000;
  if (crore >= 1) return `Approx ₹${crore.toFixed(1)} Cr`;
  return `Approx ${new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val)}`;
}

const COMMERCIAL_PROPERTIES = [
  {
    id: "raipur-main-commercial",
    title: "Commercial Property – Prime Location in Raipur",
    city: "Raipur",
    status: "One of the best commercial locations in Raipur.",
    images: [VB2Img, VB3Img, VB4Img, VB5Img, VB6Img, VB7Img, VB8Img],
    highlights: [
      "Premium commercial tower in the heart of Raipur",
      "Ideal for showrooms, offices & branded retail",
      "Designed for high visibility and walk-in traffic",
    ],
    // price: 75000000, // optional
  },
];

/* -------------------- SLIDER -------------------- */

function HeroSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;

  const total = images.length;
  const goNext = () => setCurrent((c) => (c + 1) % total);
  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(goNext, 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/10">
        <div className="relative w-full aspect-[16/9]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Commercial property view ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
            />
          ))}

          <div className="absolute top-3 left-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold text-slate-100 border border-white/20">
            Commercial • Raipur
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-slate-100 hover:bg-black/85 transition"
              >
                <span className="text-lg">‹</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-slate-100 hover:bg-black/85 transition"
              >
                <span className="text-lg">›</span>
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-5 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`relative flex-shrink-0 overflow-hidden rounded-xl border ${
                index === current
                  ? "border-white ring-2 ring-white/80"
                  : "border-white/15"
              }`}
            >
              <div className="h-16 w-24 md:h-18 md:w-28 lg:h-20 lg:w-32">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------- FILTER -------------------- */

function applyCommercialFilters(list, filters = {}) {
  if (!filters || Object.keys(filters).length === 0) return list;
  const { category, locations = [], minBudget, maxBudget } = filters;

  return list.filter((item) => {
    if (category && category !== "commercial") return false;

    if (locations.length) {
      const locStr = `${item.city || ""}`.toLowerCase();
      const match = locations.some((l) =>
        locStr.includes(String(l).toLowerCase())
      );
      if (!match) return false;
    }

    if (minBudget && item.price < Number(minBudget)) return false;
    if (maxBudget && item.price > Number(maxBudget)) return false;

    return true;
  });
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function CommercialListings({ filters }) {
  const navigate = useNavigate();
  const properties = applyCommercialFilters(COMMERCIAL_PROPERTIES, filters);

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
    <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-16">
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
        <header className="mb-6 md:mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            COMMERCIAL • RAIPUR
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase">
            Premium Commercial Property In Raipur
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            A curated commercial tower in a prime Raipur micro-market – suitable
            for branded retail, showrooms and offices looking for visibility,
            accessibility and long-term value.
          </p>
        </header>

        {properties.map((prop) => (
          <article
            key={prop.id}
            className="rounded-3xl bg-slate-900/95 ring-1 ring-white/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* top orange line */}
            <div
              className="h-[3px] w-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
              }}
            />

            <div className="p-5 md:p-7 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* LEFT: SLIDER */}
              <div className="lg:w-[60%]">
                <HeroSlider images={prop.images} />
              </div>

              {/* RIGHT: DETAILS */}
              <div className="lg:w-[40%] flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-slate-100 ring-1 ring-white/10">
                      In Raipur
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-slate-200 ring-1 ring-white/10">
                      Premium Commercial Tower
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {prop.title}
                  </h2>

                  {/* Price */}
                  <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-bold whitespace-nowrap bg-black/60 text-slate-100 ring-1 ring-slate-600/80">
                    {formatINR(prop.price)}
                  </span>

                  <p className="text-slate-300 text-sm mt-2">
                    Available in Raipur – commercial space options in a premium,
                    high-visibility tower suitable for branded retail and
                    offices.
                  </p>
                </div>

                {/* Highlights */}
                {prop.highlights?.length > 0 && (
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {prop.highlights.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f54900]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Status + CTA */}
                <div className="mt-3 flex flex-col gap-3">
                  {prop.status && (
                    <p className="text-[14px] text-[#f54900] font-semibold">
                      {prop.status}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200"
                      style={{ backgroundColor: CTA_COLOR }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = CTA_HOVER;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = CTA_COLOR;
                      }}
                    >
                      Contact Us
                    </a>

                    <span className="text-xs text-slate-400">
                      Share your requirement, we&apos;ll guide you end‑to‑end.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}