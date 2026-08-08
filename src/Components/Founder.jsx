import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root{
      --navy-950:#050F20;
      --navy-900:#071A33;
      --navy-800:#0D2A50;
      --ivory:#FBF7EF;
      --ivory-dim:#F2ECDF;
      --ink:#171E2C;
      --ink-soft:rgba(23,30,44,0.62);
      --orange:#F28C28;
      --orange-light:#FFC27A;
      --hairline: rgba(242,140,40,0.18);
    }
    body, .founder-page {
      font-family: 'Poppins', sans-serif !important;
    }
    @media (prefers-reduced-motion: reduce){
      .founder-page *{ animation-duration:0.001ms !important; transition-duration:0.001ms !important; }
    }
  `}</style>
);

/* Import images */
import founderImg from "../images/founder.jpeg";
import cert1Img from "../images/founder2.jpeg";
import cert2Img from "../images/founder5.png";
import awardImg from "../images/founder3.jpeg";
import mediaImg from "../images/founder4.jpeg";

/* Data */
const stats = [
  { value: "20+", label: "Years in Real Estate Strategy" },
  { value: "500+", label: "Free Seminars Conducted" },
  { value: "10,000+", label: "Aspirants Trained Over Two Decades" },
  { value: "50+", label: "Real Estate Companies Launched & Still Operating" },
  { value: "2,000+", label: "New Entrepreneurs Empowered" },
];

const happinessPoints = [
  {
    icon: "🧘",
    title: "Stress & Anxiety Relief",
    text: "Daily routines to manage stress, overthinking and anxiety — practical techniques that actually work in real life, not just on a retreat.",
  },
  {
    icon: "⚖️",
    title: "Work–Life Harmony",
    text: "Sustainable rhythms for entrepreneurs, students and teams, built to prevent burnout and protect focus during high-pressure seasons.",
  },
  {
    icon: "✨",
    title: "Joy & Inner Peace",
    text: "Simple daily habits — gratitude, breath, reflection — that shift your baseline mindset instead of chasing a temporary high.",
  },
];

const happinessPillars = [
  { emoji: "🌅", title: "Morning Rituals", desc: "Start the day with intention — breathwork, gratitude journaling and mindful movement." },
  { emoji: "🧠", title: "Mind Detox", desc: "Learn to observe, not react — clearing mental clutter with proven cognitive tools." },
  { emoji: "💡", title: "Purpose Clarity", desc: "Align daily actions with deeper purpose for sustained motivation and fulfilment." },
  { emoji: "🤝", title: "Relationship Wellness", desc: "Build healthier connections at work and home through empathy and communication." },
];

/* Motion Hooks */
function useGSAPReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      { reduce: "(prefers-reduced-motion: reduce)", full: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        const { reduce } = context.conditions;
        const els = ref.current.querySelectorAll("[data-reveal]");
        if (!els.length) return;

        if (reduce) {
          gsap.set(els, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        els.forEach((el) => {
          const dir = el.dataset.reveal || "up";
          const delay = parseFloat(el.dataset.delay || "0");
          const from =
            dir === "left" ? { x: -40, opacity: 0 }
            : dir === "right" ? { x: 40, opacity: 0 }
            : dir === "scale" ? { scale: 0.9, opacity: 0 }
            : { y: 40, opacity: 0 };

          gsap.fromTo(
            el,
            from,
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
        return () => {};
      }
    );
    return () => mm.revert();
  }, []);
}

function useMagnetic(ref, strength = 18) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const quickX = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      quickX(relX / (r.width / strength));
      quickY(relY / (r.height / strength));
    };
    const onLeave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
}

/* Small Components */
const Eyebrow = ({ children, center = false, dark = false }) => (
  <div
    data-reveal="up"
    className={`inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] mb-5 ${
      dark ? "text-[#FFC27A]" : "text-[#F28C28]"
    } ${center ? "mx-auto justify-center w-full" : ""}`}
  >
    <span className="w-6 h-px bg-current opacity-60" />
    {children}
  </div>
);

const MagneticCTA = ({ href, children, variant = "solid" }) => {
  const ref = useRef(null);
  useMagnetic(ref, 14);
  const base = "inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-full text-sm transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-[#F28C28] text-[#071A33] hover:bg-[#FFC27A] shadow-[0_10px_30px_-8px_rgba(242,140,40,0.6)]"
      : "border border-white/25 text-white hover:border-[#F28C28]/70 hover:text-[#F28C28]";
  return (
    <a ref={ref} href={href} className={`${base} ${styles}`}>
      {children}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};

const RotatingSeal = ({ size = 168 }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(ref.current, { rotate: 360, duration: 40, repeat: -1, ease: "none" });
    return () => tween.kill();
  }, []);
  const r = size / 2;
  const textPathId = "seal-path";
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        <defs>
          <path id={textPathId} d={`M ${r},${r} m -${r - 14},0 a ${r - 14},${r - 14} 0 1,1 ${2 * (r - 14)},0 a ${r - 14},${r - 14} 0 1,1 -${2 * (r - 14)},0`} />
        </defs>
        <circle cx={r} cy={r} r={r - 2} fill="none" stroke="#F28C28" strokeOpacity="0.35" strokeWidth="1" />
        <text fill="#F28C28" fillOpacity="0.85" fontSize="9" letterSpacing="3" className="uppercase font-semibold">
          <textPath href={`#${textPathId}`} startOffset="0%">
            REAL ESTATE STRATEGY • HAPPINESS COACH • PRADEEP MAHESHWARI •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[46%] h-[46%] rounded-full bg-[#F28C28]/10 border border-[#F28C28]/40 flex items-center justify-center">
          <span className="text-[#F28C28] text-2xl font-bold">PM</span>
        </div>
      </div>
    </div>
  );
};

/* Main Component */
const Founder = () => {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const founderRef = useRef(null);
  const happRef = useRef(null);
  const credRef = useRef(null);
  const legacyRef = useRef(null);
  const newsRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAPReveal(founderRef);
  useGSAPReveal(happRef);
  useGSAPReveal(credRef);
  useGSAPReveal(legacyRef);
  useGSAPReveal(newsRef);
  useGSAPReveal(ctaRef);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(id);
  }, []);

  /* Hero entrance + subtle parallax */
  useEffect(() => {
    if (!heroRef.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      { reduce: "(prefers-reduced-motion: reduce)", full: "(prefers-reduced-motion: no-preference)" },
      ({ conditions }) => {
        if (conditions.reduce) return;

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.7 })
          .from(".hero-title-line", { y: 50, opacity: 0, duration: 1, stagger: 0.1 }, "-=0.4")
          .from(".hero-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-actions", { y: 24, opacity: 0, duration: 0.7 }, "-=0.55")
          .from(".hero-seal", { scale: 0.7, opacity: 0, duration: 0.9, ease: "back.out(1.6)" }, "-=0.7");

        gsap.to(".hero-orb", { y: -24, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });

        gsap.to(".hero-orb", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });

        if (!window.matchMedia("(pointer: coarse)").matches && heroRef.current) {
          const quickX = gsap.quickTo(".hero-parallax", "x", { duration: 0.6, ease: "power3.out" });
          const quickY = gsap.quickTo(".hero-parallax", "y", { duration: 0.6, ease: "power3.out" });
          const onMove = (e) => {
            const { innerWidth, innerHeight } = window;
            quickX(((e.clientX - innerWidth / 2) / innerWidth) * 24);
            quickY(((e.clientY - innerHeight / 2) / innerHeight) * 24);
          };
          heroRef.current.addEventListener("mousemove", onMove);
          return () => heroRef.current?.removeEventListener("mousemove", onMove);
        }
      }
    );
    return () => mm.revert();
  }, []);

  /* Counter animation */
  useEffect(() => {
    if (!rootRef.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      { reduce: "(prefers-reduced-motion: reduce)", full: "(prefers-reduced-motion: no-preference)" },
      ({ conditions }) => {
        const nodes = rootRef.current.querySelectorAll(".count-val");
        nodes.forEach((el) => {
          const raw = el.dataset.count;
          const num = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
          const suffix = raw.replace(/[0-9.,]/g, "");

          if (conditions.reduce) {
            el.textContent = raw;
            return;
          }

          const proxy = { val: 0 };
          gsap.to(proxy, {
            val: num,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate() {
              el.textContent = `${Math.round(proxy.val).toLocaleString()}${suffix}`;
            },
            onComplete() {
              el.textContent = raw;
            },
          });
        });
      }
    );
    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="founder-page overflow-hidden bg-[var(--ivory)] text-[#071A33]">
      <FontLoader />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#071A33] py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="hero-orb absolute top-[-10%] right-[-6%] w-[560px] h-[560px] bg-[#F28C28] opacity-[0.08] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#F28C28] opacity-[0.05] blur-[110px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#F28C28 1px, transparent 1px), linear-gradient(90deg, #F28C28 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="hero-parallax relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="hero-eyebrow inline-flex items-center gap-2 bg-[#F28C28]/10 border border-[#F28C28]/30 text-[#F28C28] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.28em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] animate-pulse" />
                Mahesh Ventures — Founder
              </div>

              <h1 className="text-white font-bold leading-[0.96] mb-6 overflow-hidden" style={{ fontSize: "clamp(2.8rem, 7vw, 6.2rem)", letterSpacing: "-0.02em" }}>
                <span className="hero-title-line block">Pradeep</span>
                <span className="hero-title-line block bg-gradient-to-r from-[#F28C28] via-[#FFC27A] to-[#F28C28] bg-clip-text text-transparent">
                  Maheshwari
                </span>
              </h1>

              <p className="hero-sub text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium" style={{ fontSize: "clamp(1rem, 1.3vw, 1.2rem)" }}>
                Real estate strategist by trade, happiness coach by conviction.
                <span className="block mt-1 text-[#FFC27A]/90">Executive Vice President, YUVA CAIT Chhattisgarh</span>
              </p>

              <div className="hero-actions mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">
                <MagneticCTA href="/contact">Work with Pradeep</MagneticCTA>
                <MagneticCTA href="#journey" variant="ghost">See the journey</MagneticCTA>
              </div>
            </div>

            <div className="hero-seal hidden lg:flex justify-center">
              <RotatingSeal />
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-1 opacity-50">
            <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#F28C28] to-transparent" />
          </div>
        </div>
      </section>

      {/* Founder Portrait */}
      <section ref={founderRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-reveal="left" className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-[3px] border-[#F28C28]/40 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-[3px] border-[#F28C28]/20 rounded-2xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F28C28]/20 max-w-sm mx-auto lg:mx-0">
                <img src={founderImg} alt="Pradeep Maheshwari" className="w-full h-72 object-cover object-top" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 left-8 bg-[#071A33] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-xl border border-[#F28C28]/30">
                <span className="text-[#F28C28]">20+</span> Years Experience
              </div>
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-[#F28C28] rounded-3xl pointer-events-none" />
            </div>

            <div className="space-y-7">
              <div data-reveal="right">
                <Eyebrow>Section 01 — Founder</Eyebrow>
                <h2 className="text-[#071A33] font-bold leading-[1.05]" style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                  Pradeep Maheshwari
                </h2>
                <p className="text-[#071A33]/60 font-medium text-sm mt-1">Founder · Executive Vice President, YUVA CAIT Chhattisgarh</p>
              </div>

              <div data-reveal="right" data-delay="0.1">
                <p className="text-[#071A33]/80 leading-relaxed font-medium" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)", lineHeight: 1.75 }}>
                  <span className="font-bold text-[#F28C28]">Over two decades</span> in real estate strategy, sales and marketing.
                  From large-scale builder planning to pan-India broker networks, Pradeep has led
                  models that accelerate closures and create long-term value.
                </p>
                <p className="text-[#071A33]/70 leading-relaxed font-medium mt-4" style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)", lineHeight: 1.75 }}>
                  A visionary leader who believes <span className="font-bold text-[#071A33]">success is meaningless without inner fulfilment</span>.
                  Beyond real estate, Pradeep serves as a Happiness Coach — guiding individuals and teams
                  toward emotional fitness, clarity and balanced living.
                </p>
              </div>

              <div data-reveal="right" data-delay="0.18" className="flex flex-wrap gap-3">
                {[
                  { val: "20+ Yrs", lbl: "Experience" },
                  { val: "Raipur", lbl: "Based In" },
                  { val: "C.G.", lbl: "Market Focus" },
                ].map((s) => (
                  <div key={s.lbl} className="bg-[#071A33]/5 border border-[#071A33]/10 rounded-xl px-4 py-2.5 text-center">
                    <div className="text-[#F28C28] font-bold text-sm">{s.val}</div>
                    <div className="text-[#071A33]/60 text-[10px] uppercase tracking-wide font-bold">{s.lbl}</div>
                  </div>
                ))}
              </div>

              <div data-reveal="up" data-delay="0.22">
                <MagneticCTA href="/contact">Connect with Pradeep</MagneticCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happiness Coach */}
      <section ref={happRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#071A33] relative overflow-hidden text-white">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F28C28] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#F28C28] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Eyebrow center dark>Section 02 — Dual Role</Eyebrow>
            <h2 data-reveal="up" data-delay="0.05" className="font-bold" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Happiness Coach
            </h2>
            <p data-reveal="up" data-delay="0.1" className="text-[#F28C28] font-medium mt-3" style={{ fontSize: "clamp(1rem, 1.4vw, 1.35rem)" }}>
              Emotional Fitness, Balance &amp; Fulfilment
            </p>
            <p data-reveal="up" data-delay="0.15" className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed font-medium">
              Beyond real estate, Pradeep brings a holistic philosophy — helping individuals rediscover
              joy, manage modern stress, and build lives of meaning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {happinessPoints.map((point, i) => (
              <div
                key={point.title}
                data-reveal="up"
                data-delay={`${i * 0.1}`}
                className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#F28C28]/40 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F28C28]/60 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl">{point.icon}</span>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide pt-1">{point.title}</h3>
                </div>
                <div className="w-10 h-[2px] bg-[#F28C28]/40 mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-white/60 text-sm leading-relaxed font-medium">{point.text}</p>
              </div>
            ))}
          </div>

          <div data-reveal="up" className="mb-10 text-center">
            <p className="text-white/40 text-[11px] uppercase tracking-[0.25em] font-bold">The Four Pillars of Happiness Coaching</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {happinessPillars.map((p, i) => (
              <div
                key={p.title}
                data-reveal="up"
                data-delay={`${i * 0.08}`}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 text-center hover:border-[#F28C28]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h4 className="text-white font-bold text-sm mb-2">{p.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal="up" data-delay="0.15" className="mt-16 text-center">
            <blockquote className="relative inline-block max-w-2xl">
              <div className="text-5xl text-[#F28C28]/30 leading-none absolute -top-3 -left-4">"</div>
              <p className="text-white/80 italic px-6 font-medium" style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", lineHeight: 1.6 }}>
                True success is not just what you earn — it's who you become and how peacefully you can sleep at night.
              </p>
              <div className="text-5xl text-[#F28C28]/30 leading-none absolute -bottom-6 -right-4 rotate-180">"</div>
              <cite className="block mt-5 text-[#F28C28] text-xs font-bold not-italic uppercase tracking-wide">— Pradeep Maheshwari</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section ref={credRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow center>Section 04 — Credentials</Eyebrow>
            <h2 data-reveal="up" className="text-[#071A33] font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Recognition &amp; Proof of Work
            </h2>
            <p data-reveal="up" data-delay="0.05" className="text-[#071A33]/60 mt-3 text-sm max-w-md mx-auto font-medium">
              A journey built on experience, learning and professional recognition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[cert1Img, cert2Img].map((src, i) => (
              <div key={i} data-reveal="up" data-delay={`${i * 0.1}`} className="group relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-[#F28C28]/50 rounded-tl-lg z-10" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-[#F28C28]/50 rounded-br-lg z-10" />
                <div className="bg-white p-4 rounded-xl shadow-lg border border-[#F28C28]/15 group-hover:shadow-2xl group-hover:border-[#F28C28]/30 transition-all duration-300">
                  <img src={src} alt={`Certificate ${i + 1}`} className="w-full h-52 object-contain rounded-lg" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy / Stats */}
      <section ref={legacyRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#071A33] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F28C28] opacity-[0.05] blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-reveal="left" className="order-last lg:order-first relative">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-[3px] border-[#F28C28]/30 rounded-2xl -z-10" />
              <div className="bg-white/[0.03] border border-[#F28C28]/20 p-4 rounded-2xl shadow-2xl max-w-xs mx-auto lg:mx-0">
                <img src={awardImg} alt="Pradeep Maheshwari Award" className="w-full h-64 object-contain rounded-xl" loading="lazy" />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F28C28] rounded-full opacity-10 blur-3xl" />
            </div>

            <div className="space-y-10">
              <div data-reveal="right">
                <Eyebrow dark>Section 05 — Legacy</Eyebrow>
                <h2 className="text-white font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                  Two Decades of<br /><span className="text-[#F28C28]">Compounding Trust</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {stats.map((a, i) => (
                  <div key={a.label} data-reveal="up" data-delay={`${i * 0.06}`} className="border-l-[3px] border-[#F28C28] pl-4 py-1">
                    <div className="count-val text-[#F28C28] font-bold leading-none mb-1" data-count={a.value} style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
                      {a.value}
                    </div>
                    <p className="text-white/70 font-semibold text-xs leading-snug">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In the News */}
      <section ref={newsRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--ivory-dim)] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow center>Section 07 — Media &amp; Recognition</Eyebrow>
            <h2 data-reveal="up" className="text-[#071A33] font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              In the News
            </h2>
          </div>

          <div data-reveal="scale" className="relative max-w-2xl mx-auto">
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-[3px] border-t-[3px] border-[#F28C28] rounded-tl-2xl z-10" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-[3px] border-b-[3px] border-[#F28C28] rounded-br-2xl z-10" />
            <div className="bg-white border border-[#F28C28]/15 p-5 md:p-6 rounded-2xl shadow-2xl">
              <img src={mediaImg} alt="Pradeep Maheshwari in Times of India" className="w-full h-auto max-h-80 object-contain rounded-xl" loading="lazy" />
            </div>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-10 bg-[#F28C28] rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#071A33] relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #F28C28, transparent 60%)" }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <Eyebrow center dark>Let's Talk</Eyebrow>
          <h2 data-reveal="up" className="font-bold mb-5" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)", letterSpacing: "-0.02em" }}>
            Strategy or Stillness — Start Either Way
          </h2>
          <p data-reveal="up" data-delay="0.06" className="text-white/60 font-medium text-sm md:text-base mb-9 max-w-md mx-auto">
            Whether it's a real estate venture or a quieter mind you're after, the first conversation is free.
          </p>
          <div data-reveal="up" data-delay="0.12" className="flex flex-wrap gap-4 justify-center">
            <MagneticCTA href="/contact">Get in Touch with Pradeep</MagneticCTA>
            <MagneticCTA href="/seminars" variant="ghost">Join a Free Seminar</MagneticCTA>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;