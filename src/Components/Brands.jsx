import React, { useEffect, useRef, useState } from "react";

/* ================== Utilities: reduced motion + reveal on scroll ================== */
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
function useReveal(prefersReducedMotion) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.12 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);
  return [ref, inView];
}

/* ================== DATA: Associates (image path/URL) ================== */
const ASSOCIATES = [
  {
    id: "bni",
    name: "BNI",
    image: "https://bansodrealtors.com/wp-content/uploads/2021/05/1-1.jpg",
    desc: "BNI is the largest business networking organization with members and chapters in 74+ countries.",
  },
  {
    id: "rera",
    name: "RERA Chhattisgarh",
    image: "https://bansodrealtors.com/wp-content/uploads/2021/05/2-1.jpg",
    desc: "RERA brings transparency and efficiency to protect homebuyers’ interests across the real estate sector.",
  },
  {
    id: "cgar",
    name: "CGAR",
    image: "https://bansodrealtors.com/wp-content/uploads/2021/05/3-1.jpg",
    desc: "CGAR is a local association under NAR-INDIA with 50+ members collaborating across Chhattisgarh.",
  },
  {
    id: "honest",
    name: "Honest Broker",
    image: "https://bansodrealtors.com/wp-content/uploads/2021/05/4-1.jpg",
    desc: "India’s highest reliable broker chain with a wide network across 1700+ locations.",
  },
  {
    id: "nar",
    name: "NAR-India",
    image: "https://bansodrealtors.com/wp-content/uploads/2021/05/5-1.jpg",
    desc: "NAR-India promotes the highest professional and ethical standards among real estate professionals.",
  },
];

/* ================== DATA: Company facts / stats ================== */
const YEARS_OF_EXPERIENCE = 10;
const STATS = [
  { value: "50+", label: "Projects marketed" },
  { value: "20", label: "Projects underway" },
  { value: "2.50 lakh sq ft", label: "Property ventured", compact: true }, // compact => smaller font
  { value: "150", label: "Joint ventures completed" },
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
      <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900 text-center">{item.name}</h3>
      <p className="mt-2 text-xs sm:text-sm text-slate-600 text-center font-poppins">{item.desc}</p>
    </article>
  );
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Associates & Accreditations
          </h1>
          <p className="mt-2 text-slate-600 font-poppins">
            Partnerships that strengthen trust and deliver better outcomes.
          </p>
        </header>

        {/* Associates Grid */}
        <div
          ref={gridRef}
          className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {ASSOCIATES.map((a) => (
            <AssociateCard key={a.id} item={a} />
          ))}
        </div>

        {/* The Fact block */}
        <div className="mt-12 sm:mt-14 text-center">
          <span className="text-[11px] tracking-[0.3em] text-orange-600">THE FACT</span>
          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
            One of the leading real estate companies
          </h2>
          <p className="mt-2 text-slate-600 font-poppins max-w-3xl mx-auto">
            Our mission is to give direction to your investment dream and turn it into a memorable
            experience for a lifetime.
          </p>
        </div>

        {/* Facts / Stats */}
        <div
          ref={factsRef}
          className={`mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-700 ${
            factsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Years of experience card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full grid place-items-center bg-orange-50 ring-2 ring-orange-200">
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600">{YEARS_OF_EXPERIENCE}</span>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">Years of Experience</div>
                  <p className="text-sm text-slate-600 font-poppins">
                    Consistent delivery across marketing, sales and documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 text-center hover:shadow-sm">
                <div
                  className={`font-semibold text-orange-600 ${
                    s.compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {s.label === "Property ventured" ? (
                    <>
                      2.50{" "}
                      <span className="text-[15px] sm:text-xm font-normal text-orange-500">
                        lakh sq ft
                      </span>
                    </>
                  ) : (
                    s.value
                  )}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-600 font-poppins">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
}
