"use client";
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

import mvLogo from "../images/Mm.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow / background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);

return (
    <header
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
            {/* Left side links – sab route based */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              HOME
            </Link>

            <Link
              to="/services"     // 🔁 App me <Route path="/services" ...> hona chahiye
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              SERVICE
            </Link>

            {/* <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              GALLERY
            </Link> */}

            <Link
              to="/B2B-land-&-property-in-raipur"          // yahan apne App wale path ke hisaab se rakho
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              B2B
            </Link>

            <Link
              to="/pre-launch-land-&-property-raipur"  // 🔁 App me <Route path="/pre-launch-property-in-raipur" ...> hona chahiye
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

            {/* Right side: CONTACT */}
            <div className="flex items-center gap-4 ml-4">
              <Link
                to="/contact"   // 🔁 App me <Route path="/contact" ...> hona chahiye
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-400 transition"
              >
                CONTACT
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
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Service
          </Link>
{/* 
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Gallery
          </Link> */}

          <Link
            to="/B2B-land-&-property-in-raipur"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            B2B
          </Link>

          <Link
            to="/pre-launch-land-&-property-raipur"
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

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Contact
          </Link>

          
        </div>
      )}
    </header>
  );
};

export default Header;