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

// /* -------------------- RESIDENTIAL DATA (NO IMAGES) -------------------- */

// const RESIDENCE_OPTIONS = [
//   {
//     id: "old-dhamtari-road-30-50",
//     city: "Raipur",
//     title: "Start 30 to 50+ lakhs in Old Dhamtari Road",
//     location: "Old Dhamtari Road, Raipur",
//     config: "Residential",
//     priceInfo: "Price on Request",
//     note: "",
//     statusTag: "Residential",
//     priceTag: "Price on Request",
//   },
//   {
//     id: "kachna-60-150",
//     city: "Raipur",
//     title: "Kachna 60 lakhs to 1.5 cr+ • 1000 sq.ft and above",
//     location: "Kachna, Raipur",
//     config: "1000 sq.ft and above",
//     priceInfo: "Price on Request",
//     note: "",
//     statusTag: "Residential",
//     priceTag: "Price on Request",
//   },
//   {
//     id: "abhinav-city-2-3bhk",
//     city: "Raipur",
//     title: "Abhinav City – Ready to Move 2 & 3 BHK Flats",
//     location: "Abhinav City, Raipur",
//     config: "2 BHK: 1066 / 1125 sq.ft • 3 BHK: 1317 sq.ft",
//     priceInfo: "Price on Request",
//     note:
//       "Up to 90% finance available. Immediate rental income potential. Super market, mall, schools & all modern amenities nearby with covered, secure campus and peaceful residential environment – ideal for self-use + investment.",
//     statusTag: "Residential",
//     priceTag: "Price on Request",
//   },
//   {
//     id: "golden-residency-boriyakala-plots",
//     city: "Raipur",
//     title: "Golden Residency – Premium Residential Plots",
//     location: "New Dhamtari Road, Boriyakala, Raipur",
//     config: "Residential plots • 711 sq.ft – 1500 sq.ft",
//     priceInfo: "Price on Request",
//     note:
//       "Premium residential plotting project on New Dhamtari Road, Boriyakala – suitable for end-use homes as well as investment.",
//     statusTag: "Residential Plot",
//     priceTag: "Price on Request",
//   },
//   {
//     id: "devpuri-2bhk-811-alt",
//     city: "Raipur",
//     title: "Residential Apartment – 2 BHK (811 sq.ft)",
//     location: "Near Devpuri Chowk, New Dhamtari Road, Raipur",
//     config: "2 BHK apartment • 811 sq.ft",
//     priceInfo: "Price on Request",
//     note:
//       "Another 2 BHK configuration of Residential Apartment near Devpuri Chowk – compact size with value-focused pricing.",
//     statusTag: "Residential Apartment",
//     priceTag: "Price on Request",
//   },
//   {
//     id: "tatva-premium-residential-township",
//     city: "Raipur",
//     title: "TATVA PREMIUM RESIDENTIAL TOWNSHIP",
//     location: "Sadani Darbar, New Dhamtari Road, Boriyakala",
//     config: "Plot size: 1650 to 2680 sqft",
//     priceInfo: "₹3800/sqft + ₹200/sqft",
//     statusTag: "Residential Plot",
//     priceTag: "₹3,800/sqft+",
//   },
//   {
//     id: "shri-ram-lotus-valley-phase-2",
//     city: "Raipur",
//     title: "SHRI RAM LOTUS VALLEY PHASE 2",
//     location: "Near AIIMS, Raipur",
//     config: "2 BHK: 1381 sqft • 3 BHK: 1647.41 sqft",
//     priceInfo: "₹3750/sqft + other charges",
//     statusTag: "Residential",
//     priceTag: "₹3,750/sqft+",
//   },
//   {
//     id: "classic-castle-residential",
//     city: "Raipur",
//     title: "CLASSIC CASTLE RESIDENTIAL",
//     location: "Kachna, Ring Road No. 3 Main Road, Raipur",
//     config: "Land: 8 Acre • Available Units: 60/235",
//     priceInfo: "₹3900/sqft",
//     note: "READY POSSESSION. Total units: 235, Sold out: 175.",
//     statusTag: "Residential",
//     priceTag: "₹3,900/sqft",
//   },
//   {
//     id: "vrindavan-garden-residential",
//     city: "Raipur",
//     title: "VRINDAVAN GARDEN RESIDENTIAL",
//     location: "Near Kendri Railway Station, Singarbhata, New Raipur",
//     config: "13 Acre Township • Plot Sizes: 600, 800, 1100, 1500 sqft",
//     priceInfo: "₹1100 + ₹50 (Club) /sqft",
//     note: "Total Plots: 215. Includes 9000 sqft Commercial area.",
//     statusTag: "Residential Plot",
//     priceTag: "₹1,100/sqft+",
//   },
//   {
//     id: "vinayak-greens-scape",
//     city: "Raipur",
//     title: "VINAYAK GREENS SCAPE (Ganga - Singar City)",
//     location: "Bhatagaon, Raipur",
//     config: "Plot: 1980 sqft (36x55) • East & West Facing",
//     priceInfo: "₹5200/sqft + ₹300",
//     note: "Total Area: 5.5 Acre.",
//     statusTag: "Residential Plot",
//     priceTag: "₹5,200/sqft+",
//   },
//   {
//     id: "linc-serenity-heights-rudra",
//     city: "Raipur",
//     title: "LINC SERENITY HEIGHTS (Rudra)",
//     location: "Labhandi, Raipur",
//     config: "2BHK Apartment",
//     priceInfo: "₹38 Lakh onwards",
//     statusTag: "Residential Apartment",
//     priceTag: "₹38 Lakh+",
//   },
//   {
//     id: "park-serene-residential",
//     city: "Raipur",
//     title: "PARK SERENE RESIDENTIAL",
//     location: "Near REBOUNCE N.H.53 Labhandi",
//     config: "Bungalow & Plots • Rate: ₹6500/sqft",
//     priceInfo: "Starting from ₹35.51 Lakh",
//     statusTag: "Bungalow/Plot",
//     priceTag: "₹35.51 Lakh+",
//   },
//   {
//     id: "solus-pearl-kamal-vihar",
//     city: "Raipur",
//     title: "SOLUS PEARL",
//     location: "Near VY Hospital, Kamal Vihar, Raipur",
//     config: "Plot size: 581 sqft • Construction: 1020 sqft",
//     priceInfo: "₹35.51 Lakh",
//     statusTag: "Residential",
//     priceTag: "₹35.51 Lakh",
//   },
// ];

// function ResidenceCard({ item, index }) {
//   const { title, city, location, config, priceInfo, note, statusTag, priceTag } =
//     item;

//   return (
//     <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#f97316]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
//       {/* Top gradient line */}
//       <div
//         className="absolute inset-x-0 top-0 h-[3px] opacity-90"
//         style={{
//           background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
//         }}
//       />

//       <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
//           <span className="rounded-full bg-black/80 px-3 py-1 text-slate-100 ring-1 ring-white/15">
//             Residential • Raipur
//           </span>
//           <span className="rounded-full bg-white/10 px-3 py-1 text-slate-100 ring-1 ring-white/15">
//             {city}
//           </span>
//           <span className="rounded-full bg-emerald-500/95 px-3 py-1 text-black ring-1 ring-emerald-300/80">
//             {statusTag}
//           </span>
//           <span className="rounded-full bg-[#f97316]/15 px-3 py-1 text-[#fed7aa] ring-1 ring-[#f97316]/40">
//             {priceTag}
//           </span>
//         </div>

//         {/* Title */}
//         <div className="space-y-1">
//           <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
//             {title}
//           </h2>
//         </div>

//         {/* Details box */}
//         <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
//           <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
//             KEY DETAILS
//           </p>
//           <p className="text-sm text-slate-300">
//             <span className="font-semibold text-slate-100">Location:</span>{" "}
//             {location}
//           </p>
//           <p className="text-sm text-slate-300">
//             <span className="font-semibold text-slate-100">
//               Configuration:
//             </span>{" "}
//             {config}
//           </p>
//           <p className="text-sm text-slate-300">
//             <span className="font-semibold text-slate-100">Price Band:</span>{" "}
//             {priceInfo}
//           </p>
//           {note && (
//             <p className="text-xs text-slate-400">
//               <span className="font-semibold text-slate-100">Note:</span> {note}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
//         <div className="flex flex-col sm:flex-row sm:items-center gap-3">
//           <span className="text-xs text-slate-400 sm:flex-1">
//             Share your{" "}
//             <span className="font-semibold text-slate-100">
//               budget and preferred project
//             </span>{" "}
//             – we&apos;ll share exact availability, floor plans and price room
//             for these{" "}
//             <span className="font-semibold text-slate-100">
//               residential options (Price on Request)
//             </span>
//             .
//           </span>

//           <a
//             href="/contact"
//             className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors duration-200"
//             style={{ backgroundColor: CTA_COLOR }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = CTA_HOVER;
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = CTA_COLOR;
//             }}
//           >
//             ENQUIRE RESIDENTIAL
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* -------------------- MAIN COMPONENT -------------------- */

// export default function ResidentialListings({ filters }) {
//   const navigate = useNavigate();

//   const properties =
//     !filters || !filters.category || filters.category === "residential"
//       ? RESIDENCE_OPTIONS
//       : [];

//   if (!properties.length) {
//     return (
//       <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
//         <div className="max-w-6xl mx-auto px-4 md:px-6">
//           <p className="text-center text-slate-400 text-sm">
//             No residential listings match the selected filters right now.
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
//             onClick={() => navigate("/categories")}
//             className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
//           >
//             <span className="text-base md:text-lg">←</span>
//             <span>BACK TO CATEGORIES</span>
//           </button>
//         </div>

//         {/* Heading with motion */}
//         <header className="mb-8 text-center flex flex-col items-center space-y-3">
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
//           >
//             RESIDENTIAL PROPERTY{" "}
//             <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
//               IN RAIPUR (C.G)
//             </span>
//           </motion.h1>
//         </header>

//         {/* Cards grid */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {properties.map((item, index) => (
//             <ResidenceCard key={item.id} item={item} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


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

/* -------------------- NEW DATA (NO PROJECT NAME SHOWN) --------------------
  ✅ Title me "Residential 01" ki jagah "Near/ Nearby/ Area" show hoga
  ✅ Price hamesha: Price on Request
  ✅ Single CTA button
  ✅ Design same (aapke purane card design jaisa)
-------------------------------------------------------------------------- */

const PROPERTY_OPTIONS = [
  // 1
  {
    id: "RES-01",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Sadani Darbar, Boriyakala (New Dhamtari Road)",
    location: "Sadani Darbar, New Dhamtari Road, Boriyakala, Raipur",
    config: "Premium Residential Township (Plots) • Plot size: 1650 – 2680 sq.ft",
    note: "",
    statusTag: "Plot/Township",
    priceTag: "Price on Request",
  },
  // 2
  {
    id: "RES-02",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near AIIMS, Raipur",
    location: "Near AIIMS, Raipur",
    config: "Residential Apartment • 2 BHK: 1381 sq.ft • 3 BHK: 1647.41 sq.ft",
    note: "",
    statusTag: "Apartment",
    priceTag: "Price on Request",
  },
  // 3
  {
    id: "RES-03",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Shankar Nagar, Raipur",
    location: "Near Shankar Nagar, Raipur",
    config: "Residential • Size: ~10,000 sq.ft (approx.)",
    note: "Exact details available on enquiry.",
    statusTag: "Residential",
    priceTag: "Price on Request",
  },
  // 4
  {
    id: "RES-04",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Mahadev Ghat, Bhatagaon Road",
    location: "Near Mahadev Ghat, Bhatagaon Road, Raipur",
    config:
      "Residential Apartment • 2 BHK: 978 SBA / 1220 SBA • 3 BHK: 1657 SBA • 2 BHK (Private Terrace): 1607 SBA",
    note: "Additional charges applicable (as per configuration).",
    statusTag: "Apartment",
    priceTag: "Price on Request",
  },
  // 5
  {
    id: "RES-05",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Nearby Amaltas Castle, Raipur",
    location: "Nearby Amaltas Castle, Raipur",
    config:
      "Residential Plots • Project size: 11.75 acres • Plot sizes: 1500 / 1800 / 2100 / 2400+ sq.ft",
    note: "",
    statusTag: "Plot",
    priceTag: "Price on Request",
  },
  // 6
  {
    id: "RES-06",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "New Dhamtari Road, Boriyakala",
    location: "New Dhamtari Road, Boriyakala, Raipur",
    config: "Residential Plots • Plot size: 711 – 1400 sq.ft",
    note: "Clubhouse / electricity / corner / garden charges may apply.",
    statusTag: "Plot",
    priceTag: "Price on Request",
  },
  // 7
  {
    id: "RES-07",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Daldal Seoni, Mowa",
    location: "Near Daldal Seoni, Mowa, Raipur",
    config:
      "Plots • Bungalow • Flats • Plots: 991 / 1082 / 1476 sq.ft • Flats: 2 BHK (1066/1125) • 3 BHK (1317) • Bungalow: 3 BHK Duplex (Plot 1165 • Slab 2111 sq.ft)",
    note: "Facing-wise options may be available (as per availability).",
    statusTag: "Mixed",
    priceTag: "Price on Request",
  },
  // 8
  {
    id: "RES-08",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Police Housing Colony, Amlidih",
    location: "Amlidih, near Police Housing Colony, Raipur",
    config: "Residential Apartment • 2 BHK: 1360 sq.ft • 3 BHK: 1550 sq.ft",
    note: "Extra charges may apply (confirm on enquiry).",
    statusTag: "Apartment",
    priceTag: "Price on Request",
  },
  // 9
  {
    id: "RES-09",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Devpuri Chowk (New Dhamtari Road)",
    location: "Near Devpuri Chowk, New Dhamtari Road, Raipur",
    config: "Residential Apartment • 2 BHK size: 811 sq.ft",
    note: "",
    statusTag: "Apartment",
    priceTag: "Price on Request",
  },

  // 12
  {
    id: "RES-10",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Vidhan Sabha, Raipur",
    location: "Near Vidhan Sabha, Raipur",
    config: "Premium Residential • Size: 2500 sq.ft and above",
    note: "",
    statusTag: "Premium",
    priceTag: "Price on Request",
  },
  // 13
  {
    id: "RES-11",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Heritage Hospital, Kachna",
    location: "Nearby Heritage Hospital, Kachna, Raipur",
    config: "Bungalow • 3 BHK / 4 BHK options • Project size: 5.35 acres",
    note: "Exact plot/construction sizes available on enquiry.",
    statusTag: "Bungalow",
    priceTag: "Price on Request",
  },
  // 14
  {
    id: "RES-12",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Shankar Nagar, Raipur (Premium)",
    location: "Near Shankar Nagar, Raipur",
    config: "Premium Residential • Size: 4000 sq.ft and above",
    note: "",
    statusTag: "Premium",
    priceTag: "Price on Request",
  },
  // 15
  {
    id: "RES-13",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Kamal Vihar (Near Express Highway)",
    location: "Kamal Vihar, near Express Highway, Raipur",
    config: "Premium Residential • Size: 4000 sq.ft and above",
    note: "",
    statusTag: "Premium",
    priceTag: "Price on Request",
  },
  // 16
  {
    id: "RES-14",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Sayaji & Magneto Mall",
    location: "Near Sayaji and Magneto, Raipur",
    config: "Premium Plot • Size: 4600 sq.ft and above",
    note: "Additional charges may apply.",
    statusTag: "Premium Plot",
    priceTag: "Price on Request",
  },
  // 17
  {
    id: "RES-15",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Kachna, Raipur (Premium Plot)",
    location: "Near Kachna, Raipur",
    config: "Premium Plot • Size: 2200 sq.ft and above",
    note: "Additional charges as applicable.",
    statusTag: "Premium Plot",
    priceTag: "Price on Request",
  },
  // 18
  {
    id: "RES-16",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Sayaji, Raipur (Limited Plots)",
    location: "Near Sayaji, Raipur",
    config: "Premium Plot • Size: 5000+ sq.ft • Area: 4 acres • Total plots: 16",
    note: "Limited plots available (confirm on enquiry).",
    statusTag: "Premium Plot",
    priceTag: "Price on Request",
  },
  // 19
  {
    id: "RES-17",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near VIP Road, Raipur (Premium Plot)",
    location: "Near VIP Road, Raipur",
    config: "Premium Plot • Sizes: 3000 & 8666 sq.ft • Area: 28 acres • Total plots: 118",
    note: "",
    statusTag: "Premium Plot",
    priceTag: "Price on Request",
  },

  // 20 (Both)
  {
    id: "BOTH-01",
    segments: ["residential", "commercial"],
    city: "Naya Raipur (C.G)",
    headline: "Sector 25, Naya Raipur (Residential + Commercial)",
    location: "Sector 25, Naya Raipur, Chhattisgarh",
    config: "Apartments • Studio Apartments • Villas • Commercial Units (sizes vary)",
    note: "Floor-wise options available. Exact sizes/details on enquiry.",
    statusTag: "Both",
    priceTag: "Price on Request",
  },

  // 21 (Commercial)
  {
    id: "COM-01",
    segments: ["commercial"],
    city: "Raipur (C.G)",
    headline: "Near Jaistambh Chowk, Raipur",
    location: "Near Jaistambh Chowk, Raipur",
    config: "Commercial • Floor-wise units available (Ground/First/Second/Third)",
    note: "Other expenses applicable (confirm on enquiry).",
    statusTag: "Commercial",
    priceTag: "Price on Request",
  },
  // 22 (Commercial)
  {
    id: "COM-02",
    segments: ["commercial"],
    city: "Raipur (C.G)",
    headline: "Sabha Road, Mowa (Office Spaces)",
    location: "Sabha Road, Mowa, Raipur",
    config: "Offices (Commercial) • Sizes: 347 – 950 SBA",
    note: "PLC / maintenance / sinking fund / formation / GST etc may apply. Lease/rent may be available.",
    statusTag: "Office",
    priceTag: "Price on Request",
  },
  // 23 (Commercial)
  {
    id: "COM-03",
    segments: ["commercial"],
    city: "Raipur (C.G)",
    headline: "Near Ghadi Chowk, Raipur",
    location: "Near Ghadi Chowk, Raipur, Chhattisgarh",
    config: "Premium Commercial • Shops: 350 – 1238 sq.ft • Offices: 250 – 900 sq.ft",
    note: "Floor-wise options available. Other charges + Registry + GST applicable.",
    statusTag: "Commercial",
    priceTag: "Price on Request",
  },

  // 24
  {
    id: "RES-18",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near 6 Degree, VIP Road",
    location: "Near 6 Degree, VIP Road, Raipur",
    config: "Plots + Villas • Project: 9 acres • Plot sizes: 2000 – 4600 sq.ft • Villas: 3 & 4 BHK (as available)",
    note: "Club/maintenance/PLC may apply.",
    statusTag: "Gated",
    priceTag: "Price on Request",
  },
  // 25
  {
    id: "RES-19",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near Chokar Dhani, Raipur",
    location: "Near Chokar Dhani, Raipur",
    config: "Villas + Plots • Project: 21 acres • Plots: ~3500 – 12000 sq.ft • Villas: 4/5 BHK (as available)",
    note: "Club / sinking fund / maintenance charges may apply.",
    statusTag: "Gated",
    priceTag: "Price on Request",
  },
  // 26
  {
    id: "RES-20",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near VY Hospital, Kamal Vihar (Ready Possession)",
    location: "Near VY Hospital, Kamal Vihar, Raipur",
    config: "Ready Possession • Plot: 581 sq.ft • Construction: 1020 sq.ft",
    note: "Club/electricity/other charges may apply. Other sizes may be available.",
    statusTag: "Ready",
    priceTag: "Price on Request",
  },
  // 27
  {
    id: "RES-21",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Near REBOUNCE, N.H.53 (Labhandi)",
    location: "Near REBOUNCE, N.H.53, Labhandi, Raipur",
    config: "Bungalow + Plots • Sizes vary (as available)",
    note: "Club house / electricity charges may apply.",
    statusTag: "Bungalow/Plot",
    priceTag: "Price on Request",
  },
  // 29
  {
    id: "RES-22",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Labhandi, Raipur (2 BHK Apartment)",
    location: "Labhandi, Raipur",
    config: "2 BHK Apartment",
    note: "More details on enquiry.",
    statusTag: "Apartment",
    priceTag: "Price on Request",
  },
  // 30
  {
    id: "RES-23",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Bhatagaon, Raipur (Residential Plots)",
    location: "Bhatagaon, Raipur",
    config: "Residential Plots • Total area: 5.5 acre • Plot: 1980 sq.ft (36×55) • East/West facing",
    note: "Electricity/clubhouse charges may apply.",
    statusTag: "Plot",
    priceTag: "Price on Request",
  },
  // 32
  {
    id: "RES-24",
    segments: ["residential"],
    city: "Raipur (C.G)",
    headline: "Kachna, Ring Road No. 3 Main Road",
    location: "Kachna, Ring Road No. 3 Main Road, Raipur",
    config: "Residential • Land size: 8 acres",
    note: "Clubhouse / society formation / electricity charges may apply.",
    statusTag: "Residential",
    priceTag: "Price on Request",
  },
  // 33
  {
    id: "RES-25",
    segments: ["residential"],
    city: "New Raipur (C.G)",
    headline: "Near Kendri Railway Station, Singarbhata (New Raipur)",
    location: "Near Kendri Railway Station, Singarbhata, New Raipur",
    config: "Township Plots • 13 acres • Total plots: 215 • Plot sizes: 600 / 800 / 1100 / 1500 sq.ft",
    note: "Commercial/institutional land may be available as per plan (confirm on enquiry).",
    statusTag: "Township",
    priceTag: "Price on Request",
  },
];

/* -------------------- CARD (DESIGN SAME) -------------------- */
function ResidenceCard({ item, modeLabel }) {
  const { city, headline, location, config, note, statusTag, priceTag, id } = item;

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
            {modeLabel} • Raipur
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

        {/* Title (NOW = Near/Area headline) */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
            {headline}
          </h2>
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
            <span className="font-semibold text-slate-100">Configuration:</span>{" "}
            {config}
          </p>

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Price Band:</span>{" "}
            Price on Request
          </p>

          {note ? (
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-100">Note:</span> {note}
            </p>
          ) : null}
        </div>
      </div>

      {/* Bottom CTA (SINGLE BUTTON ONLY) */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your{" "}
            <span className="font-semibold text-slate-100">
              budget + preferred area
            </span>{" "}
            – we&apos;ll share exact availability. Pricing is{" "}
            <span className="font-semibold text-slate-100">Price on Request</span>.
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
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT (SAME HEADING/DESIGN) -------------------- */
export default function ResidentialListings({ filters }) {
  const navigate = useNavigate();

  const category = (filters?.category || "residential").toLowerCase(); // "residential" | "commercial"
  const modeLabel = category === "commercial" ? "COMMERCIAL" : "RESIDENTIAL";

  const properties =
    category === "commercial"
      ? PROPERTY_OPTIONS.filter((x) => x.segments.includes("commercial"))
      : PROPERTY_OPTIONS.filter((x) => x.segments.includes("residential"));

  if (!properties.length) {
    return (
      <section className="bg-slate-950 text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm">
            No listings match the selected filters right now.
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
            onClick={() => navigate("/categories")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </button>
        </div>

        {/* Heading (same as your old design) */}
        <header className="mb-8 text-center flex flex-col items-center space-y-3">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            {modeLabel} PROPERTY{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              IN RAIPUR (C.G)
            </span>
          </motion.h1>
        </header>

        {/* Cards grid (same) */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((item) => (
            <ResidenceCard key={item.id} item={item} modeLabel={modeLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}