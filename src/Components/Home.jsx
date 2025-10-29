// import { useEffect, useState, useRef } from "react";

// const IMAGES = [
//   {
//     url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=85",
//     alt: "Modern kitchen and dining area",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=85",
//     alt: "Warm living room interior",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=2000&q=85",
//     alt: "Contemporary house exterior at dusk",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2000&q=85",
//     alt: "Minimal bedroom with natural light",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000&q=85",
//     alt: "Glass facade luxury property",
//   },
// ];

// const ROTATE_MS = 7000;

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     IMAGES.forEach((i) => {
//       const img = new Image();
//       img.src = i.url;
//     });
//   }, []);

//   useEffect(() => {
//     start();
//     return stop;
//   }, []);

//   const start = () => {
//     stop();
//     timerRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % IMAGES.length);
//     }, ROTATE_MS);
//   };

//   const stop = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//   };

//   const makeSrcSet = (url) =>
//     `${url} 1x, ${url}${url.includes("?") ? "&" : "?"}dpr=2 2x`;

//   return (
//     <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center items-center" id="home">
//       {/* Background slideshow */}
//       <div className="absolute inset-0">
//         {IMAGES.map((img, i) => (
//           <img
//             key={img.url}
//             src={img.url}
//             srcSet={makeSrcSet(img.url)}
//             alt={img.alt}
//             className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
//               i === index ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/20 to-slate-900/75" />
//       </div>

//       {/* Text content only */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">
//         {/* <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs text-white/85 ring-1 ring-white/15 mb-4">
//           <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
//           Verified listings • Secure deals
//         </div> */}

//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
//           Find your next property{" "}
//           <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//             with confidence
//           </span>
//         </h1>

//         <p className="mt-4 text-white/90 text-base sm:text-lg">
//           Curated homes, verified owners and smooth paperwork — all in one place.
//         </p>
//       </div>

//       {/* Slide indicators */}
//       <div className="absolute bottom-6 flex space-x-2 z-10">
//         {IMAGES.map((_, i) => (
//           <button
//             key={i}
//             aria-label={`Go to slide ${i + 1}`}
//             onClick={() => {
//               stop();
//               setIndex(i);
//               start();
//             }}
//             className={`w-2.5 h-2.5 rounded-full transition-all ${
//               i === index
//                 ? "bg-orange-400 scale-110"
//                 : "bg-white/55 hover:bg-white/75"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
 



import { useEffect, useState, useRef } from "react";

const IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    alt: "Modern Indian apartment interior",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    alt: "Contemporary Indian home exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    alt: "Elegant Indian living space",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    alt: "Spacious Indian property bedroom",
  },
  {
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80",
    alt: "Beautiful Indian residential property",
  },
];

const ROTATE_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const timerRef = useRef(null);

  useEffect(() => {
    IMAGES.forEach((img, i) => {
      const image = new Image();
      image.onload = () => {
        setLoaded(prev => ({...prev, [i]: true}));
      };
      image.src = img.url;
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

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900" id="home">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Dream Home
          <br />
          <span className="text-amber-400">Awaits in Raipur</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto">
          Discover verified properties across Raipur with trusted owners and hassle-free transactions
        </p>

        {/* <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
          Explore Properties
        </button> */}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              stop();
              setIndex(i);
              start();
            }}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}