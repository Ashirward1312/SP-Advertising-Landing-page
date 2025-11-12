import { useEffect, useRef, useState } from "react"; 

/* Accessibility: Reduced Motion Hook */
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

/* Reveal on Scroll Animation */
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

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [leftRef, leftInView] = useReveal(prefersReducedMotion);
  const [rightRef, rightInView] = useReveal(prefersReducedMotion);

  const STATS = [
    { label: "Active Listings", value: "12k+" },
    { label: "Cities Covered", value: "24+" },
    { label: "Verified Agents", value: "1.5k+" },
    { label: "Avg. Days to Sell", value: "21" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-12 sm:py-14 lg:py-16" id="about">
      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[95vw] -translate-x-1/2 bg-gradient-to-tr from-orange-400/20 via-yellow-400/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xm font-medium text-orange-700 ring-1 ring-orange-100">
            About us
          </span>
          <h2 className="heading-font mt-3 text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Built for buyers, sellers and trusted agents
          </h2>
        </div>

        {/* Grid Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 transition-all duration-700 ${
              leftInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="heading-font text-2xl font-semibold text-slate-900">
              Who we are
            </h3>
            <p className="paragraph-font mt-3 text-slate-600 leading-relaxed">
              AI-powered insights, real-time updates, and expert assistance —
              ensuring your journey stays transparent, smart, and effortless.
            </p>

            <ul className="mt-4 space-y-2">
              {[
                "Verified owners & agents with KYC",
                "Transparent pricing and live data insights",
                "24/7 support — from consultation to documentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-700">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="paragraph-font text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 paragraph-font"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 transition-all duration-700 ${
              rightInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
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
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                      alt="Team collaboration"
                      className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                      alt="Client discussion"
                      className="h-36 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 sm:p-5 text-center hover:shadow-md transition"
            >
              <div className="text-2xl font-bold text-orange-600">
                {s.value}
              </div>
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