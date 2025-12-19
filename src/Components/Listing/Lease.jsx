"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  IndianRupee,
  MapPin,
  Ruler,
  Building2,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const properties = [
  {
    id: "saddu",
    title: "Saddu",
    tag: "Lease on Lease",
    location: "Saddu",
    area: "1,40,000 sq.ft",
    front: "240 ft front",
    rateLabel: "Rate",
    rate: "₹20 / sq.ft",
  },
  {
    id: "tatibandh",
    title: "TatiBandh",
    tag: "Lease on Lease",
    location: "TatiBandh",
    area: "40,000 sq.ft",
    front: "140 ft front",
    rateLabel: "Rate",
    rate: "₹15 / sq.ft",
  },
  {
    id: "shejbahar",
    title: "Shejbahar",
    tag: "Lease on Lease",
    location: "Shejbahar",
    area: "1,00,000 sq.ft",
    rateLabel: "Rent",
    rate: "₹10 / sq.ft",
  },
  {
    id: "ivy-hotel",
    title: "Near IVY Hotel (G+4)",
    tag: "Lease on Lease",
    location: "Near IVY Hotel",
    area: "30,000 sq.ft total",
    basement: "Basement 7,000 sq.ft",
    floors: "6,000 sq.ft each floor (G+4)",
    // rate not given
  },
  {
    id: "tagore-nagar",
    title: "Tagore Nagar (G+3)",
    tag: "Lease on Lease",
    location: "Tagore Nagar",
    area: "2,090 sq.ft carpet per floor",
    floors: "G+3 (2,090 sq.ft each floor)",
    // rate not given
  },
];

export default function LandOnLease() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-slate-950 to-slate-900 text-neutral-50">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-sky-500/30 blur-3xl opacity-40" />
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl opacity-60" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-indigo-700/30 blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%)] opacity-80" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group mb-4 inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500/10 hover:text-orange-200"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          BACK TO HOME
        </button>

        {/* Header */}
        <motion.header
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-4 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Lease on Lease Inventory
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            LAND{" "}
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              ON LEASE
            </span>
          </motion.h1>
        </motion.header>

        {/* Property Cards */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {properties.map((p, idx) => (
            <PropertyCard key={p.id} index={idx} {...p} />
          ))}
        </motion.section>
      </div>
    </section>
  );
}

/* CARD COMPONENT */

function PropertyCard({
  index,
  title,
  type,
  tag,
  location,
  area,
  front,
  rateLabel,
  rate,
  basement,
  floors,
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-950/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-neutral-950/95 hover:shadow-[0_24px_70px_rgba(248,113,22,0.35)] sm:p-6"
    >
      {/* Top glow line */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Corner index */}
      <div className="pointer-events-none absolute -right-6 -top-6 text-7xl font-black tracking-tighter text-white/5">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Badges */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
          {tag}
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-300">
          <Building2 className="h-3.5 w-3.5" />
          {type}
        </div>
      </div>

      {/* Header */}
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-neutral-50 sm:text-lg">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 sm:text-[13px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-[11px] text-neutral-200">
            <MapPin className="h-3.5 w-3.5 text-orange-300" />
            {location}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/90 p-3.5 text-xs text-neutral-200 sm:grid-cols-3 sm:text-[13px]">
        {area && (
          <StatItem
            icon={<Ruler className="h-4 w-4 text-orange-300" />}
            label="Area"
            value={area}
          />
        )}

        {front && (
          <StatItem
            icon={<MapPin className="h-4 w-4 text-orange-300" />}
            label="Front"
            value={front}
          />
        )}

        {rate && (
          <StatItem
            icon={<IndianRupee className="h-4 w-4 text-orange-300" />}
            label={rateLabel || "Rate"}
            value={rate}
          />
        )}

        {basement && (
          <StatItem
            icon={<Layers className="h-4 w-4 text-orange-300" />}
            label="Basement"
            value={basement}
          />
        )}

        {floors && (
          <StatItem
            icon={<Layers className="h-4 w-4 text-orange-300" />}
            label="Floors"
            value={floors}
          />
        )}
      </div>

      {/* CTA – right aligned */}
      <div className="mt-4 flex justify-end">
        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(248,113,22,0.45)] transition-all duration-300 hover:scale-[1.03]"
        >
          Enquire
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

/* SMALL COMPONENT */

function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
        {icon}
        {label}
      </div>
      <p className="text-sm font-semibold text-neutral-50">{value}</p>
    </div>
  );
}