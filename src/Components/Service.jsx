import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaMapMarkerAlt,
  FaTools,
  FaGavel,
  FaDraftingCompass,
  FaBuilding,
  FaArrowLeft,          // ⬅️ back icon
} from "react-icons/fa";

/* ------------------- Services Data ------------------- */
const SERVICES = [
  {
    id: "investment",
    title: "Investment Opportunity",
    desc: "Explore profitable investment options with expert guidance.",
    icon: <FaChartLine size={22} aria-hidden="true" />,
  },
  {
    id: "lands",
    title: "Lands & Plots Buy, Sell, & Rent",
    desc: "Buy, sell, or rent land and plots with transparency and ease.",
    icon: <FaMapMarkerAlt size={22} aria-hidden="true" />,
  },
  {
    id: "redevelopment",
    title: "Redevelopment, Research & Valuation",
    desc: "Get expert insights for redevelopment projects and valuations.",
    icon: <FaTools size={22} aria-hidden="true" />,
  },
  {
    id: "legal",
    title: "Legal Assistance & Financial Advisory",
    desc: "We provide legal documentation support and financial advice.",
    icon: <FaGavel size={22} aria-hidden="true" />,
  },
  {
    id: "other_services",
    title: "Turnkey Solutions",
    desc: "Other services like sub-contracts, furniture shops, and interiors.",
    icon: <FaDraftingCompass size={22} aria-hidden="true" />,
  },
  {
    id: "residential",
    title: "Residential & Commercial Buy, Sell, & Lease",
    desc: "Complete property solutions for residential and commercial needs.",
    icon: <FaBuilding size={22} aria-hidden="true" />,
  },
];

/* ------------------- Reduced Motion Hook ------------------- */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setPrefers(e.matches);

    setPrefers(mq.matches);
    mq.addEventListener
      ? mq.addEventListener("change", onChange)
      : mq.addListener(onChange);

    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", onChange)
        : mq.removeListener(onChange);
  }, []);

  return prefers;
}

/* ------------------- Reveal Hook ------------------- */
function useReveal(prefersReducedMotion) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );

    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return [ref, inView];
}

/* ------------------- Service Card ------------------- */
function ServiceCard({ item, delay = 0, onContactClick }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [ref, inView] = useReveal(prefersReducedMotion);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms` }}
      className={`group relative isolate overflow-hidden rounded-2xl bg-white ring-1 ring-orange-200 shadow-sm transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } hover:-translate-y-1.5 hover:shadow-xl`}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-tr from-orange-200/20 to-orange-400/20 opacity-0 blur-xl transition duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Icon + Title */}
      <div className="p-5 sm:p-6 pb-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 uppercase">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {item.desc}
        </p>

        <div className="mt-4">
          {/* ❌ href="#contact" hata diya, route pe le jaa rahe hain */}
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 transition uppercase"
          >
            Contact Us
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------- Services Section ------------------- */
export default function Services() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section
      id="service"
      className="relative w-full bg-gradient-to-b from-orange-50 to-white py-10 sm:py-12 lg:py-14"
    >
      {/* Decorative Blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[90vw] -translate-x-1/2 bg-gradient-to-tr from-orange-200/10 via-orange-300/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* 🔙 Back to Home - header ke niche left side */}
  <div className="mt-4 sm:mt-6 mb-6 flex justify-start">
   <button
  type="button"
  onClick={() => navigate("/")}
  className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-orange-700 shadow-sm hover:bg-orange-50 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition transform"
>
  <FaArrowLeft className="h-3.5 w-3.5" />
  Back to Home
</button>
  </div>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-orange-200 uppercase">
            Our Services
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 uppercase">
            Everything You Need For A Smooth Property Journey
          </h2>

          <p className="mt-2 text-slate-600">
            From Discovery To Documentation — We Handle It All.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              item={s}
              delay={prefersReducedMotion ? 0 : i * 100}
              onContactClick={handleContactClick}
            />
          ))}
        </div>

        {/* Neeche ka old "Back To Home" button hata diya */}
      </div>
    </section>
  );
}