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

const HEADLINES = [
  "YOUR DREAM HOME",
  "YOUR DREAM PROPERTY",
  "YOUR NEXT INVESTMENT",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const timerRef = useRef(null);

  useEffect(() => {
    IMAGES.forEach((img, i) => {
      const image = new Image();
      image.onload = () => {
        setLoaded((prev) => ({ ...prev, [i]: true }));
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

  const currentHeadline = HEADLINES[index % HEADLINES.length];

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900"
      id="home"
    >
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

        {/* Thoda strong overlay but same idea */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {/* 1st line – gradient text */}
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-400 drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]">
            {currentHeadline}
          </span>

          {/* 2nd line – amber, thoda close laya with -mt-1 */}
          <span className="block text-amber-400 drop-shadow-[0_0_18px_rgba(0,0,0,0.9)] -mt-1">
            AWAITS IN RAIPUR
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto">
          Discover Verified Properties Across Raipur With Trusted Owners And
          Hassle-Free Transactions
        </p>
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