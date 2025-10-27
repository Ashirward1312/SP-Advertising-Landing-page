import { useEffect, useRef, useState } from "react";

/* ------------------- Services Data ------------------- */
const SERVICES = [
  {
    id: "investment",
    title: "Investment Opportunity",
    desc: "Explore profitable investment options with expert guidance.",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lands",
    title: "Lands & Plots Buy, Sell, & Rent",
    desc: "Buy, sell, or rent land and plots with transparency and ease.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "redevelopment",
    title: "Redevelopment, Research & Valuation",
    desc: "Get expert insights for redevelopment projects and valuations.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "legal",
    title: "Legal Assistance & Financial Advisory",
    desc: "We provide legal documentation support and financial advice.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "other_services",
    title: "Architect, Interiors, Vastu & Turnkey Solutions",
    desc: "Other services like sub-contracts, furniture shops, and interiors.",
    image:
      "https://images.unsplash.com/photo-1581091012184-7a6f3cf0e8b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "residential",
    title: "Residential & Commercial Buy, Sell, & Lease",
    desc: "Complete property solutions for residential and commercial needs.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ------------------- Reduced Motion Hook ------------------- */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setPrefers(e.matches);
    setPrefers(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
  }, []);
  return prefers;
}

/* ------------------- Reveal on Scroll Hook ------------------- */
function useReveal(prefersReducedMotion) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);
  return [ref, inView];
}

/* ------------------- Single Service Card ------------------- */
function ServiceCard({ item, delay = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useReveal(prefersReducedMotion);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms` }}
      className={`group relative isolate overflow-hidden rounded-2xl bg-white ring-1 ring-orange-200 shadow-sm transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:-translate-y-1.5 hover:shadow-xl`}
    >
      {/* Orange Glow on Hover */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-orange-200/20 to-orange-400/20 opacity-0 blur-xl transition duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Top Image */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        {/* Floating badge */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-white">
            {item.title.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-1.5 text-sm text-slate-600 font-poppins leading-relaxed">{item.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-orange-500">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Trusted service</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------- Services Section ------------------- */
export default function Services() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="service" className="relative w-full bg-gradient-to-b from-orange-50 to-white py-10 sm:py-12 lg:py-14">
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[90vw] -translate-x-1/2 bg-gradient-to-tr from-orange-200/10 via-orange-300/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
            Our Services
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need for a smooth property journey
          </h2>
          <p className="mt-2 text-slate-600 font-poppins">
            From discovery to documentation — we handle it all with transparency and speed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} item={s} delay={prefersReducedMotion ? 0 : 100 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
