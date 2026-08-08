import { useEffect, useRef, useState } from "react";

/* Accessibility: Reduced Motion Hook */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setPrefers(e.matches);

    setPrefers(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);

    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
  }, []);

  return prefers;
}

/* Reveal on Scroll Animation */
function useReveal(prefersReducedMotion) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );

    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return [ref, inView];
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [leftRef, leftInView] = useReveal(prefersReducedMotion);
  const [rightRef, rightInView] = useReveal(prefersReducedMotion);
  const [projectsRef, projectsInView] = useReveal(prefersReducedMotion);

  const STATS = [
    // { label: "Active Listings", value: "12k+" },
    // { label: "Cities Covered", value: "24+" },
    // { label: "Verified Agents", value: "1.5k+" },
    // { label: "Avg. Days to Sell", value: "21" },
  ];

  const PROJECTS = [
    {
      name: "Classic Castle",
      tag: "Premium",
      desc: "Timeless design with spacious planning for comfortable family living.",
      points: ["Spacious layout", "Premium feel", "Strong planning"],
    },
    {
      name: "Rais",
      tag: "Value",
      desc: "Practical homes built for daily convenience and smart budget choices.",
      points: ["Value-focused", "Functional design", "Easy living"],
    },
    {
      name: "VB Tower",
      tag: "Tower",
      desc: "Modern tower lifestyle with efficient spaces and community comfort.",
      points: ["Modern look", "Low maintenance", "Good community"],
    },
    {
      name: "Park Serene",
      tag: "Green",
      desc: "Peaceful surroundings with a calm vibe and open-space feel.",
      points: ["Calm environment", "Open feel", "Relaxed lifestyle"],
    },
    {
      name: "Krishna Sattvam",
      tag: "Family",
      desc: "Balanced lifestyle project focused on comfort, value and practicality.",
      points: ["Family-first", "Balanced pricing", "Comfort planning"],
    },
  ];

  return (
    <section
      className="relative w-full bg-gradient-to-b from-orange-50 to-white py-12 sm:py-14 lg:py-16"
      id="about"
    >
      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[95vw] -translate-x-1/2 bg-gradient-to-tr from-orange-400/20 via-yellow-400/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-100">
            ABOUT US
          </span>
          <h2 className="heading-font mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            BUILT FOR BUYERS, SELLERS AND TRUSTED AGENTS
          </h2>
        </div>

        {/* Grid Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 transition-all duration-700 ${
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="heading-font text-2xl font-semibold text-slate-900">WHO WE ARE</h3>
            <p className="paragraph-font mt-3 text-slate-600 leading-relaxed">
              AI-powered insights, real-time updates, and expert assistance — ensuring your journey
              stays transparent, smart, and effortless.
            </p>

            <ul className="mt-4 space-y-2">
              {[
                "Verified owners & agents with KYC",
                "Transparent pricing and live data insights",
                "24/7 support — from consultation to documentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                    <CheckIcon />
                  </span>
                  <span className="paragraph-font text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 paragraph-font"
              >
                CONTACT US
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 transition-all duration-700 ${
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-orange-400/15 via-yellow-400/15 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                <div className="col-span-7 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Office workspace"
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                      alt="Team collaboration"
                      className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                      alt="Client discussion"
                      className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS (About Us ke niche) - FIXED 1 ROW ON DESKTOP */}
        <div
          ref={projectsRef}
          id="projects"
          className={`mt-12 transition-all duration-700 ${
            projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Center heading + CTAs (center) */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-100">
              PROJECTS
            </span>

            <h3 className="heading-font mt-3 text-2xl lg:text-3xl font-bold text-slate-900">
              Explore Our Featured Projects
            </h3>

           

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 paragraph-font"
              >
                VIEW ALL PROJECTS
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-200 paragraph-font"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>

          {/* Cards:
              - Mobile/Tablet: responsive grid
              - Desktop (lg+): EXACT 5 cards in one row (no cut) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="relative h-full overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
              >
                {/* top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300"
                  aria-hidden="true"
                />

                <div className="p-5 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="heading-font text-lg font-semibold text-slate-900 truncate">
                        {p.name}
                      </h4>
                      <span className="mt-2 inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                        {p.tag}
                      </span>
                    </div>

                    <div className="shrink-0 h-10 w-10 rounded-xl bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center text-orange-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M7 21V8l5-4 5 4v13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 21v-6h4v6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="paragraph-font mt-3 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                          <CheckIcon />
                        </span>
                        <span className="paragraph-font text-slate-700">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* bottom row always aligned */}
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <a
                      href={`/contact?project=${encodeURIComponent(p.name)}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
                    >
                      Enquire <ArrowIcon />
                    </a>
                    <a
                      href="/projects"
                      className="text-xs font-medium text-slate-500 hover:text-slate-700"
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 sm:p-5 text-center hover:shadow-md transition"
            >
              <div className="text-2xl font-bold text-orange-600">{s.value}</div>
              <div className="paragraph-font mt-1 text-xs sm:text-sm text-slate-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}