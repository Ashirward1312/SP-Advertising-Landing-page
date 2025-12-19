"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  ArrowRight,
  ArrowLeft,
  Play,
  Sparkles,
} from "lucide-react";

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
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-black py-10 sm:py-14 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-4">
        {/* Top Bar: Premium Back Button + Instagram Link */}
        <div className="mb-6 flex items-center justify-between">
          {/* Premium Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-full
                       border border-white/10 bg-white/5
                       px-3.5 py-1.5
                       text-[10px] sm:text-[11px]
                       font-medium uppercase tracking-[0.2em]
                       text-neutral-200 backdrop-blur-sm
                       transition-all
                       hover:border-orange-400/80 hover:bg-orange-500/90
                       hover:text-white hover:shadow-lg hover:shadow-orange-500/30
                       active:scale-95"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full
                         bg-orange-500/90 text-white shadow-sm
                         transition-colors
                         group-hover:bg-white group-hover:text-orange-500"
            >
              <ArrowLeft className="h-3 w-3" />
            </span>
            <span>Back</span>
          </button>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/maheshventures"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px]
                       text-orange-400 hover:text-orange-300
                       font-medium uppercase tracking-wider transition-colors"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span>Follow us on Instagram</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Header (Label + Title) */}
        <div className="mb-6">
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

        {/* Reels Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div
                className="relative overflow-hidden rounded-xl sm:rounded-2xl
                           border border-neutral-800 hover:border-orange-500/50
                           bg-neutral-900 transition-all duration-300
                           hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/12] overflow-hidden">
                  <img
                    src={reel.image}
                    alt="Instagram Reel"
                    className="h-full w-full object-cover
                               group-hover:scale-110
                               transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

                  {/* Tag */}
                  <span
                    className="absolute top-2 left-2 px-1.5 py-0.5 rounded
                               bg-orange-500 text-[7px] sm:text-[8px]
                               font-bold uppercase text-white"
                  >
                    {reel.tag}
                  </span>

                  {/* Play Icon */}
                  <div
                    className="absolute inset-0 flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  >
                    <div
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full
                                  bg-orange-500 flex items-center justify-center shadow-xl"
                    >
                      <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-5 text-center text-[16px] sm:text-m text-neutral-400">
          <Sparkles className="inline-block h-4 w-4 text-orange-400 mr-1.5" />
         DISCOVER MORE — WATCH OUR FULL PODCASTS ON YOUTUBE AND FOLLOW US ON INSTAGRAM FOR DAILY INSIGHTS AND UPDATES.
        </p>
      </div>
    </section>
  );
}