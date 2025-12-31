"use client";
import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import { Link, useLocation, useNavigate } from "react-router-dom";

import mvLogo from "../images/Mm.jpg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll shadow / background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper (with header height)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = headerRef.current?.offsetHeight || 0;
    const top =
      window.scrollY + el.getBoundingClientRect().top - headerH - 8;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
  };

  // On route or hash change, if there is a hash, scroll to it
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToId(hash), 100);
    }
  }, [location]);

  // Nav click handler for sections on the Home page
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    scrollToId(id);
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  // Function to generate and download PDF
  const downloadQuotePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Mahesh Ventures - Property Quote", 20, 20);
    doc.setFontSize(12);
    doc.text(
      "Get your dream house and premium plots in prime locations.",
      20,
      40
    );
    doc.text(
      "Residential and commercial properties available for sale and investment.",
      20,
      50
    );
    doc.text(
      "Premium plots for secure investment, future growth and high returns.",
      20,
      60
    );
    doc.text(
      "Whether you want a home, a premium plot or property for investment,",
      20,
      75
    );
    doc.text(
      "Mahesh Ventures (by Pradeep Maheshwari) is here to guide you.",
      20,
      85
    );
    doc.text(
      "For buying, selling or investing in real estate, contact us today.",
      20,
      100
    );
    doc.save("Mahesh_Ventures_Quote.pdf");
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={mvLogo}
            alt="Mahesh Ventures"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6 text-white/90 text-sm font-medium">
            {/* Left side normal links */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-orange-400 transition"
            >
              HOME
            </a>

            <a
              href="#service"
              onClick={(e) => handleNavClick(e, "service")}
              className="hover:text-orange-400 transition"
            >
              SERVICE
            </a>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              GALLERY
            </Link>

            <Link
              to="/b2b"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              B2B
            </Link>

            <Link
              to="/prelaunch"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              PRE-LAUNCH
            </Link>

            <Link
              to="/career"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              CAREER
            </Link>

            {/* Right side: CONTACT + highlighted EXPO */}
            <div className="flex items-center gap-4 ml-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="hover:text-orange-400 transition"
              >
                CONTACT
              </a>

              {/* ✅ Highlighted EXPO button */}
              <Link
                to="/expo"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-1.5 rounded-full bg-orange-500 text-white font-semibold shadow-md border border-orange-400 hover:bg-orange-400 hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                EXPO
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white text-center space-y-4 py-6 transition-all">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="block hover:text-orange-400 transition"
          >
            Home
          </a>
          <a
            href="#service"
            onClick={(e) => handleNavClick(e, "service")}
            className="block hover:text-orange-400 transition"
          >
            Service
          </a>

          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Gallery
          </Link>

          <Link
            to="/b2b"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            B2B
          </Link>
          <Link
            to="/prelaunch"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Pre-Launch
          </Link>
          <Link
            to="/career"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Career
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block hover:text-orange-400 transition"
          >
            Contact
          </a>

          {/* ✅ Mobile me EXPO ko alag se bada button jaisa */}
          <Link
            to="/expo"
            onClick={() => setMenuOpen(false)}
            className="block mx-auto w-40 bg-orange-500 text-white font-semibold py-2 rounded-full shadow-md hover:bg-orange-400 hover:shadow-lg transition"
          >
            Expo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;