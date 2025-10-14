import React, { useEffect, useState } from 'react';
import './Home.css';

const DEFAULT_AD_TYPES = [
  'Outdoor Advertising',
  'Digital Marketing',
  'SEO Optimization',
  'Google Ads (PPC)',
  'Social Media Marketing',
  'Branding & Identity',
  'Print Advertising',
  'TV Commercials',
  'Radio Ads',
  'Influencer Marketing',
  'Content Marketing',
  'Email Marketing',
  'Event Marketing',
  'PR & Media',
  'Website Development',
  'Video Production',
  'OTT & In‑App Ads',
  'SMS / WhatsApp Marketing',
  'Lead Generation',
];

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop';

export default function AdsHero({
  adTypes = DEFAULT_AD_TYPES,
  imageSrc = HERO_IMAGE,
  ctaHref = '#contact',
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDel, setIsDel] = useState(false);

  // Typing settings
  const TYPE_SPEED = 70;     // ms per char
  const DELETE_SPEED = 35;   // ms per char
  const HOLD_TIME = 1400;    // ms after full word

  useEffect(() => {
    const current = adTypes[idx % adTypes.length] || '';
    let timer;

    if (!isDel && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
    } else if (!isDel && text.length === current.length) {
      timer = setTimeout(() => setIsDel(true), HOLD_TIME);
    } else if (isDel && text.length > 0) {
      timer = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
    } else if (isDel && text.length === 0) {
      setIsDel(false);
      setIdx((i) => (i + 1) % adTypes.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDel, idx, adTypes]);

  return (
    <section className="ads-hero">
      {/* Decorative shapes */}
      <div className="ads-blob" aria-hidden="true" />
      <div className="ads-dots ads-dots--left" aria-hidden="true" />
      <div className="ads-dots ads-dots--right" aria-hidden="true" />

      <div className="ads-container">
        <div className="ads-grid">
          {/* Left content */}
          <div className="ads-left">
            <div className="eyebrow">Empowering Your Brand</div>

            <h1 className="ads-title">
              with Strategic Advertising
            </h1>

            {/* The white changing line */}
            <h2 className="ads-switcher" aria-live="polite">
              <span className="switcher-text">{text}</span>
              <span className="cursor" aria-hidden="true" />
              <span className="badge">{adTypes.length}+ types</span>
            </h2>

            <p className="ads-desc">
              Welcome to SP ADVERTISING, one of the most creative and
              well‑established advertising agencies in Raipur, Chhattisgarh.
              With SP Advertising, make your brand live better.
            </p>

            <div className="cta-row">
              <a className="cta-btn" href={ctaHref}>
                <span>Get Services</span>
                <span className="cta-arrow">➜</span>
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="ads-right">
            <div className="image-wrap">
              <img
                src={imageSrc}
                alt="Advertising illustration"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="bubble" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}