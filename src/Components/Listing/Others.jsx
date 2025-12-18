"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import sampleVideo from "../../images/PM1.mp4";

export default function Others() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK TO HOME
        </button>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-orange-400">PREMIUM</span> VIDEO SHOWCASE
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Explore our exclusive property collection
          </p>
        </div>

        {/* Video */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
          <video
            src={sampleVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full aspect-video object-cover"
          />
        </div>
    </div>
    </section>
  );
}