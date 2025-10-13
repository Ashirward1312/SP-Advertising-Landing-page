// src/MarketingHero.jsx
import React from 'react';
import { Container } from '@mui/material';
import './Home.css';

// Change this to your own background if you want:
const BG_URL =
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1800&auto=format&fit=crop';

export default function MarketingHero() {
  return (
    <section
      className="mk-hero"
      style={{ '--hero-bg': `url('${BG_URL}')` }}
    >
      {/* Decorative layers */}
      <div className="mk-hero__orb mk-hero__orb--1" aria-hidden="true" />
      <div className="mk-hero__orb mk-hero__orb--2" aria-hidden="true" />
      <div className="mk-hero__ring" aria-hidden="true" />

      <Container maxWidth="xl" className="mk-hero__container">
        <div className="mk-hero__panel">
          <div className="mk-hero__badge">
            All‑Type Marketing · Digital · Outdoor · Print
          </div>

          <h1 className="mk-hero__title">
            Grow Smarter, <span>Market Everywhere</span>.
          </h1>

          <p className="mk-hero__subtitle">
            ROI‑first campaigns across SEO, Performance Ads, Social Media,
            Branding, Outdoor and Print. Strategy + Creative + Media under one
            roof.
          </p>

          <div className="mk-hero__cta">
            <a className="mk-btn mk-btn--primary" href="#contact">
              Get Free Audit
            </a>
            <a className="mk-btn mk-btn--ghost" href="#work">
              See Our Work
            </a>
          </div>

          <ul className="mk-hero__chips" aria-label="Our services">
            <li>SEO</li>
            <li>Google Ads</li>
            <li>Social Media</li>
            <li>Branding</li>
            <li>Outdoor</li>
            <li>Print</li>
          </ul>

          <div className="mk-hero__stats">
            <div className="stat">
              <strong>120+</strong>
              <span>Brands</span>
            </div>
            <div className="stat">
              <strong>9+ yrs</strong>
              <span>Experience</span>
            </div>
            <div className="stat">
              <strong>12M+</strong>
              <span>Impressions</span>
            </div>
            <div className="stat">
              <strong>4.9/5</strong>
              <span>Client rating</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scrolling service strip */}
      <div className="mk-hero__marquee" aria-hidden="true">
        <div className="track">
          <span>SEO</span>
          <span>Performance Ads</span>
          <span>Social Media</span>
          <span>Branding</span>
          <span>Outdoor</span>
          <span>Print</span>
          <span>SEO</span>
          <span>Performance Ads</span>
          <span>Social Media</span>
          <span>Branding</span>
          <span>Outdoor</span>
          <span>Print</span>
        </div>
      </div>
    </section>
  );
}