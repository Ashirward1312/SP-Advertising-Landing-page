// src/components/Prelaunch.jsx
import React from "react";

const Prelaunch = () => {
  const whyPoints = [
    "Entry at an early price point before wider market launches.",
    "Better choice of plots and units while inventory is still fresh.",
    "Time to plan construction, exit or rental strategy before completion.",
    "Scope for higher appreciation if infrastructure and demand pick up.",
  ];

  // ✅ Pre-launch & upcoming specific options
  const prelaunchTypes = [
    {
      title: "Near Kachna – 2,500+ sq.ft Plots",
      desc: "Pre-launch residential plots approx 2,500 sq.ft and above near Kachna belt – suitable for end use and investment.",
    },
    {
      title: "VIP Road – 3,000 to 6,000 sq.ft (5 min from Airport)",
      desc: "Premium pre-launch plots approx 3,000 to 6,000 sq.ft near VIP Road, around 5 minutes from the airport.",
    },
    {
      title: "Near Magneto – 5,000+ sq.ft",
      desc: "Pre-launch plots approx 5,000 sq.ft and above near Magneto – suitable for commercial or mixed-use planning.",
    },
    {
      title: "Near Boriyakala – 1,500 to 2,000+ sq.ft",
      desc: "Plots approx 1,500 to 2,000 sq.ft and above near Boriyakala with good approach and future growth potential.",
    },
    {
      title: "Near Saddu – 1,000 sq.ft Plots",
      desc: "Compact approx 1,000 sq.ft pre-launch plots near Saddu – ideal for first-time buyers and investors.",
    },
    {
      title: "Near Naya Raipur – Studio Apartment & Luxury Villa",
      desc: "Upcoming pre-launch concepts for studio apartments and luxury villas near the Naya Raipur corridor.",
    },
  ];

  const kachanLeft = [
    "Residential And Plotted Developments.",
    "Commercial And Mixed-Use Projects.",
    "Institutional And Hospital-Oriented Land.",
  ];

  const kachanRight = [
    "Rent And Lease Options For Long-Term Occupiers.",
    "Investment-Led Land Banking For Future Growth.",
    "Pre-Launch Entry In Planned Projects In This Belt.",
  ];

  return (
    <section id="prelaunch" className="relative w-full bg-white text-slate-900">
      {/* HERO */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 sm:py-24 lg:py-28">
        <img
          src="https://images.unsplash.com/photo-1541888946744-8d00916f9821?q=80&w=2940&auto=format&fit=crop"
          alt="City skyline representing pre-launch real estate opportunities"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-slate-950/90" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-100 shadow-lg backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f54900]" />
            <span>PRE-LAUNCH CAMPAIGNS • MAHESH VENTURES</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
            Premium Pre-Launch Land & Property Entries
          </h1>

          <p className="mt-2 text-sm sm:text-base font-medium text-orange-100">
            FOR EARLY BUYERS, INVESTORS & JOINT VENTURE PARTNERS.
          </p>

          <p className="mt-5 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-slate-100/90">
            Our pre-launch campaigns are built for clients who want{" "}
            <span className="font-semibold">
              early, structured entry into plots, land and upcoming developments
            </span>{" "}
            with clarity on title, documentation and long-term potential —
            including curated options near Kachna, VIP Road, Magneto,
            Boriyakala, Saddu and Naya Raipur.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "PLOTS & LAND",
              "KACHNA / VIP ROAD",
              "NAYA RAIPUR",
              "PRE-RENTED & JVS",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-orange-100 ring-1 ring-white/20"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* CTA 2 */}
            <a
              href="#why-prelaunch"
              className="inline-flex items-center gap-2 rounded-full ring-2 ring-white/70 px-9 py-3.5 text-base font-semibold text-white/90 shadow-lg transition-all duration-300 hover:bg-white/10 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>UNDERSTAND THE ADVANTAGES</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* WHY PRE-LAUNCH */}
      <section
        id="why-prelaunch"
        className="py-20 sm:py-24 bg-[#f5f7fb] border-b border-slate-100"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white ring-1 ring-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
              WHY PRE-LAUNCH CAN WORK FOR YOU
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[30px] font-semibold text-slate-900 leading-snug uppercase">
              Why Consider Pre-Launch Plots & Land For Purchase Or Investment?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Early-stage entries can unlock{" "}
              <span className="font-semibold text-slate-900">
                Better Pricing, Better Choice And Better Planning
              </span>
              . Mahesh Ventures focuses only on those pre-launch opportunities
              where the fundamentals are stronger than the marketing.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {whyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f54900] text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRE-LAUNCH & UPCOMING PROJECTS – PREMIUM CARDS (NO ICON CIRCLE, LESS TOP SPACE) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
              PRE-LAUNCH & UPCOMING PROJECTS
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 uppercase">
              Key Pre-Launch Locations & Concepts
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Curated pre-launch options near Kachna, VIP Road, Magneto,
              Boriyakala, Saddu and Naya Raipur – with focused ticket sizes and
              clear title positioning.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prelaunchTypes.map((type, index) => (
              <div
                key={type.title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ring-1 ring-white/10 text-slate-100 shadow-[0_16px_50px_rgba(15,23,42,0.9)] transition-all duration-300 hover:ring-[#f54900]/80 hover:shadow-[0_22px_70px_rgba(245,73,0,0.35)] hover:-translate-y-[4px]"
              >
                {/* Top gradient strip */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#f54900] via-[#ff9b2e] to-transparent opacity-90" />

                <div className="relative px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7 space-y-3">
                
                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug uppercase tracking-wide group-hover:text-[#ff9b2e]">
                    {type.title}
                  </h3>

                  {/* Divider line */}
                  <div className="h-px w-16 bg-gradient-to-r from-[#f54900] to-transparent opacity-80" />

                  {/* Description */}
                  <p className="text-sm text-slate-200/85 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
};

export default Prelaunch;