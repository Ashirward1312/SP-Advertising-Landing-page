import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to generate and download PDF
  const downloadQuotePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Property Quote", 20, 20);

    doc.setFontSize(12);
    doc.text("Property Name: Sample Property", 20, 40);
    doc.text("Location: Raipur, Chhattisgarh", 20, 50);
    doc.text("Type: Residential", 20, 60);
    doc.text("Price: ₹50,00,000", 20, 70);

    doc.save("Property_Quote.pdf");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-orange-400">Mahesh </span>Ventures
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-white/90 text-sm font-medium">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#service" className="hover:text-orange-400 transition">
              Service
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
            <a
              href="#testimonials"
              className="hover:text-orange-400 transition"
            >
              Testimonials
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={downloadQuotePDF}
            className="ml-6 bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md transition"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
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
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            About
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Contact
          </a>

          <button
            onClick={downloadQuotePDF}
            className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md transition"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
