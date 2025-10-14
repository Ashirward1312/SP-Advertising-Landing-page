import React, { useState } from 'react';
import {
  FaBullhorn, FaLightbulb, FaChartLine, FaVideo, FaPaintBrush, FaChartPie,
  FaSearch, FaEnvelope,  // Removed FaUsers, FaMobileAlt
} from 'react-icons/fa';
import './Service.css';
const servicesData = [
  {
    icon: <FaBullhorn size={52} color="#2563eb" />,
    title: 'Outdoor Advertising',
    desc: 'Billboards, hoardings, and outdoor campaigns to reach wider audiences.',
  },
  {
    icon: <FaLightbulb size={52} color="#f59e0b" />,
    title: 'Indoor Advertising',
    desc: 'Mall, office aur retail spaces me high‑intent audience targeting.',
  },
  {
    icon: <FaChartLine size={52} color="#10b981" />,
    title: 'Digital Marketing',
    desc: 'SEO, PPC, SMM, content marketing—complete online growth stack.',
  },
  {
    icon: <FaVideo size={52} color="#8b5cf6" />,
    title: 'Audio Visual',
    desc: 'Events, ads aur campaigns ke liye professional AV production.',
  },
  {
    icon: <FaPaintBrush size={52} color="#ec4899" />,
    title: 'Branding',
    desc: 'Logo, identity, and visual strategy for a memorable brand.',
  },
  {
    icon: <FaChartPie size={52} color="#f97316" />,
    title: 'Event Promotion',
    desc: 'End-to-end event marketing for maximum reach and impact.',
  },

  // NEW 4 CARDS
  {
    icon: <FaSearch size={52} color="#06b6d4" />,
    title: 'SEO Optimization',
    desc: 'On-page, technical SEO, backlinks — rank better, faster.',
  },
  {
    icon: <FaEnvelope size={52} color="#ef4444" />,
    title: 'Email Marketing',
    desc: 'Personalized drip campaigns, automation & high deliverability.',
  },
 
];

export default function ServicesFlip() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (i) => setFlippedIndex((prev) => (prev === i ? null : i));
  const handleKey = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(i); }
  };

  return (
    <section className="svc">
      <div className="svc__head">
        <h2 className="svc__title">Our Services</h2>
        <p className="svc__sub">
          We offer a wide range of marketing and advertising services tailored to your needs.
        </p>
      </div>

      <div className="svc__grid">
        {servicesData.map((s, i) => (
          <div
            key={s.title}
            className={`flip-card ${flippedIndex === i ? 'is-flipped' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`${s.title} details`}
            aria-expanded={flippedIndex === i}
            onClick={() => toggleFlip(i)}
            onKeyDown={(e) => handleKey(e, i)}
            onMouseLeave={() => setFlippedIndex(null)}
          >
            <div className="flip-card__inner">
              <div className="flip-card__face flip-card__front">
                <div className="front__icon">{s.icon}</div>
                <h3 className="front__title">{s.title}</h3>
              </div>
              <div className="flip-card__face flip-card__back">
                <h3 className="back__title">{s.title}</h3>
                <p className="back__desc">{s.desc}</p>
                <a href="#contact" className="back__cta">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}