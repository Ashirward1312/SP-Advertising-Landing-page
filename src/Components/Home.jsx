import { useEffect, useState, useRef } from "react";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern kitchen and dining area",
  },
  {
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=85",
    alt: "Warm living room interior",
  },
  {
    url: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=2000&q=85",
    alt: "Contemporary house exterior at dusk",
  },
  {
    url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=85",
    alt: "Minimal bedroom with natural light",
  },
  {
    url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=85",
    alt: "Glass facade luxury property",
  },
];

const ROTATE_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    IMAGES.forEach((i) => {
      const img = new Image();
      img.src = i.url;
    });
  }, []);

  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, ROTATE_MS);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const makeSrcSet = (url) =>
    `${url} 1x, ${url}${url.includes("?") ? "&" : "?"}dpr=2 2x`;

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center items-center" id="home">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {IMAGES.map((img, i) => (
          <img
            key={img.url}
            src={img.url}
            srcSet={makeSrcSet(img.url)}
            alt={img.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/20 to-slate-900/75" />
      </div>

      {/* Text content only */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs text-white/85 ring-1 ring-white/15 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Verified listings • Secure deals
        </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Find your next property{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            with confidence
          </span>
        </h1>

        <p className="mt-4 text-white/90 text-base sm:text-lg">
          Curated homes, verified owners and smooth paperwork — all in one place.
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 flex space-x-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              stop();
              setIndex(i);
              start();
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index
                ? "bg-orange-400 scale-110"
                : "bg-white/55 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
 


// import { useEffect, useState, useRef } from "react";

// const IMAGES = [
//   { url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=85", alt: "Modern kitchen and dining area" },
//   { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=85", alt: "Warm living room interior" },
//   { url: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=2000&q=85", alt: "Contemporary house exterior at dusk" },
//   { url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=85", alt: "Minimal bedroom with natural light" },
//   { url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=85", alt: "Glass facade luxury property" },
// ];

// const ROTATE_MS = 7000;

// function usePrefersReducedMotion() {
//   const [prefers, setPrefers] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const onChange = (e) => setPrefers(e.matches);
//     setPrefers(mq.matches);
//     mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
//     return () =>
//       mq.removeEventListener ? mq.removeEventListener("change", onChange) : mq.removeListener(onChange);
//   }, []);
//   return prefers;
// }

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     // Preload
//     IMAGES.forEach((i) => {
//       const img = new Image();
//       img.src = i.url;
//     });
//   }, []);

//   useEffect(() => {
//     if (!prefersReducedMotion) start();
//     return stop;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [prefersReducedMotion]);

//   const start = () => {
//     stop();
//     timerRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % IMAGES.length);
//     }, ROTATE_MS);
//   };

//   const stop = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//   };

//   const goTo = (i) => {
//     stop();
//     const next = ((i % IMAGES.length) + IMAGES.length) % IMAGES.length;
//     setIndex(next);
//     if (!prefersReducedMotion) start();
//   };

//   const prev = () => goTo(index - 1);
//   const next = () => goTo(index + 1);

//   const makeSrcSet = (url) => `${url} 1x, ${url}${url.includes("?") ? "&" : "?"}dpr=2 2x`;

//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-[100svh] overflow-hidden"
//       onMouseEnter={stop}
//       onMouseLeave={() => !prefersReducedMotion && start()}
//     >
//       {/* Background slideshow */}
//       <div className="absolute inset-0">
//         {IMAGES.map((img, i) => (
//           <img
//             key={img.url}
//             src={img.url}
//             srcSet={makeSrcSet(img.url)}
//             alt={img.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//         {/* Stronger gradient overlay for readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/85" />
//         {/* Side vignette for left-aligned text */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8">
//           <div className="pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
//             {/* Badge */}
//             {/* <div className="paragraph-font inline-flex items-center gap-2 text-white/85 text-xs bg-black/35 px-3.5 py-1 rounded-full ring-1 ring-white/10">
//               <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
//               Verified listings • Secure deals
//             </div> */}

//             <h1 className="heading-font mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
//               Find your next property{" "}
//               <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//                 with confidence
//               </span>
//             </h1>

//             <p className="paragraph-font mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
//               Curated homes, verified owners and smooth paperwork — all in one place.
//             </p>

//             {/* CTAs */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <a
//                 href="#results"
//                 className="paragraph-font inline-flex items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
//               >
//                 Browse listings
//               </a>
//               <a
//                 href="#contact"
//                 className="paragraph-font inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
//               >
//                 Contact an agent
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-5 z-10">
//         <button
//           aria-label="Previous slide"
//           onClick={prev}
//           className="pointer-events-auto hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/35 text-white ring-1 ring-white/15 hover:bg-black/45 transition"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//         <button
//           aria-label="Next slide"
//           onClick={next}
//           className="pointer-events-auto hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/35 text-white ring-1 ring-white/15 hover:bg-black/45 transition"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>

//       {/* Slide indicators with progress */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
//         {IMAGES.map((_, i) => (
//           <button
//             key={i}
//             aria-label={`Go to slide ${i + 1}`}
//             onClick={() => goTo(i)}
//             className="group relative h-2 w-8 rounded-full bg-white/30 overflow-hidden"
//           >
//             <span
//               className={`absolute left-0 top-0 h-full bg-orange-400 ${i === index ? "w-full" : "w-0"}`}
//               style={{ transition: `width ${ROTATE_MS}ms linear` }}
//             />
//             <span className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full pointer-events-none" />
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }