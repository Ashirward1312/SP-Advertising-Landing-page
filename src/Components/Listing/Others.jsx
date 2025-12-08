"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import sampleVideo from "../../images/PM1.mp4"; // 👈 apna path lagao

export default function Others() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-neutral-950 text-neutral-100 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.22) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Back button */}
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-neutral-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-6 text-left md:text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #F3D98E, #D4AF37 70%)",
              }}
            >
              Premium Video Showcase
            </span>
          </h1>
       
        </header>

        {/* Smaller video frame */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-[720px] md:max-w-[800px] rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-white/20 p-[1.7px] shadow-[0_20px_60px_-36px_rgba(0,0,0,0.95)]"
            style={{
              boxShadow:
                "0 20px 60px -36px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div className="relative rounded-[1.4rem] bg-black overflow-hidden">
              {/* Thoda chhota height: 16:9 with max height */}
              <div className="relative w-full aspect-video max-h-[360px] md:max-h-[420px] mx-auto">
                <video
                  src={sampleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Optional overlay for future text */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}