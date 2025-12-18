"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const CTA_COLOR = "#f97316";
const CTA_HOVER = "#fb923c";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Career() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white text-slate-900 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:border-orange-300 transition"
        >
          <ChevronLeft className="w-4 h-4" /> BACK TO HOME
        </button>

        {/* SECTION 1 – HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center space-y-5 mb-24"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" /> Career • Training • Certification
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight uppercase">
            BUILD YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              CAREER IN REAL ESTATE
            </span>
            <br />
            WITH MAHESH VENTURES
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
            <strong>
              GET STRUCTURED TRAINING AND EDUCATION IN REAL ESTATE
            </strong>{" "}
            with certification courses, practical guidance and a
            growth-focused environment. Join our team, learn the business and
            work towards{" "}
            <strong>YOUR FIRST ₹1 CR IN REAL ESTATE</strong>.
          </p>
        </motion.section>

        {/* SECTION 2 – TRAINING */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-orange-50 shadow-xl p-8 md:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase text-orange-700">
              Training & Education in Real Estate
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">
              LEARN REAL ESTATE FROM GROUND LEVEL & GROW WITH OUR TEAM
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-6">
              Mahesh Ventures offers a complete{" "}
              <strong> EDUCATION AND TRAINING PROGRAM IN REAL ESTATE</strong>.
              From understanding properties, documentation and investment logic
              to actual client handling and closing deals – you will be trained
              step by step.
            </p>

            <div className="space-y-3 mb-8">
              <Feature text="Structured training & education in real estate (sales, investments, documentation)." />
              <Feature text="Certification course after successful training – we provide a completion certificate." />
              <Feature text="Live work with our team on actual properties and clients." />
              <Feature text="We guide you to build a long-term career in real estate – not just a short-term job." />
              <Feature text="Focus on helping you make your first ₹1 Cr in real estate through knowledge, systems and mentorship." />
              <Feature text="We guide you for your better future – mindset, communication and growth planning." />
            </div>

            <a
              href="/#contact"
              className="inline-flex rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-105"
              style={{ backgroundColor: CTA_COLOR }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = CTA_HOVER)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = CTA_COLOR)
              }
            >
              APPLY FOR TRAINING
            </a>
          </div>
        </motion.section>

        {/* SECTION 3 – INFO (cards layout + better design) */}
        <section className="mb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<Award className="w-6 h-6" />}
              badge="CERTIFICATION"
              title="Get Trained & Certified"
              description="Receive a certification from Mahesh Ventures showing you understand the basics of real estate – from property types to documentation and deal flow."
            />
            <InfoCard
              icon={<Users className="w-6 h-6" />}
              badge="JOIN OUR TEAM"
              title="Work, Learn & Earn"
              description="You don't just sit in a classroom – you learn on the field with our team. We help you handle leads, understand clients and close real deals."
            />
            <InfoCard
              icon={<TrendingUp className="w-6 h-6" />}
              badge="GROWTH GOALS"
              title="Roadmap to ₹1 Crore"
              description="With the right training and mentoring, real estate can help you aim for your first ₹1 Crore over time. We guide you on realistic targets and discipline required."
            />
          </div>
        </section>

        {/* SECTION 4 – NOTE */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 p-8 text-center"
        >
          <p className="text-base sm:text-lg text-slate-700">
            THIS IS NOT JUST A SALES JOB – IT IS{" "}
            <strong>
              A COMPLETE EDUCATION AND CAREER-BUILDING PLATFORM IN REAL ESTATE
            </strong>
            . IF YOU ARE SERIOUS ABOUT LEARNING AND GROWING, WE ARE READY TO
            GUIDE YOU.
          </p>
        </motion.section>
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
      <p className="text-slate-700">{text}</p>
    </div>
  );
}

function InfoCard({ icon, badge, title, description }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50 to-orange-100/60 p-8 shadow-md transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-xl"
    >
      {/* Soft hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),transparent_55%)]" />

      <div className="relative flex flex-col gap-4 h-full">
        {/* Icon + badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-orange-600 shadow-inner shadow-orange-100">
            {icon}
          </div>
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-orange-400/60">
            {badge}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold mb-1 uppercase">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Accent line */}
        <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-20" />
      </div>
    </motion.article>
  );
}