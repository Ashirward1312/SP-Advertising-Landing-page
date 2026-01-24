import React, { useEffect } from "react";

const B2B = () => {
  // ✅ SEO: Page Title + Meta Description + Keywords (sirf B2B page ke liye)
  useEffect(() => {
    // TITLE
    document.title =
      "Premium B2B Land & Property In Raipur | Mahesh Ventures";

    // META DESCRIPTION
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Premium B2B land and property deals in Raipur (C.G.) by Mahesh Ventures. Ready land parcels, joint ventures, pre-rented commercial assets and institutional plots curated for investors, developers and institutions."
      );

    // META KEYWORDS
    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "B2B real estate Raipur, land deals Raipur, premium land Raipur, joint venture land Raipur, pre rented property Raipur, commercial property Raipur, institutional land Raipur, Mahesh Ventures"
      );
  }, []);

  const focusAreas = [
    {
      title: "Ready land for premium projects",
      tag: "Ready Land",
      desc: "Land parcels for residential layouts, commercial projects and institutional use, filtered for documentation and viability.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Strategic JV structuring",
      tag: "Joint Ventures",
      desc: "Joint ventures between landowners, developers and investors with clear structures for sharing, roles and exit.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Income-generating properties",
      tag: "Pre-Rented Assets",
      desc: "Pre-rented commercial properties with existing tenants and stable rentals for predictable cash flows.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Land for hospitals & investments",
      tag: "Purpose-Built",
      desc: "Plots for hospitals, investment, residential townships and commercial use, aligned with zoning and demand.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const whyPoints = [
    "Every land parcel and property is pre-filtered for documentation, title clarity and basic due diligence.",
    "Locations are chosen for real infrastructure, connectivity and absorption — not just marketing buzz.",
    "Structures are designed to be investor-friendly for joint ventures and ready pre-rented deals.",
    "Recommendations are aligned with your investment horizon, risk appetite and capital deployment plan.",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Requirement mapping",
      desc: "We understand capital size, target returns, timelines and risk appetite before suggesting opportunities.",
    },
    {
      num: "02",
      title: "Shortlisting & Initial evaluation",
      desc: "Only those land and asset options are shared which pass documentation, location and basic commercial filters.",
    },
    {
      num: "03",
      title: "Structuring & Transaction support",
      desc: "JV structures, term sheets and coordination with your legal & financial advisors.",
    },
  ];

  const whoProfiles = [
    {
      title: "Developers & Builders",
      desc: "Townships, plotted developments, residential and commercial projects.",
    },
    {
      title: "Investors & Family offices",
      desc: "Yield-focused portfolios and long-term land banking strategies.",
    },
    {
      title: "Land Owners",
      desc: "Structuring joint ventures, outright sales and asset partnerships.",
    },
    {
      title: "Corporates & Healthcare",
      desc: "Campuses, clinics, hospitals and expansion-led real estate.",
    },
  ];

  return (
    <section id="b2b" className="relative w-full bg-white text-slate-900">
      {/* HERO */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-slate-900/80" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-100 shadow-lg backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f54900]" />
            <span>B2B Real Estate • Mahesh Ventures</span>
          </div>

          <h1
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight uppercase
             bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400
             bg-clip-text text-transparent
             hover:from-orange-500 hover:via-amber-400 hover:to-yellow-500
             transition-colors duration-300"
          >
            Premium B2B Land & Property Deals in Raipur (C.G)
          </h1>
          <p className="mt-2 text-base sm:text-lg font-medium text-orange-100">
            FOR INVESTORS, DEVELOPERS & INSTITUTIONS.
          </p>

          <p className="mt-5 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-slate-100/90">
            Mahesh Ventures (by Pradeep Maheshwari) specialises in{" "}
            <span className="font-semibold">
              ready Land Properties, Joint ventures, Pre-rented assets
            </span>{" "}
            and purpose-built plots for hospitals, investment, residential and
            commercial projects — curated for clients who value clarity,
            location and long-term returns.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "READY LAND",
              "JOINT VENTURES",
              "PRE-RENTED ASSETS",
              "INSTITUTIONAL LAND",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-orange-100 ring-1 ring-white/20"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#focus"
              className="inline-flex items-center gap-2 rounded-full ring-2 ring-white/70 px-9 py-3.5 text-base font-semibold text-white/90 shadow-lg transition-all duration-300 hover:bg-white/10 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span>VIEW FOCUS AREAS</span>
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

      {/* FOCUS AREAS */}
      <section id="focus" className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
              Our B2B Focus
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight uppercase">
              Curated opportunities, not generic listings
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              Every opportunity is filtered for{" "}
              <span className="font-medium text-slate-900">
                Title clarity, Documentation, Location and Viability
              </span>
              . We move only a limited number of serious B2B deals each year.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => (
              <article
                key={item.tag}
                className="group relative overflow-hidden bg-white shadow-xl ring-1 ring-slate-100 transition-all duration-500 transform hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(245,73,0,0.15)]"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
                  borderRadius: "0.75rem",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#f54900] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                  }}
                />

                <div className="flex flex-col px-6 py-6 sm:py-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white shadow-xl group-hover:bg-[#f54900] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[#f54900]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f54900] ring-1 ring-[#f54900]/30 w-fit">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-2 uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-grow">
                    {item.desc}
                  </p>
                  <a
                    href="/contact"
                    className="mt-4 text-sm font-bold text-slate-900 transition-colors inline-flex items-center group-hover:text-[#f54900]"
                  >
                    Discuss this type of deal
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE + WHO WE WORK WITH */}
      <section className="py-20 sm:py-24 bg-[#f5f7fb]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Difference */}
            <div className="rounded-3xl bg-[#f9fbff] px-7 py-8 sm:px-10 sm:py-12 ring-1 ring-slate-200 shadow-xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
                The Mahesh Ventures difference
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-snug text-slate-900 uppercase">
                An Investment-First Way Of Doing B2B Real Estate
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                We are not inventory-pushers. We start with{" "}
                <span className="font-semibold text-slate-900">
                  Your Capital, Risk and Return Expectations
                </span>{" "}
                and then curate deals that genuinely fit — instead of forcing
                whatever is available in the market.
              </p>

              <div className="mt-8 space-y-4">
                {whyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#f54900] text-white flex-shrink-0 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <p className="text-base text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who we work with */}
            <div className="relative rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 overflow-hidden">
              <div className="h-1 w-full bg-[#f54900]/80" />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 uppercase">
                  Who we work with
                </h3>
                <div className="mt-3 h-px w-16 bg-[#f54900]/50 rounded-full" />
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  We partner with{" "}
                  <span className="font-semibold text-slate-900">
                    Developers, Land owners, Family Offices, Corporates and
                    Healthcare Institutions
                  </span>{" "}
                  to structure B2B deals built for repeat business and
                  long-term portfolios.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whoProfiles.map((profile) => (
                    <div
                      key={profile.title}
                      className="group rounded-2xl bg:white ring-1 ring-slate-200 shadow-md px-5 py-5 text-left transition-all duration-300 hover:ring-[#f54900] hover:shadow-[0_0px_50px_rgba(245,73,0,0.15)] hover:bg-[#fffdfb] relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          boxShadow:
                            "inset 0 0 20px rgba(245, 73, 0, 0.08)",
                        }}
                      />
                      <p className="text-base font-bold text-slate-900 uppercase transition-colors duration-300 group-hover:text-[#f54900]">
                        {profile.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        {profile.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24 bg:white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#f54900]">
              The client journey
            </p>
          </div>

          <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-8 pt-6">
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                className="group relative flex flex-col items-center text-center p-6 bg-white rounded-2xl ring-1 ring-slate-100 shadow-xl transition-all duration-300 hover:ring-[#f54900]/70 hover:shadow-[0_16px_50px_rgba(245,73,0,0.15)]"
              >
                <div className="absolute top-0 transform -translate-y-1/2 flex flex-col items-center">
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-lg font-bold text-white shadow-lg transition-colors duration-300 group-hover:bg-[#f54900]">
                    {step.num}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900 uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 h-10 w-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default B2B;