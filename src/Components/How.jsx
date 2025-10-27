import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";
 // Example local image import

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

/* ================== Founder Content (IMAGE YAHAN SET KAREIN) ================== */
// NOTE: Unsplash/remote image use na karna ho to abhi empty chhoda hai.
// Local file ka example:
// import founderImg from "../assets/founder.jpg";
// const FOUNDER_PHOTO = founderImg;

const FOUNDER_PHOTO = ""; // TODO: yahan apna image URL ya local import set karein (empty = placeholder shown)

const FOUNDER = {
  quote: "We believe we are enablers of people's dreams.",
  name: "Founder Name",            // optional
  role: "Founder, Your Brand",     // optional
  bio:
    "We’re a modern real estate team focused on verified data, transparent pricing and fast closures — so every client can move with confidence.",
};

/* ================== Features (icons + text) ================== */
const features = [
  { icon: <FaUsers size={28} aria-hidden="true" />, title: "Trusted Team", desc: "Verified experts ensuring reliability and professionalism in every deal." },
  { icon: <FaHandsHelping size={28} aria-hidden="true" />, title: "Customer First", desc: "We prioritize your needs, offering guidance every step of the way." },
  { icon: <FaCheckCircle size={28} aria-hidden="true" />, title: "Transparent Process", desc: "Clear pricing, honest insights, and end-to-end support for peace of mind." },

  { icon: <FaShieldAlt size={28} aria-hidden="true" />, title: "Verified Listings", desc: "Each property is vetted with documentation checks and on‑ground verification." },
  { icon: <FaBolt size={28} aria-hidden="true" />, title: "Fast Closures", desc: "Streamlined paperwork and coordination to close deals quickly and smoothly." },
  { icon: <FaMapMarkerAlt size={28} aria-hidden="true" />, title: "Local Expertise", desc: "Neighborhood insights, pricing trends, and guidance you can trust." },
];

/* ================== Main Component ================== */
const HowWeAre = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroRef, heroInView] = useReveal(prefersReducedMotion);
  const [gridRef, gridInView] = useReveal(prefersReducedMotion);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================== Dark Glass Card (Two-column layout) ==================
           - Left: Big circular image (placeholder if no image)
           - Right: Quote + Bio + Name/Role
        */}
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
            {/* ---------- Left: Founder Image (bigger) ---------- */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {/* If image provided -> show it, else show clean placeholder */}
              {FOUNDER_PHOTO ? (
                <img
                  src={FOUNDER_PHOTO}
                  alt="Founder portrait"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full object-cover object-center ring-4 ring-orange-400/80 shadow-2xl"
                />
              ) : (
                // Placeholder: empty circle with orange ring (no external image)
                <div
                  className="h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-full ring-4 ring-orange-400/70 shadow-2xl bg-gradient-to-tr from-slate-800 to-slate-700"
                  aria-label="Founder image placeholder"
                />
              )}
            </div>

            {/* ---------- Right: Details / Description ---------- */}
            <div className="lg:col-span-7">
              {/* Main quote */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {FOUNDER.quote}
              </h2>

              {/* Short bio/description */}
              <p className="mt-4 text-white/85 text-sm sm:text-base font-poppins max-w-2xl">
                {FOUNDER.bio}
              </p>

              {/* Name + role (optional) */}
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

        {/* ================== Features Grid ================== */}
        <div
          ref={gridRef}
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-500 rounded-full mb-4 mx-auto">
                {f.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-600 font-poppins text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeAre;