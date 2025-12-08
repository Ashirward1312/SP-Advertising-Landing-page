import React, { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      window.scrollY + el.getBoundingClientRect().top - headerH - 8; // 8px padding
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    // Update hash
    history.pushState(null, "", `#${id}`);
  };

  // On route or hash change, if there is a hash, scroll to it
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToId(hash), 0);
    }
  }, [location]);

  // Nav click handler for sections on the Home page
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    // If we are NOT on the home route, go to home with hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // If already on home, just smooth scroll
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
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          <span className="text-orange-400">Mahesh </span>Ventures
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-white/90 text-sm font-medium">
            {/* Home (scroll to #home on main page) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-orange-400 transition"
            >
              Home
            </a>

            {/* Service section on home */}
            <a
              href="#service"
              onClick={(e) => handleNavClick(e, "service")}
              className="hover:text-orange-400 transition"
            >
              Service
            </a>

            {/* B2B -> separate route /b2b */}
            <Link
              to="/b2b"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              B2B
            </Link>

            {/* Pre-Launch -> separate route /prelaunch */}
            <Link
              to="/prelaunch"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-400 transition"
            >
              Pre-Launch
            </Link>

            {/* Contact section on home */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hover:text-orange-400 transition"
            >
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
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
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