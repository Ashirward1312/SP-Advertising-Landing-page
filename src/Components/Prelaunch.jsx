// src/components/Prelaunch.jsx
import React from "react";

const Prelaunch = () => {
  const whyPoints = [
    "Entry at an early price point before wider market launches.",
    "Better choice of plots and units while inventory is still fresh.",
    "Time to plan construction, exit or rental strategy before completion.",
    "Scope for higher appreciation if infrastructure and demand pick up.",
  ];

  const prelaunchTypes = [
    {
      title: "Pre-Launch Properties",
      desc: "Selected pre-launch residential and commercial properties where title and basic documentation have been checked and the project has a realistic development plan.",
    },
    {
      title: "Land For Hospitals & Medical Use",
      desc: "Pre-launch identification of land suitable for hospitals, clinics and medical facilities with focus on access, frontage and institutional zoning.",
    },
    {
      title: "Wedding Lawns, Resorts & Event Land",
      desc: "Upcoming and planned land for wedding lawns, resorts, farmhouses and event spaces — designed for both business use and long-term asset holding.",
    },
    {
      title: "Investment-Grade Plots & Land",
      desc: "Plots and land focused on investment, with attention to planned infrastructure, connectivity and medium to long-term demand.",
    },
    {
      title: "Joint Ventures On Land",
      desc: "JV proposals where landowners, developers and investors can participate together in a pre-launch stage with a clear structure and exit thinking.",
    },
    {
      title: "Pre-Rented & Future Rental Positioning",
      desc: "Properties where the plan is to create pre-rented commercial or mixed-use assets once the project is ready, aligned with income-focused investors.",
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

          <h1
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase"
          >
            Premium Pre-Launch Land & Property Entries
          </h1>

          <p className="mt-2 text-sm sm:text-base font-medium text-orange-100">
            For Early Buyers, Investors & Joint Venture Partners.
          </p>

          <p className="mt-5 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-slate-100/90">
            Our pre-launch campaigns are built for clients who want{" "}
            <span className="font-semibold">
              early, structured entry into plots, land and upcoming developments
            </span>{" "}
            with clarity on title, documentation and long-term potential —
            including VB Tower and curated land in Kachan & Naya Raipur.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "Plots & Land",
              "VB Tower",
              "Kachan / Naya Raipur",
              "Pre-Rented & JVs",
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
            {/* CTA 1 */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f54900] to-[#ff9b2e] px-9 py-3.5 text-base font-semibold text-white shadow-2xl shadow-[#f54900]/40 transition-all duration-300 hover:scale-[1.03] hover:from-[#ff9b2e] hover:to-[#f54900] focus:outline-none focus:ring-2 focus:ring-[#f54900] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>Share Your Pre-Launch Requirement</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            {/* CTA 2 */}
            <a
              href="#why-prelaunch"
              className="inline-flex items-center gap-2 rounded-full ring-2 ring-white/70 px-9 py-3.5 text-base font-semibold text-white/90 shadow-lg transition-all duration-300 hover:bg-white/10 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>Understand The Advantages</span>
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

      {/* VB TOWER */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="relative rounded-3xl bg-white ring-2 ring-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.1)] px-6 py-7 sm:px-8 sm:py-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 to-[#f54900]" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 uppercase">
                  VB Tower – Upcoming Pre-Launch Campaign
                </h2>
                <span className="inline-flex items-center rounded-full bg-[#f54900] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
                  FEATURED OPPORTUNITY
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                VB Tower is an upcoming opportunity where Mahesh Ventures is
                associated for{" "}
                <span className="font-semibold">
                  Sale, Pre-Rented Options, Pure Investment And Joint Venture
                  Discussions
                </span>
                . Designed for both end users and investors who want a balance
                of <span className="font-semibold">Capital Growth</span> and{" "}
                <span className="font-semibold">Rental Potential</span>.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm text-slate-700 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-900 mb-3">
                    PRE-LAUNCH BENEFITS
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Early positioning in a structured upcoming tower.",
                      "Option to explore pre-rented layouts once occupancy starts.",
                      "Scope for JV-based participation for suitable profiles.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f54900]/10 text-[#f54900] flex-shrink-0">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 12h.01"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-900 mb-3">
                    SUITABLE FOR
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Investors looking at pre-launch ticket sizes.",
                      "End users who prefer a known, upcoming tower.",
                      "JV partners exploring development or partial participation.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f54900]/10 text-[#f54900] flex-shrink-0">
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Snapshot card */}
            <div className="rounded-2xl bg-slate-900 text-white px-6 py-6 sm:px-8 sm:py-7 shadow-xl ring-1 ring-white/10">
              <h3 className="text-lg font-bold">At A Glance – VB Tower</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-300 font-medium">Category</dt>
                  <dd className="font-semibold text-white text-right">
                    Upcoming Tower (Pre-Launch)
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-300 font-medium">Options</dt>
                  <dd className="text-right text-slate-100">
                    Sale • Pre-Rented (Future) • Investment • Joint Venture
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-300 font-medium">Ideal For</dt>
                  <dd className="text-right text-slate-100">
                    Investors • End Users • JV Partners
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-slate-400 border-t border-white/10 pt-3">
                Detailed information is shared one-to-one after understanding
                your requirement, ticket size and investment profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF PRE-LAUNCH */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
              WHAT WE HANDLE
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 uppercase">
              Pre-Launch And Upcoming Opportunities
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base text-slate-600">
              Carefully selected pre-launch properties, land and JV structures
              where documentation and basic due diligence have been checked.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {prelaunchTypes.map((type) => (
              <div
                key={type.title}
                className="group rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-xl transition-all duration-300 hover:ring-2 hover:ring-[#f54900]/70 hover:shadow-[0_15px_40px_rgba(245,73,0,0.12)] hover:scale-[1.02]"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 uppercase transition-colors duration-300 group-hover:text-[#f54900]">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KACHAN & NAYA RAIPUR */}
      <section className="py-16 sm:py-20 bg-[#f5f7fb]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white ring-1 ring-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] px-6 py-7 sm:px-8 sm:py-9">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 uppercase">
              Kachan & Naya Raipur – Rent, Lease & Pre-Launch Corridors
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 border-b border-slate-100 pb-5">
              Along the Kachan and Naya Raipur belt, Mahesh Ventures works with
              owners and developers on{" "}
              <span className="font-semibold">
                Land Purchase, Rent And Lease Structures
              </span>{" "}
              as well as select pre-launch opportunities — for clients seeking a
              mix of stability and upside.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-700">
              <ul className="space-y-3">
                {kachanLeft.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f54900] text-white flex-shrink-0">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {kachanRight.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f54900] text-white flex-shrink-0">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (commented) */}
      {/* ...same CTA, font sizes already paragraph style ... */}
    </section>
  );
};

export default Prelaunch;