// "use client";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// // Hospital jaisa color theme
// const PRIMARY_ORANGE = "#f54900";   // BRAND.base
// const GRADIENT_FROM = "#f54900";    // BRAND.base
// const GRADIENT_TO = "#ff9b2e";      // BRAND.soft

// const LAND_CARDS = [
//   {
//     id: "vip-3000-6000",
//     title: "3,000 – 6,000 sq.ft Land – VIP Road Belt",
//     locationTag: "VIP Road, Raipur",
//     size: "Range 3,000 – 6,000 sq.ft plots available",
//   },
//   {
//     id: "magneto-3000-6000",
//     title: "3,000 – 6,000 sq.ft Land – Near Magneto",
//     locationTag: "Near Magneto Mall, Raipur",
//     size: "Range 3,000 – 6,000 sq.ft plots available",
//   },
//   {
//     id: "sayaji-3000-6000",
//     title: "3,000 – 6,000 sq.ft Land – Near Sayaji",
//     locationTag: "Near Sayaji, Raipur",
//     size: "Range 3,000 – 6,000 sq.ft plots available",
//   },
//   {
//     id: "pachpedi",
//     title: "Land Near Pachpedi Naka",
//     locationTag: "Pachpedi Naka, Raipur",
//     size: "Size as per requirement",
//   },
// ];

// export default function LandListings() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative bg-slate-950 text-slate-100 pt-24 pb-16 md:pt-28 md:pb-20">
//       {/* Soft orange glow – hospital jaise tone */}
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
//         style={{
//           background: `radial-gradient(60% 60% at 50% 0%, ${PRIMARY_ORANGE}20 0%, rgba(0,0,0,0) 70%)`,
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-4 md:px-6">
//         {/* Back button */}
//         <div className="mb-8 flex items-center justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/categories")}
//             className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
//           >
//             <span className="text-base md:text-lg">←</span>
//             <span>BACK TO CATEGORIES</span>
//           </button>
//         </div>

//         {/* Heading with framer-motion + gradient color */}
//         <header className="mb-12 text-center">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="mt-3 text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white"
//           >
//             PREMIUM{" "}
//             <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
//               LUXURY PLOTS IN RAIPUR (C.G)
//             </span>
//           </motion.h1>
//         </header>

//         {/* Cards grid */}
//         <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
//           {LAND_CARDS.map((land, index) => (
//             <article
//               key={land.id}
//               className="group rounded-2xl bg-slate-900/95 ring-1 ring-slate-800/80 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.9)] transition-all duration-300 hover:ring-2 hover:ring-[#f97316] hover:shadow-[0_25px_70px_rgba(249,115,22,0.25)]"
//             >
//               {/* Top small accent line + option badge */}
//               <div className="flex items-center justify-between px-6 pt-4">
//                 <div
//                   className="h-[3px] w-24 rounded-full"
//                   style={{
//                     background: `linear-gradient(90deg, transparent, ${GRADIENT_FROM}, ${GRADIENT_TO}, transparent)`,
//                   }}
//                 />
//                 <span className="rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold text-slate-200 ring-1 ring-white/10">
//                   Option {index + 1}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-7 sm:pt-5 space-y-4">
//                 {/* Location tag */}
//                 <span className="inline-flex items-center rounded-full bg-black/80 px-3.5 py-1.5 text-[11px] font-semibold text-slate-100 ring-1 ring-white/20">
//                   <span
//                     className="h-1.5 w-1.5 rounded-full mr-1.5"
//                     style={{ backgroundColor: PRIMARY_ORANGE }}
//                   />
//                   {land.locationTag}
//                 </span>

//                 {/* Title */}
//                 <h2 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-200 group-hover:text-[#f54900]">
//                   {land.title}
//                 </h2>

//                 {/* Simple details */}
//                 <div className="mt-2 space-y-1.5 text-sm text-slate-300">
//                   <p>
//                     <span className="font-semibold text-slate-100">
//                       Location:
//                     </span>{" "}
//                     {land.locationTag}
//                   </p>
//                   <p>
//                     <span className="font-semibold text-slate-100">
//                       Size / Range:
//                     </span>{" "}
//                     {land.size}
//                   </p>
//                 </div>

//                 {/* CTA row */}
//                 <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
//                   <a
//                     href="/contact"
//                     className="inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03]"
//                     style={{
//                       backgroundImage: `linear-gradient(to right, ${GRADIENT_FROM}, ${GRADIENT_TO})`,
//                     }}
//                   >
//                     Contact about this land
//                   </a>
//                   <span className="text-xs text-slate-400 text-right">
//                     Exact pricing & layout
//                     <br />
//                     shared on request
//                   </span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hospital jaisa color theme
const PRIMARY_ORANGE = "#f54900";
const GRADIENT_FROM = "#f54900";
const GRADIENT_TO = "#ff9b2e";

/* ✅ REPLACED CONTENT (NEW DATA) */
const LAND_CARDS = [
  {
    id: "premium-plots-triton-jivanvihar",
    title: "Premium Plots — Near Triton (Jivanvihar Colony)",
    locationTag: "Near Triton, Jivanvihar Colony, Raipur",
    size: "3875 sq.ft",
    rate: "₹4,700 – ₹4,800 / sq.ft",
    extra: "Additional charges: ₹200 / sq.ft",
    more: [],
  },
  {
    id: "premium-plots-zora-mall-pirda",
    title: "Premium Plots — Near Zora Mall (Pirda Road)",
    locationTag: "Near Zora Mall, Pirda Road, Raipur",
    size: "14,400 sq.ft",
    rate: "₹1,650 / sq.ft",
    extra: "",
    more: [],
  },
  {
    id: "premium-plots-raj-bhawan-ghadi-chowk",
    title: "Premium Plots — Raj Bhawan (Near Ghadi Chowk)",
    locationTag: "Raj Bhawan, near Ghadi Chowk, Raipur",
    size: "10,000 sq.ft",
    rate: "₹20,000 / sq.ft",
    extra: "",
    more: [],
  },
  {
    id: "commercial-residential-sector-25-new-raipur",
    title: "Commercial + Residential — Sector 25, New Raipur",
    locationTag: "Sector 25, New Raipur, Chhattisgarh",
    size: "Commercial units: 500 – 1500 sq.ft • Apartments/Studios/Villas available",
    rate:
      "Apartments: ₹4,500 / sq.ft (1st–12th), then +₹50 each floor • Studio: ₹7,500 / sq.ft",
    extra:
      "Commercial: GF ₹22,000 / sq.ft • 1st Floor ₹11,000 / sq.ft • Other charges applicable",
    more: [
      "Apartment 1: 3 BHK • 2525 sq.ft",
      "Apartment 2: 4 BHK • 3400 sq.ft",
      "Studio size: 567 – 896 sq.ft",
      "Villa: Plot 2534 sq.ft • Construction 3801 sq.ft",
      "Villa: Plot 6717 sq.ft • Construction 8901 sq.ft",
    ],
  },
  {
    id: "premium-plots-near-raj-bhawan-14400",
    title: "Premium Plots — Near Raj Bhawan",
    locationTag: "Near Raj Bhawan, Raipur",
    size: "14,400 sq.ft",
    rate: "₹15,000 / sq.ft",
    extra: "",
    more: [],
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
            onClick={() => navigate("/categories")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </button>
        </div>

        {/* Heading with framer-motion + gradient color (same design) */}
        <header className="mb-12 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white"
          >
            PREMIUM{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              LUXURY PLOTS IN RAIPUR (C.G)
            </span>
          </motion.h1>
        </header>

        {/* Cards grid (same design) */}
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

                {/* Details */}
                <div className="mt-2 space-y-1.5 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-100">Location:</span>{" "}
                    {land.locationTag}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-100">Size / Range:</span>{" "}
                    {land.size}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-100">Rate:</span>{" "}
                    {land.rate}
                  </p>

                  {land.extra ? (
                    <p>
                      <span className="font-semibold text-slate-100">Extra:</span>{" "}
                      {land.extra}
                    </p>
                  ) : null}

                  {land.more?.length ? (
                    <details className="pt-2">
                      <summary className="cursor-pointer text-sm font-semibold text-orange-200 hover:text-orange-100">
                        View more details
                      </summary>
                      <ul className="mt-2 space-y-1.5 text-sm text-slate-300 list-disc pl-5">
                        {land.more.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </div>

                {/* CTA row (same style) */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-800 pt-5">
                  <a
                    href={`/contact?ref=${encodeURIComponent(land.id)}`}
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