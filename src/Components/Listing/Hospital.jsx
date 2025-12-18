// "use client";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import H1Img from "../../images/H1.jpeg";
// import H2Img from "../../images/H2.jpeg";
// import H3Img from "../../images/H3.jpeg";
// import H4Img from "../../images/H4.jpeg";

// const BRAND = {
//   base: "#f54900",
//   soft: "#ff9b2e",
// };

// const CTA_COLOR = "#f97316";
// const CTA_HOVER = "#fb923c";

// // ----------- PRICE FORMAT (Approx ₹12 Cr) -----------
// function formatINR(val) {
//   if (!val) return "Price on request";

//   const crore = val / 10000000;
//   if (crore >= 1) {
//     return `Approx ₹${crore.toFixed(1)} Cr`;
//   }

//   return `Approx ${new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     maximumFractionDigits: 0,
//   }).format(val)}`;
// }

// /* -------------------- HOSPITAL DATA -------------------- */
// const HOSPITAL_LIST = [
//   {
//     id: "pachpedi-naka-tower",
//     title: "Prime Hospital / Medical Tower – Pachpedi Naka",
//     city: "Raipur",
//     location: "Pachpedi Naka, Raipur (Next to Ganeshi Hospital)",
//     price: 120000000, // ₹12 Cr
//     images: [H1Img, H2Img, H3Img, H4Img],

//     plotSizeSqft: 8800,
//     areaAcre: 0.2,
//     plotDimensions: "57 ft x 150 ft",
//     liftArea: "8 ft x 8 ft",
//     frontParking: "57 ft x 20 ft",
//     backGarden: "57 ft x 16 ft",

//     approvals:
//       "Ground floor parking, first floor commercial map passed, upper floors residential map passed.",
//     structure:
//       "Very heavy RCC structure. Tower complete up to 4th floor, provision to add 4 more floors in future.",
//     usage:
//       "Ideal for hospital / medical tower with commercial space at lower level and residential floors above.",
//     status: "Ready structure – 4 floors complete; prime main road location.",
//   },
// ];

// /* -------------------- FILTER LOGIC -------------------- */
// function applyHospitalFilters(list, filters = {}) {
//   if (!filters || Object.keys(filters).length === 0) return list;

//   const {
//     category,
//     locations = [],
//     minArea,
//     maxArea,
//     minBudget,
//     maxBudget,
//   } = filters;

//   return list.filter((item) => {
//     if (category && category !== "hospital") return false;

//     if (locations.length) {
//       const locStr = `${item.location || ""} ${item.city || ""}`.toLowerCase();
//       const match = locations.some((l) =>
//         locStr.includes(String(l).toLowerCase())
//       );
//       if (!match) return false;
//     }

//     const area = item.areaAcre || 0;
//     if (minArea && area < Number(minArea)) return false;
//     if (maxArea && area > Number(maxArea)) return false;

//     if (minBudget && item.price < Number(minBudget)) return false;
//     if (maxBudget && item.price > Number(maxBudget)) return false;

//     return true;
//   });
// }

// /* -------------------- SLIDER -------------------- */

// function HospitalSlider({ images = [] }) {
//   const [current, setCurrent] = useState(0);
//   if (!images.length) return null;

//   const total = images.length;
//   const goNext = () => setCurrent((c) => (c + 1) % total);
//   const goPrev = () => setCurrent((c) => (c - 1 + total) % total);

//   useEffect(() => {
//     const id = setInterval(goNext, 6000);
//     return () => clearInterval(id);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [total]);

//   return (
//     <div className="space-y-3">
//       {/* Main image */}
//       <div className="relative w-full overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/10">
//         <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Hospital view ${index + 1}`}
//               className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                 index === current ? "opacity-100" : "opacity-0"
//               }`}
//               loading="lazy"
//               decoding="async"
//             />
//           ))}

//           {/* Top-left tags */}
//           <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
//             <span className="inline-flex items-center rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-slate-100 ring-1 ring-white/20">
//               Hospital • Raipur
//             </span>
//             <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-semibold text-black ring-1 ring-emerald-300/80">
//               Medical Tower
//             </span>
//           </div>

//           {/* Arrows */}
//           {total > 1 && (
//             <>
//               <button
//                 type="button"
//                 onClick={goPrev}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-slate-100 hover:bg-black/85 transition"
//               >
//                 <span className="text-lg">‹</span>
//               </button>
//               <button
//                 type="button"
//                 onClick={goNext}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-slate-100 hover:bg-black/85 transition"
//               >
//                 <span className="text-lg">›</span>
//               </button>
//             </>
//           )}
//         </div>

//         {/* Dots */}
//         {total > 1 && (
//           <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 onClick={() => setCurrent(i)}
//                 className={`h-1.5 rounded-full transition-all ${
//                   i === current ? "w-5 bg-white" : "w-2 bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Thumbnails */}
//       {total > 1 && (
//         <div className="flex gap-2 overflow-x-auto pb-1">
//           {images.map((img, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setCurrent(index)}
//               className={`relative flex-shrink-0 overflow-hidden rounded-xl border ${
//                 index === current
//                   ? "border-white ring-2 ring-white/80"
//                   : "border-white/15"
//               }`}
//             >
//               <div className="h-14 w-24 md:h-16 md:w-28 lg:h-18 lg:w-32">
//                 <img
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* -------------------- MAIN COMPONENT -------------------- */
// export default function HospitalListings({ filters }) {
//   const navigate = useNavigate();
//   const hospitals = applyHospitalFilters(HOSPITAL_LIST, filters);

//   if (!hospitals.length) {
//     return (
//       <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
//         <div className="max-w-6xl mx-auto px-4 md:px-6">
//           <p className="text-center text-slate-400 text-sm">
//             No hospital listings match the selected filters right now.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative bg-slate-950 text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
//       {/* orange aura */}
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 0%, rgba(245,73,0,0.25) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-4 md:px-6">
//         {/* Back button */}
//         <div className="mb-6 flex items-center justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
//           >
//             <span className="text-base md:text-lg">←</span>
//             <span>Back to Home</span>
//           </button>
//         </div>

//         {/* Heading */}
//         <header className="mb-6 md:mb-8">
//           <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
//             HOSPITAL / MEDICAL TOWER • RAIPUR
//           </p>
//           <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase">
//             Prime Hospital & Medical Tower Opportunities In Raipur
//           </h1>
//           <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
//             Structurally ready medical tower in a prime Pachpedi Naka location
//             – ideal for hospitals, clinics and medical facilities looking for a
//             strong Raipur presence.
//           </p>
//         </header>

//         {hospitals.map((h) => {
//           const imagesArray =
//             Array.isArray(h.images) && h.images.length > 0
//               ? h.images
//               : h.image
//               ? [h.image]
//               : [];

//           return (
//             <article
//               key={h.id}
//               className="rounded-3xl bg-slate-900/95 ring-1 ring-white/10 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)] overflow-hidden"
//             >
//               {/* Top orange line */}
//               <div
//                 className="h-[3px] w-full"
//                 style={{
//                   background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
//                 }}
//               />

//               <div className="p-5 md:p-7 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
//                 {/* Left: Slider */}
//                 <div className="lg:w-[55%]">
//                   <HospitalSlider images={imagesArray} />
//                 </div>

//                 {/* Right: Details */}
//                 <div className="lg:w-[45%] flex flex-col gap-5">
//                   <div className="space-y-4">
//                     {/* Tags */}
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-slate-100 ring-1 ring-white/10">
//                         Hospital • Raipur
//                       </span>
//                       <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-semibold text-black ring-1 ring-emerald-300/80">
//                         Medical Tower
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
//                       {h.title}
//                     </h2>

//                     {/* Price */}
//                     <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-bold whitespace-nowrap bg-black/60 text-slate-100 ring-1 ring-slate-600/80">
//                       {formatINR(h.price)}
//                     </span>

//                     {/* Location */}
//                     <p className="text-slate-300 text-sm mt-2">
//                       {h.location} {h.city ? `• ${h.city}` : ""}
//                     </p>

//                     {/* Quick facts */}
//                     <ul className="mt-1 space-y-1.5 text-sm text-slate-200">
//                       <li>
//                         <span className="font-semibold text-slate-100">
//                           Plot size:
//                         </span>{" "}
//                         {h.plotSizeSqft} sq.ft
//                       </li>
//                       <li>
//                         <span className="font-semibold text-slate-100">
//                           Area:
//                         </span>{" "}
//                         {h.areaAcre} acre ({h.plotDimensions})
//                       </li>
//                       <li>
//                         <span className="font-semibold text-slate-100">
//                           Lift:
//                         </span>{" "}
//                         {h.liftArea}
//                       </li>
//                       <li>
//                         <span className="font-semibold text-slate-100">
//                           Front parking:
//                         </span>{" "}
//                         {h.frontParking}
//                       </li>
//                       <li>
//                         <span className="font-semibold text-slate-100">
//                           Back garden:
//                         </span>{" "}
//                         {h.backGarden}
//                       </li>
//                     </ul>

//                     {h.structure && (
//                       <p className="text-[14px] text-slate-300">
//                         <span className="font-semibold text-slate-100">
//                           Structure:
//                         </span>{" "}
//                         {h.structure}
//                       </p>
//                     )}

//                     {h.usage && (
//                       <p className="text-[14px] text-slate-300">
//                         <span className="font-semibold text-slate-100">
//                           Ideal use:
//                         </span>{" "}
//                           {h.usage}
//                       </p>
//                     )}

//                     {h.approvals && (
//                       <p className="text-[13px] text-slate-400">
//                         <span className="font-semibold text-slate-100">
//                           Approvals:
//                         </span>{" "}
//                         {h.approvals}
//                       </p>
//                     )}
//                   </div>

//                   {/* Status + CTA */}
//                   <div className="mt-2 flex flex-col gap-3">
//                     {h.status && (
//                       <p className="text-[14px] text-[#f54900] font-semibold">
//                         {h.status}
//                       </p>
//                     )}

//                     <div className="flex flex-wrap items-center gap-3">
//                       <a
//                         href="/#contact"
//                         className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-200"
//                         style={{ backgroundColor: CTA_COLOR }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.backgroundColor = CTA_HOVER;
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.backgroundColor = CTA_COLOR;
//                         }}
//                       >
//                         Contact Us
//                       </a>

//                       <span className="text-xs text-slate-400 max-w-xs">
//                         Share your requirement, budget and plan – we&apos;ll help
//                         you evaluate if this tower or another Raipur option fits
//                         best.
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



"use client";
import React from "react";
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
    category: "Township / Mixed Use",
    city: "Raipur",
    title: "3, 5 & 7 Acre JV Land – VIP Road, Raipur",
    location: "VIP Road corridor, Raipur",
    size: "3 acre, 5 acre & 7 acre options available",
    description:
      "Prime VIP Road belt – ideal for premium residential, mixed-use or hospitality project on JV basis.",
  },
  {
    id: "baloda-bazar-road-jv",
    dealType: "JV",
    category: "Township / Large Format",
    city: "Raipur",
    title: "10 – 25 Acre JV Land – Baloda Bazar Road",
    location: "Baloda Bazar Road, Raipur outskirts",
    size: "10 to 25 acre (contiguous land) on JV",
    description:
      "Suitable for township, logistics, industrial or institutional campus development with long-term growth potential.",
  },
  {
    id: "gadhi-chowk-sale",
    dealType: "SALE",
    category: "Commercial",
    city: "Raipur",
    title: "10,000 – 40,000 sq.ft Commercial – Near Gadhi Chowk / Raj Bhawan",
    location: "Near Gadhi Chowk / Raj Bhawan, Raipur",
    size: "Approx 10,000 to 40,000 sq.ft commercial space / land",
    description:
      "High-street commercial zone – suitable for showroom, corporate office, hospital or mixed commercial use. Available for outright sale.",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function OpportunityCard({ item, index }) {
  const { dealType, category, city, title, location, size, description } = item;
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
            {category} • {city}
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
            Key Highlights
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Size:</span> {size}
          </p>
          {isJV && (
            <p className="text-xs text-slate-400">
              JV structure can be discussed and finalised based on your project
              concept and investment plan.
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
          {description}
        </p>
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
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-8 space-y-3">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
            JOINT VENTURE (JV) • LAND • COMMERCIAL
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight uppercase">
            JV Land & Prime Commercial Opportunities – Raipur
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            JV (Joint Venture) is an{" "}
            <span className="font-semibold text-slate-100">
              agreement and mutual understanding
            </span>{" "}
            between the client (developer / investor) and the land owner to
            develop a project together and share profits, revenue or developed
            area as per agreed terms.
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