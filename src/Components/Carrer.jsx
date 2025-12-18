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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Career() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50/40 to-white text-slate-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] right-[-80px] w-[520px] h-[520px] bg-orange-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[520px] h-[520px] bg-orange-200 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-semibold hover:border-orange-300 hover:text-orange-600 transition"
        >
          <ChevronLeft className="w-4 h-4" /> BACK TO HOME
        </button>

        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center space-y-6 mb-28"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4" /> Career • Training • Certification
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight uppercase">
            Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Career in Real Estate
            </span>
            <br />
            with Mahesh Ventures
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
            <strong>GET STRUCTURED TRAINING AND EDUCATION IN REAL ESTATE</strong>
            {" "}with certification courses, practical guidance and a
            growth-focused environment. Learn the business and work towards{" "}
            <strong>YOUR FIRST ₹1 CR IN REAL ESTATE</strong>.
          </p>
        </motion.section>

        {/* TRAINING SECTION */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="rounded-[2.5rem] bg-white/90 backdrop-blur shadow-2xl p-8 md:p-12 border border-orange-100">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase text-orange-700">
              Training & Education
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold mb-5 uppercase">
              Learn from Ground Level & Grow with Our Team
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-8">
              MAHESH VENTURES offers a complete{" "}
              <strong> EDUCATION AND TRAINING PROGRAM IN REAL ESTATE</strong>.
              From property understanding and documentation to real client
              handling and deal closures – you are trained step by step.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Feature text="Structured training in sales, investments & documentation" />
              <Feature text="Certification after successful training completion" />
              <Feature text="Live work on real properties & client handling" />
              <Feature text="Long-term career guidance, not a short-term job" />
              <Feature text="Mentorship to aim for your first ₹1 Cr milestone" />
              <Feature text="Mindset, communication & growth planning support" />
            </div>

            <a
              href="/#contact"
              className="inline-flex rounded-full px-10 py-4 text-sm font-extrabold text-white shadow-lg transition hover:scale-105"
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

        {/* INFO CARDS */}
        <section className="mb-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              icon={<Award className="w-6 h-6" />}
              badge="CERTIFICATION"
              title="Get Trained & Certified"
              description="Earn a certification proving your understanding of real estate basics, documentation and deal flow."
            />
            <InfoCard
              icon={<Users className="w-6 h-6" />}
              badge="JOIN OUR TEAM"
              title="Work, Learn & Earn"
              description="Field-level exposure with our team. Learn client handling, site visits and real deal execution."
            />
            <InfoCard
              icon={<TrendingUp className="w-6 h-6" />}
              badge="GROWTH GOALS"
              title="Roadmap to ₹1 Crore"
              description="Structured mentoring and realistic targets to help you grow discipline and long-term wealth."
            />
          </div>
        </section>

        {/* FINAL NOTE */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 p-10 text-center shadow-lg"
        >
          <p className="text-base sm:text-lg text-slate-700 font-medium">
            THIS IS NOT JUST A SALES JOB – IT IS{" "}
            <strong>
              A COMPLETE EDUCATION AND CAREER-BUILDING PLATFORM IN REAL ESTATE
            </strong>.
            IF YOU ARE SERIOUS ABOUT LEARNING AND GROWTH, WE ARE READY TO GUIDE YOU.
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
      <p className="text-slate-700 text-sm sm:text-base">{text}</p>
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
      className="group relative flex h-full flex-col rounded-[2rem] border border-orange-100 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-100/40 to-transparent" />

      <div className="relative flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-inner">
            {icon}
          </div>
          <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-orange-600 text-white shadow">
            {badge}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-extrabold uppercase mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="mt-auto h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-24 transition-all" />
      </div>
    </motion.article>
  );
}
