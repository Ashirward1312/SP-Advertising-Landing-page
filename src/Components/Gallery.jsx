import React from "react";
import { Instagram, ArrowRight, Play, Sparkles } from "lucide-react";

import reel1 from "../images/e1.png";
import reel2 from "../images/e2.png";

const REELS = [
  {
    id: "reel1",
    url: "https://www.instagram.com/reel/DRt1i8jCKZN/",
    image: reel1,
    tag: "PRADEEP MAHESHWARI",
  },
  {
    id: "reel2",
    url: "https://www.instagram.com/reel/DR6RkTzCEku/",
    image: reel2,
    tag: "PRADEEP MAHESHWARI",
  },
];

export default function InstaReelsSection() {
  return (
    <section className="relative w-full bg-black py-10 sm:py-14 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-medium">
                Featured Reels
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
             LEARN WITH <span className="text-orange-400">INTENT</span>
            </h2>
          </div>
          
          <a
            href="https://www.instagram.com/maheshventures"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-orange-400 hover:text-orange-300 font-medium uppercase tracking-wider transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            Follow us on Instagram
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Compact Reels Row */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-neutral-800 hover:border-orange-500/50 bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                
                {/* Thumbnail */}
                <div className="relative aspect-[9/12] overflow-hidden">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                  
                  {/* Tag */}
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-orange-500 text-[7px] sm:text-[8px] font-bold uppercase text-white">
                    {reel.tag}
                  </span>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[9px] sm:text-[11px] font-semibold text-white leading-tight">
                      {reel.title}
                    </p>
                    <p className="text-[8px] sm:text-[9px] text-orange-300 mt-0.5">
                      {reel.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-4 text-center text-[10px] sm:text-[11px] text-neutral-500">
          <Sparkles className="inline h-3 w-3 text-orange-400 mr-1" />
          UPGRADE YOUR MINDSET, ONE REEL AT A TIME
        </p>
      </div>
    </section>
  );
}