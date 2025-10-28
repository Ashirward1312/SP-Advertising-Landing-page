import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ================== Accessibility Hooks ================== */
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

/* ================== Founder Content ================== */
const FOUNDER_PHOTO = ""; // Add founder image URL here
const FOUNDER = {
  quote: "We believe we are enablers of people's dreams.",
  name: "Founder Name",
  role: "Founder, Your Brand",
  bio: "We’re a modern real estate team focused on verified data, transparent pricing and fast closures — so every client can move with confidence.",
};

/* ================== Features ================== */
const features = [
  {
    icon: <FaUsers size={26} aria-hidden="true" />,
    title: "Trusted Team",
    desc: "Verified experts ensuring reliability and professionalism in every deal.",
  },
  {
    icon: <FaHandsHelping size={26} aria-hidden="true" />,
    title: "Customer First",
    desc: "We prioritize your needs, offering guidance every step of the way.",
  },
  {
    icon: <FaCheckCircle size={26} aria-hidden="true" />,
    title: "Transparent Process",
    desc: "Clear pricing, honest insights, and end-to-end support for peace of mind.",
  },
  {
    icon: <FaBolt size={26} aria-hidden="true" />,
    title: "Fast Closures",
    desc: "Streamlined paperwork and coordination to close deals quickly and smoothly.",
  },
  {
    icon: <FaMapMarkerAlt size={26} aria-hidden="true" />,
    title: "Local Expertise",
    desc: "Neighborhood insights, pricing trends, and guidance you can trust.",
  },
];

/* ================== Main Component ================== */
const HowWeAre = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroRef, heroInView] = useReveal(prefersReducedMotion);
  const [gridRef, gridInView] = useReveal(prefersReducedMotion);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 text-[15px] sm:text-[16px] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================== HERO Section ================== */}
        <div
          ref={heroRef}
          className={`relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 text-white ring-1 ring-white/10 p-6 sm:p-10 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(700px 320px at 20% 15%, rgba(251,146,60,0.14), transparent 60%), radial-gradient(800px 360px at 85% 80%, rgba(245,158,11,0.12), transparent 60%)",
            }}
          />

          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-white/15 tracking-wide heading-font">
              WHO WE ARE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Founder Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {FOUNDER_PHOTO ? (
                <img
                  src={FOUNDER_PHOTO}
                  alt="Founder portrait"
                  className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full object-cover ring-4 ring-orange-400/80 shadow-2xl"
                />
              ) : (
                <div
                  className="h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full ring-4 ring-orange-400/70 shadow-2xl bg-gradient-to-tr from-slate-800 to-slate-700"
                  aria-label="Founder image placeholder"
                />
              )}
            </div>

            {/* Right: Founder Info */}
            <div className="lg:col-span-7">
              <h2 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                {FOUNDER.quote}
              </h2>
              <p className="paragraph-font mt-3 text-white/90 text-sm sm:text-base lg:text-[17px] max-w-xl leading-relaxed">
                {FOUNDER.bio}
              </p>
              {(FOUNDER.name || FOUNDER.role) && (
                <div className="mt-5">
                  {FOUNDER.name && (
                    <div className="heading-font text-sm sm:text-base font-semibold">
                      {FOUNDER.name}
                    </div>
                  )}
                  {FOUNDER.role && (
                    <div className="paragraph-font text-xs sm:text-sm text-white/80">
                      {FOUNDER.role}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================== Section Header ================== */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="heading-font text-2xl sm:text-3xl font-bold text-gray-900 mb-2 inline-block">
            Who We Are
            <span className="block w-14 h-1 bg-orange-500 rounded mt-2 mx-auto" />
          </h3>
          <p className="paragraph-font text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-[17px] leading-relaxed">
            We focus on transparency, trust, and excellent service for our
            clients and partners.
          </p>
        </div>

        {/* ================== Features Grid ================== */}
        <div
          ref={gridRef}
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {features.map((f, i) => {
            const Icon = React.cloneElement(f.icon, {
              size: 48,
              className:
                "text-orange-600 transition-colors duration-200 group-hover:text-black",
              "aria-hidden": "true",
            });

            return (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="h-20 flex items-center justify-center">{Icon}</div>
                <h4 className="heading-font mt-4 text-[17px] sm:text-[18px] font-semibold text-orange-600 transition-colors duration-200 group-hover:text-black">
                  {f.title}
                </h4>
                <p className="paragraph-font mt-2 text-sm sm:text-base text-slate-600 leading-relaxed px-2">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeAre;
