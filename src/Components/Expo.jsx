// src/ExpoSection.jsx
import React, { useState } from "react";
import img from "../images/mv1.png";
import img2 from "../images/mv2.png";
import img3 from "../images/mv2.jpeg";
import img4 from "../images/mv3.jpeg";
import img5 from "../images/s1.png";
import img6 from "../images/s2.png";
import img7 from "../images/s3.png";
import img8 from "../images/s4.png";
import img9 from "../images/h.jpg";

// GALLERY ME 8 IMAGES
const galleryImages = [img, img2, img3, img4, img5, img6, img7, img8];

const ExpoSection = () => {
  const [selectedImage, setSelectedImage] = useState(null); // LIGHTBOX KE LIYE

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section
      className="relative z-0 w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP BAR WITH BACK HOME BUTTON */}
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[11px] font-semibold tracking-wide text-slate-700 shadow-sm hover:border-orange-500 hover:text-orange-600 hover:shadow-md transition uppercase"
          >
            <span className="text-sm">←</span>
            <span>BACK HOME</span>
          </a>
        </div>

        {/* TOP CONTENT */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <p className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-orange-600 uppercase mb-3">
              CENTRAL INDIA&apos;S BIGGEST REALTY EXPO
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-snug uppercase">
              <span className="font-extrabold">JOIN HANDS WITH</span>{" "}
              <span className="text-orange-500 font-extrabold">
                MAHESH VENTURES
              </span>
            </h2>

            <p className="text-sm text-slate-700 mb-3 uppercase">
              JOIN OUR TEAM FOR A{" "}
              <strong>BIG RANGE OF PROJECTS AT ONE PLACE</strong>. HELP YOUR
              CLIENTS <strong>DECIDE FASTER, ON THE SPOT!</strong>
            </p>

            <p className="text-sm text-slate-700 mb-4 uppercase">
              <strong>FIRST TIME EVER</strong> – JOIN AS A{" "}
              <strong>CHANNEL PARTNER</strong> WITH{" "}
              <strong>MAHESH VENTURES</strong> FOR THE{" "}
              <strong>BIGGEST EXPO OF THE YEAR</strong>.{" "}
              <strong>MORE THAN 100 PROJECTS LIVE!</strong>
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a
                href="tel:+918871090476"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 hover:shadow-md transition uppercase"
              >
                <span className="font-bold mr-1">CALL NOW:</span> 88710 90476
              </a>
              <span className="text-xs text-slate-500 uppercase">
                OFFICIAL CHANNEL PARTNER:{" "}
                <span className="font-semibold text-slate-800">
                  MAHESH VENTURES
                </span>
              </span>
            </div>
          </div>

          {/* HERO IMAGE – POORA IMAGE CLEARLY VISIBLE */}
          <div className="w-full relative z-10">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/95 shadow-xl px-4 py-5">
              {/* LIGHT GLOW BACKGROUND FOR DESIGN */}
              <div className="pointer-events-none absolute -left-12 -top-10 h-36 w-36 rounded-full bg-orange-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

              <img
                src={img9}
                alt="REALTY EXPO"
                className="relative z-10 w-full max-h-[420px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        {/* SMALL GALLERY – SAARI IMAGES CLEARLY & EQUALLY DIKHENGI */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <h3 className="text-base font-semibold text-slate-900 uppercase">
              <strong>EXPO GLIMPSES</strong> (PROJECTS &amp; STALLS)
            </h3>
            <p className="text-[11px] text-slate-500 uppercase">
              TAP / CLICK ON AN IMAGE TO{" "}
              <strong>VIEW IN FULL SIZE &amp; CLOSE</strong> WITH ×
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {galleryImages.map((src, i) => (
              <button
                type="button"
                key={i}
                onClick={() => openImage(src)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <img
                  src={src}
                  alt={`EXPO IMAGE ${i + 1}`}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {/* HOVER OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX / MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={closeImage} // OUTSIDE CLICK SE CLOSE
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl bg-slate-950/85 border border-slate-600 shadow-2xl overflow-hidden backdrop-blur"
            onClick={(e) => e.stopPropagation()} // ANDAR CLICK SE CLOSE NA HO
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeImage}
              className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white text-xl font-bold hover:bg-black/90 transition shadow"
              aria-label="CLOSE IMAGE"
            >
              ×
            </button>

            <div className="p-3 sm:p-4 flex items-center justify-center bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80">
              <img
                src={selectedImage}
                alt="SELECTED EXPO"
                className="w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="px-4 pb-4 text-center text-[11px] text-slate-200/90 uppercase">
              <strong>EXPO GLIMPSE</strong> – CLICK ON{" "}
              <strong>× CLOSE</strong> OR OUTSIDE THE IMAGE TO GO BACK TO THE
              <strong> GALLERY</strong>.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExpoSection;