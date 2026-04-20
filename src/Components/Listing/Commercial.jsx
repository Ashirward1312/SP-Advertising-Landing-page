// "use client";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion"; // ✅ motion import

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// const BRAND = {
//   base: "#f54900",
//   soft: "#ff9b2e",
// };

// const CTA_COLOR = "#f97316";
// const CTA_HOVER = "#fb923c";

// /* -------------------- COMMERCIAL DATA (NO IMAGES) -------------------- */

// const COMMERCIAL_OPTIONS = [
//   {
//     id: "vidhan-sabha",
//     area: "Institutional Belt",
//     title: "Commercial Spaces – Near Vidhan Sabha",
//     location: "Vidhan Sabha Road, Raipur",
//     size: "Range 400 to 15,000 sq.ft (shops & offices)",
//     note: "Institutional corridor – good for clinics, offices and showrooms.",
//   },
//   {
//     id: "shankar-nagar",
//     area: "Premium Residential Belt",
//     title: "Commercial Spaces – Near Shankar Nagar",
//     location: "Near Shankar Nagar, Raipur",
//     size: "Range 10,000 sq.ft + (shops & offices)",
//     note: "Strong residential catchment – ideal for everyday retail and services.",
//   },
//   {
//     id: "kamal-vihar-400-15000",
//     area: "Kamal Vihar Planning Area",
//     title: "Commercial Spaces – Near Kamal Vihar",
//     location: "Near Kamal Vihar, Raipur",
//     size: "Range 400 to 15,000 sq.ft commercial spaces",
//     note: "Suitable for showrooms, mid-size offices and commercial blocks in a developing zone.",
//   },

//   // Magneto / VIP / Tatibandh / Pachpedi – rent or sale
//   {
//     id: "magneto-mall",
//     area: "Magneto Belt",
//     title: "Commercial Spaces – Near Magneto Mall",
//     location: "Near Magneto Mall, Raipur",
//     size: "Various commercial sizes • Rent / Sale available",
//     note: "High footfall zone with strong brand visibility potential.",
//   },
//   {
//     id: "vip-chowk",
//     area: "VIP Corridor",
//     title: "Commercial Spaces – VIP Chowk",
//     location: "VIP Chowk area, Raipur",
//     size: "Various commercial sizes • Rent / Sale available",
//     note: "Airport-side connectivity – ideal for corporate and high-end retail.",
//   },
//   {
//     id: "tatibandh",
//     area: "Transport / Commercial Hub",
//     title: "Commercial Spaces – Tatibandh",
//     location: "Tatibandh, Raipur",
//     size: "Various commercial sizes • Rent / Sale available",
//     note: "Good for logistics offices, showrooms and commercial godowns.",
//   },
//   {
//     id: "pachpedi-naka",
//     area: "Hospital / Mixed Use Belt",
//     title: "Commercial Spaces – Pachpedi Naka",
//     location: "Pachpedi Naka, Raipur",
//     size: "Various commercial sizes • Rent / Sale available",
//     note: "Surrounded by hospitals and dense residential pockets – suitable for medical & support retail.",
//   },

//   // NEW ONES
//   {
//     id: "persulidih-7000",
//     area: "Persulidih",
//     title: "7000 sq.ft Commercial Land – Persulidih",
//     location: "Persulidih, Raipur",
//     size: "Range of 7,000 sq.ft land",
//     note: "",
//   },
//   {
//     id: "pandri-3500",
//     area: "Pandri",
//     title: "3500 sq.ft Commercial Space – Pandri",
//     location: "Pandri, Raipur",
//     size: "Range of 3,500 sq.ft",
//     note: "",
//   },
//   {
//     id: "devpuri-express-1acre",
//     area: "Devpuri / Express Highway",
//     title:
//       "1 Acre Commercial Land – Near Express Highway, Devpuri Dhamtari Road",
//     location: "Near Express Highway, Devpuri Dhamtari Road, Raipur",
//     size: "Range of 1 acre land",
//     note: "",
//   },
//   {
//     id: "60000",
//     area: "Near Bhatagaon",
//     title: "20,000 – 25,000 sq.ft Hospital Project – Near Bhatagaon",
//     location: "Near Bhatagaon, Raipur",
//     size:
//       "Range 20,000 to 25,000 sq.ft construction potential, ideal for hospital use",
//     note: "",
//   },
//   {
//     id: "vb-tower-mowa",
//     area: "Mowa / Vidhan Sabha Road",
//     title: "VB Tower – Premium Commercial Project",
//     location: "Vidhan Sabha Road, Mowa, Raipur, Chhattisgarh",
//     size: "Office spaces Range 347 to 950 sq.ft (S.B.A.)",
//     note:
//       "Premium commercial tower on Vidhan Sabha Road, suitable for corporate offices, consultants and branded commercial use.",
//   },
// ];

// /* -------------------- MAIN COMPONENT -------------------- */

// export default function CommercialListings({ filters }) {
//   const navigate = useNavigate();

//   const properties =
//     !filters || !filters.category || filters.category === "commercial"
//       ? COMMERCIAL_OPTIONS
//       : [];

//   if (!properties.length) {
//     return (
//       <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
//         <div className="max-w-6xl mx-auto px-4 md:px-6">
//           <p className="text-center text-slate-400 text-sm">
//             No commercial listings in Raipur match the selected filters right
//             now.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-slate-950 text-slate-100 pt-24 pb-12 md:pt-28 md:pb-16">
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

//         {/* Heading with framer-motion */}
//         <header className="mb-8 text-center flex flex-col items-center space-y-3">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
//           >
//             COMMERCIAL PROPERTY AVAILABLE FOR{" "}
//             <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
//               OFFICES, SHOPS &amp; TOWERS IN RAIPUR (C.G)
//             </span>
//           </motion.h1>
//         </header>

//         {/* Cards grid */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {properties.map((prop) => (
//             <article
//               key={prop.id}
//               className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden"
//             >
//               {/* Top gradient line */}
//               <div
//                 className="absolute inset-x-0 top-0 h-[3px] opacity-90"
//                 style={{
//                   background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
//                 }}
//               />

//               <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
//                   <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
//                     Commercial • Raipur
//                   </span>
//                   <span className="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/15">
//                     {prop.area}
//                   </span>
//                   <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
//                     Rent &amp; Sale Available
//                   </span>
//                   <span className="rounded-full bg-[#f97316]/15 px-3 py-1 text-[#fed7aa] ring-1 ring-[#f97316]/40">
//                     Price on Request
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <div className="space-y-1">
//                   <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
//                     {prop.title}
//                   </h2>
//                 </div>

//                 {/* Simple details */}
//                 <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
//                   <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
//                     KEY DETAILS
//                   </p>
//                   <p className="text-sm text-slate-300">
//                     <span className="font-semibold text-slate-100">
//                       Location:
//                     </span>{" "}
//                     {prop.location}
//                   </p>
//                   <p className="text-sm text-slate-300">
//                     <span className="font-semibold text-slate-100">Size:</span>{" "}
//                     {prop.size}
//                   </p>
//                   {prop.note && (
//                     <p className="text-xs text-slate-400">
//                       <span className="font-semibold text-slate-100">
//                         Note:
//                       </span>{" "}
//                       {prop.note}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Bottom CTA */}
//               <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//                   <span className="text-xs text-slate-400 sm:flex-1">
//                     Share your size, budget and preferred micro‑market – we&apos;ll
//                     share exact units, floor options and detailed{" "}
//                     <span className="font-semibold text-slate-100">
//                       rent / sale • Price on Request
//                     </span>{" "}
//                     proposals for these commercial spaces.
//                   </span>

//                   <a
//                     href="/contact"
//                     className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors duration-200"
//                     style={{ backgroundColor: CTA_COLOR }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = CTA_HOVER;
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = CTA_COLOR;
//                     }}
//                   >
//                     ENQUIRE COMMERCIAL
//                   </a>
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

/* -------------------- COMMERCIAL DATA (NO PROJECT NAME, NO PRICE) -------------------- */
/**
 * ✅ Project name UI me nahi dikh raha
 * ✅ Price/rates UI me nahi dikh rahe (numbers removed)
 * ✅ Only "Price on Request" show ho raha hai
 */
const COMMERCIAL_OPTIONS = [
  {
    id: "COM-01",
    area: "Sector 25 • Naya Raipur",
    title: "Sector 25, Naya Raipur — Mixed-use (Commercial + Residential)",
    location: "Sector 25, Naya Raipur, Chhattisgarh",
    size: "Commercial units: 500–1500 sq.ft • Apartments/Studio/Villas (multiple options)",
    availability: "Sale Available",
    details: [
      "Apartments: multiple floors & configurations (details on request)",
      "Studios: 567–896 sq.ft (details on request)",
      "Commercial: ground & upper-floor options available (details on request)",
      "Villas: multiple plot + construction size options (details on request)",
      "Other charges applicable",
    ],
    note: "",
  },
  {
    id: "COM-02",
    area: "Jaistambh Chowk",
    title: "Near Jaistambh Chowk — Commercial Complex (Floor-wise options)",
    location: "Near Jaistambh Chowk, Raipur",
    size: "Floor-wise commercial units available",
    availability: "Sale Available",
    details: [
      "Ground/First/Second/Third floor options",
      "Unit availability & layout shared on request",
      "Other expenses applicable",
    ],
    note: "",
  },
  {
    id: "COM-03",
    area: "Mowa • Sabha Road",
    title: "Sabha Road, Mowa — Office Spaces (Commercial Tower)",
    location: "Sabha Road, Mowa, Raipur",
    size: "Office sizes: 347–950 sq.ft (SBA)",
    availability: "Sale + Lease/Rent",
    details: [
      "Floor-wise office options available (details on request)",
      "PLC / Maintenance / Sinking Fund / Society Formation / GST etc applicable",
      "Lease/Rent option may be available (subject to availability)",
    ],
    note: "",
  },
  {
    id: "COM-04",
    area: "Ghadi Chowk",
    title: "Near Ghadi Chowk — Premium Commercial (Shops + Offices)",
    location: "Near Ghadi Chowk, Raipur, Chhattisgarh",
    size: "Shops: 350–1238 sq.ft • Offices: 250–900 sq.ft",
    availability: "Sale Available",
    details: [
      "Floor-wise options available (details on request)",
      "Other charges + Registry + GST applicable",
      "Only one unit left (confirm on enquiry)",
    ],
    note: "",
  },
];

/* -------------------- MAIN COMPONENT -------------------- */
export default function CommercialListings({ filters }) {
  const navigate = useNavigate();

  // ✅ Back click: categories page open + auto-scroll to categories section
  // IMPORTANT: /categories page par categories container ko id="categories" dena.
  const handleBackToCategories = () => {
    navigate("/categories");

    const targetId = "categories";
    let tries = 0;

    const tryScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      tries += 1;
      if (tries < 90) window.requestAnimationFrame(tryScroll);
    };

    setTimeout(tryScroll, 50);
  };

  const properties =
    !filters || !filters.category || filters.category === "commercial"
      ? COMMERCIAL_OPTIONS
      : [];

  if (!properties.length) {
    return (
      <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm">
            No commercial listings in Raipur match the selected filters right now.
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
            onClick={handleBackToCategories}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-8 text-center flex flex-col items-center space-y-3">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            COMMERCIAL PROPERTY AVAILABLE FOR{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              OFFICES, SHOPS &amp; TOWERS IN RAIPUR (C.G)
            </span>
          </motion.h1>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((prop) => (
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
                    {prop.availability}
                  </span>
                  <span className="rounded-full bg-[#f97316]/15 px-3 py-1 text-[#fed7aa] ring-1 ring-[#f97316]/40">
                    Price on Request
                  </span>
                </div>

                {/* Title (no project name) */}
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    {prop.title}
                  </h2>
                </div>

                {/* Details */}
                <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                    KEY DETAILS
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">Location:</span>{" "}
                    {prop.location}
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">Size:</span>{" "}
                    {prop.size}
                  </p>

                  {prop.details?.length ? (
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc pl-5">
                      {prop.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ) : null}

                  {prop.note ? (
                    <p className="text-xs text-slate-400 pt-2">
                      <span className="font-semibold text-slate-100">Note:</span>{" "}
                      {prop.note}
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs text-slate-400 sm:flex-1">
                    Share your preferred size + budget + area – we&apos;ll share exact
                    availability, unit details and next steps.
                  </span>

                  <a
                    href={`/contact?ref=${encodeURIComponent(prop.id)}`}
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
