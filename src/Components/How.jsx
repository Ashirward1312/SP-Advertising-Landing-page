import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ================== Accessibility Hooks: Motion prefs + Reveal on scroll ================== */
// Users jinko animations pasand nahi (prefers-reduced-motion), unke liye animations skip
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

// Element viewport me aate hi halka fade/slide-in effect
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

/* ================== Founder Content ================== */
/*
  NOTE:
  - A) Remote image (default): Neeche Unsplash portrait use ho raha hai.
  - B) Local image: Niche 2 lines uncomment karo aur apna path laga do.
     import founderImg from "../assets/founder.jpg";
     const FOUNDER_PHOTO = founderImg;
*/
const FOUNDER_PHOTO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNT1d_tTUC198Lg5sA-WexMWd9yziJ19nKQ&s"; // clean professional portrait

const FOUNDER = {
  quote: "We believe we are enablers of people's dreams.",
  name: "Founder Name",
  role: "Founder, Your Brand",
  bio: "We’re a modern real estate team focused on verified data, transparent pricing and fast closures — so every client can move with confidence.",
};

/* ================== Features (icons + text) ================== */
const features = [
  { icon: <FaUsers size={28} aria-hidden="true" />, title: "Trusted Team", desc: "Verified experts ensuring reliability and professionalism in every deal." },
  { icon: <FaHandsHelping size={28} aria-hidden="true" />, title: "Customer First", desc: "We prioritize your needs, offering guidance every step of the way." },
  { icon: <FaCheckCircle size={28} aria-hidden="true" />, title: "Transparent Process", desc: "Clear pricing, honest insights, and end-to-end support for peace of mind." },
  { icon: <FaShieldAlt size={28} aria-hidden="true" />, title: "Verified Listings", desc: "Each property is vetted with documentation checks and on‑ground verification." },
  // { icon: <FaBolt size={28} aria-hidden="true" />, title: "Fast Closures", desc: "Streamlined paperwork and coordination to close deals quickly and smoothly." },
  // { icon: <FaMapMarkerAlt size={28} aria-hidden="true" />, title: "Local Expertise", desc: "Neighborhood insights, pricing trends, and guidance you can trust." },
];

/* ================== Main Component ================== */
const HowWeAre = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroRef, heroInView] = useReveal(prefersReducedMotion);
  const [gridRef, gridInView] = useReveal(prefersReducedMotion);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================== HERO: 2-column (Left photo, Right content) ================== */}
        <div
          ref={heroRef}
          className={`relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 text-white ring-1 ring-white/10 p-6 sm:p-10 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Subtle orange glows in background */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(700px 320px at 20% 15%, rgba(251,146,60,0.14), transparent 60%), radial-gradient(800px 360px at 85% 80%, rgba(245,158,11,0.12), transparent 60%)",
            }}
          />

          {/* Header pill */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-white/15">
              WHO WE ARE
            </span>
          </div>

          {/* Grid: Image (left) + Content (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Founder Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {FOUNDER_PHOTO ? (
                <img
                  src={FOUNDER_PHOTO}
                  alt="Founder portrait (representative)"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full object-cover object-center ring-4 ring-orange-400/80 shadow-2xl"
                />
              ) : (
                <div
                  className="h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full ring-4 ring-orange-400/70 shadow-2xl bg-gradient-to-tr from-slate-800 to-slate-700"
                  aria-label="Founder image placeholder"
                />
              )}
            </div>

            {/* Right: Details / Description */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {FOUNDER.quote}
              </h2>
              <p className="mt-4 text-white/85 text-sm sm:text-base font-poppins max-w-2xl">
                {FOUNDER.bio}
              </p>
              {(FOUNDER.name || FOUNDER.role) && (
                <div className="mt-6">
                  {FOUNDER.name && <div className="text-base sm:text-lg font-semibold">{FOUNDER.name}</div>}
                  {FOUNDER.role && <div className="text-sm text-white/80">{FOUNDER.role}</div>}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================== Section header for features ================== */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 inline-block">
            Who We Are
            <span className="block w-16 h-1 bg-orange-400 rounded mt-2 mx-auto" />
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
            We focus on transparency, trust, and excellent service for our clients and partners.
          </p>
        </div>

        {/* ================== Features: Vertical timeline cards ================== */}
        <div
          ref={gridRef}
          className={`relative mt-10 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Vertical connector line (decorative) */}
          <div
            aria-hidden="true"
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-200 via-orange-200/70 to-transparent"
          />
          <ol className="space-y-6">
            {features.map((f, i) => (
              <li key={i} className="relative pl-16 sm:pl-20">
                {/* Icon pin (left) */}
                <span className="absolute left-0 top-1">
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 text-orange-600 ring-4 ring-white shadow-sm">
                    {f.icon}
                  </span>
                </span>

                {/* Card content (right) */}
                <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                  <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                  <p className="mt-1.5 text-gray-600 font-poppins text-sm sm:text-[15px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowWeAre;