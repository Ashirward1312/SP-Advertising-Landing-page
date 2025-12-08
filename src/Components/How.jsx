import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import founderImg from "../images/c.jpeg";

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
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);
  return [ref, inView];
}

/* ================== Founder Content ================== */
const FOUNDER_PHOTO = founderImg;

const FOUNDER = {
  quote: "STRATEGY FIRST. PEOPLE ALWAYS. REAL ESTATE DONE RIGHT.",
  name: "PRADEEP MAHESHWARI",
  role: "Founder • Executive Vice President, CAIT Chhattisgarh",
};

/* ================== Features ================== */
const features = [
  {
    icon: <FaUsers size={26} aria-hidden="true" />,
    title: "Trusted Team",
    desc: "KYC‑verified owners and agents. Ethical, professional, responsive.",
  },
  {
    icon: <FaHandsHelping size={26} aria-hidden="true" />,
    title: "Customer First",
    desc: "Guidance from discovery to possession with dedicated support.",
  },
  {
    icon: <FaCheckCircle size={26} aria-hidden="true" />,
    title: "Transparent Process",
    desc: "Clear pricing, no hidden fees, real updates at every step.",
  },
  {
    icon: <FaBolt size={26} aria-hidden="true" />,
    title: "Fast Closures",
    desc: "Streamlined paperwork, coordinated site visits and timely approvals.",
  },
  {
    icon: <FaMapMarkerAlt size={26} aria-hidden="true" />,
    title: "Local Expertise",
    desc: "Strong network across Chhattisgarh & pan‑India with neighborhood insights.",
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
          className={`relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-900 text-white ring-1 ring-white/10 p-6 sm:p-10 transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Gradient background */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 25% 15%, rgba(251,146,60,0.14), transparent 60%), radial-gradient(700px 320px at 85% 80%, rgba(245,158,11,0.12), transparent 60%)",
            }}
          />

          {/* WHO WE ARE Tag — WHITE */}
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-white/15 tracking-wide heading-font">
              WHO WE ARE
            </span>
          </div>

          {/* Founder Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            {/* Left: Founder Image — alignment fix */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {FOUNDER_PHOTO ? (
                <img
                  src={FOUNDER_PHOTO}
                  alt={`${FOUNDER.name || "Founder"} portrait`}
                  className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-full object-cover object-center ring-4 ring-orange-400/80 shadow-xl"
                />
              ) : (
                <div
                  className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-full ring-4 ring-orange-400/70 shadow-xl bg-gradient-to-tr from-slate-800 to-slate-700"
                  aria-label="Founder image placeholder"
                />
              )}
            </div>

            {/* Right: Founder Info */}
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              {/* Quote in ORANGE */}
              <h2 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-orange-400">
                {FOUNDER.quote}
              </h2>

              {/* Bio with "Over two decades" highlighted ORANGE */}
              <p className="paragraph-font text-white/90 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-lg mx-auto lg:mx-0">
                <span className="">Over Two decades</span> in real estate strategy, sales, and marketing. From large‑scale builder planning to pan‑India broker networks, Pradeep has led innovative models that accelerate closures and create long‑term value.
              </p>

              {/* Name in ORANGE and Role normal */}
              {(FOUNDER.name || FOUNDER.role) && (
                <div className="pt-2">
                  {FOUNDER.name && (
                    <div className="heading-font text-sm sm:text-base font-semibold text-orange-400">
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
            WHO WE ARE
            <span className="block w-14 h-1 bg-orange-500 rounded mt-2 mx-auto" />
          </h3>
          <p className="paragraph-font text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-[17px] leading-relaxed">
            <span className="font-semibold text-orange-600">With over Two decades</span> of hands‑on real estate leadership, we help buyers, sellers, and trusted agents close with confidence. KYC‑verified owners and brokers, transparent pricing, live market data, and end‑to‑end support — from first call to documentation — keep every step simple, fast, and reliable.
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