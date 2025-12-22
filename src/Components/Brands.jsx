
import React, { useEffect, useRef, useState } from "react";
import hq from "../images/hq.png";
import iref from "../images/iref.png";

/* ================== Utilities: reduced motion + reveal on scroll ================== */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event) => setPrefers(event.matches);

    setPrefers(mq.matches);

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
    } else {
      mq.addListener(handleChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange);
      } else {
        mq.removeListener(handleChange);
      }
    };
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
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        }),
      { threshold: 0.12 }
    );

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return [ref, inView];
}

/* ================== DATA: Associates ================== */
const ASSOCIATES = [
  {
  id: "rera",
  name: "RERA CHHATTISGARH",
  image:
    "https://bansodrealtors.com/wp-content/uploads/2021/05/2-1.jpg",
  desc: "Registered with Chhattisgarh Real Estate Regulatory Authority (RERA) – Registration No. CGERERA260325A000856 – ensuring transparency, accountability and protection for homebuyers in every real estate transaction.",
},
  {
    id: "iref",
    name: "IREF",
    image: iref,
    desc: "IREF Capital focuses on real estate and investment education, helping investors understand capital structures and market cycles.",
  },
  {
    id: "hq",
    name: "INDIA’S FIRST REAL ESTATE COMMUNITY HQ & CO‑WORKING",
    image: hq,
    desc: "A community-led real estate HQ and co‑working space where investors, brokers and developers collaborate, learn and build long-term relationships.",
  },
];

/* ================== DATA: Company facts / stats ================== */
const YEARS_OF_EXPERIENCE = 20;

const STATS = [
  { value: 50, suffix: "+", label: "PROJECTS MARKETED" },
  { value: 20, suffix: "+", label: "PROJECTS UNDERWAY" },
  { value: 10, suffix: " lakh sq ft", label: "PROPERTY VENTURED" },
  { value: 2000, suffix: "+", label: "PEOPLE TRAINED FOR REAL ESTATE (C.G)" },
  { value: 2500, suffix: "+", label: "NETWORK OF MORE THAN 2500 PEOPLE" },
];

/* ================== Image block ================== */
function ImageBlock({ name, image }) {
  return (
    <div className="flex items-center justify-center h-28 sm:h-32 md:h-36">
      {image ? (
        <img
          src={image}
          alt={`${name} image`}
          loading="lazy"
          decoding="async"
          className="max-h-24 sm:max-h-28 md:max-h-32 lg:max-h-36 w-auto object-contain drop-shadow-sm"
        />
      ) : (
        <div className="h-24 sm:h-28 md:h-32 lg:h-36 w-56 sm:w-64 md:w-72 rounded-lg border border-dashed border-slate-300 bg-white/60 text-slate-400 text-xs sm:text-sm grid place-items-center">
          Add image path
        </div>
      )}
    </div>
  );
}

/* ================== Associate card ================== */
function AssociateCard({ item }) {
  return (
    <article className="group rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-7 hover:shadow-md transition">
      <ImageBlock name={item.name} image={item.image} />
      <h3 className="heading-font mt-3 text-sm sm:text-base font-medium text-slate-900 text-center">
        {item.name}
      </h3>
      <p className="paragraph-font mt-2 text-[13.5px] sm:text-sm text-slate-600 text-center">
        {item.desc}
      </p>
    </article>
  );
}

/* ================== Animated number (count‑up) ================== */
function AnimatedNumber({ target, start, disabled = false, duration = 1200 }) {
  const [value, setValue] = useState(disabled ? target : 0);

  useEffect(() => {
    if (disabled) {
      setValue(target);
      return;
    }
    if (!start) return;

    let frameId;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(progress * target);
      setValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [start, target, duration, disabled]);

  return <span>{value.toLocaleString("en-IN")}</span>;
}

/* ================== Main Page ================== */
export default function AssociatesPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [gridRef, gridInView] = useReveal(prefersReducedMotion);
  const [factsRef, factsInView] = useReveal(prefersReducedMotion);

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white py-12 sm:py-14 lg:py-16">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[90vw] -translate-x-1/2 bg-gradient-to-tr from-orange-400/10 via-amber-400/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight text-slate-900">
            ASSOCIATES & ACCREDITATIONS
          </h1>
          <p className="paragraph-font mt-2 text-[13.5px] sm:text-sm text-slate-600">
            Partnerships That Strengthen Trust And Deliver Better Outcomes.
          </p>
        </header>

        {/* Associates Grid */}
        <div
          ref={gridRef}
          className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
        >
          {ASSOCIATES.map((a) => (
            <AssociateCard key={a.id} item={a} />
          ))}
        </div>

        {/* The Fact block heading */}
        <div className="mt-12 sm:mt-14 text-center">
          <span className="text-[19px] tracking-[0.3em] text-orange-600 uppercase">
            THE FACT
          </span>
          <h2 className="heading-font mt-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
            ONE OF THE LEADING REAL ESTATE COMPANIES IN CHHATTISGARH
          </h2>
          <p className="paragraph-font mt-2 text-[13.5px] sm:text-sm text-slate-600 max-w-3xl mx-auto">
            Our Mission Is To Give Direction To Your Investment Dream And Turn
            It Into A Memorable Experience For A Lifetime.
          </p>
        </div>

        {/* ============= Stats strip with count‑up ============= */}
        <div
          ref={factsRef}
          className={`mt-8 transition-all duration-700 ${factsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
        >
          <div className="rounded-[26px] bg-white/95 ring-1 ring-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.04)] px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7">
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-5 items-stretch">
              {/* Main experience card */}
              <div className="lg:col-span-2 flex items-center gap-4 sm:gap-5 rounded-2xl border border-orange-100 bg-orange-50/60 px-4 sm:px-6 lg:px-7 py-4 sm:py-5">
                <div className="inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white border border-orange-200 shadow-sm">
                  <span className="heading-font text-2xl sm:text-3xl lg:text-4xl font-semibold text-orange-500 leading-none">
                    <AnimatedNumber
                      target={YEARS_OF_EXPERIENCE}
                      start={factsInView}
                      disabled={prefersReducedMotion}
                    />
                  </span>
                </div>
                <div>
                  <div className="heading-font text-sm sm:text-base font-semibold text-slate-900">
                    YEARS OF EXPERIENCE
                  </div>
                  <p className="paragraph-font mt-1 text-[12.5px] sm:text-[13px] text-slate-600">
                    Consistent Delivery Across Marketing,Sales And
                    Documentation.
                  </p>
                </div>
              </div>

              {/* Stat cards */}
              <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col justify-center items-center rounded-2xl border border-slate-100 bg-white px-4 sm:px-5 py-4 sm:py-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all"
                  >
                    <div className="heading-font text-lg sm:text-xl lg:text-2xl font-semibold text-orange-500 flex items-baseline justify-center gap-1 leading-none">
                      <AnimatedNumber
                        target={s.value}
                        start={factsInView}
                        disabled={prefersReducedMotion}
                      />
                      {s.suffix && (
                        <span className="paragraph-font text-[11px] sm:text-xs lg:text-sm font-normal text-orange-500">
                          {s.suffix}
                        </span>
                      )}
                    </div>
                    <div className="paragraph-font mt-1 text-[12px] sm:text-[13px] text-slate-600 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <a
            href="#contact"
            className="paragraph-font inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            BECOME A PARTNER
          </a>
        </div>
      </div>
    </section>
  );
}