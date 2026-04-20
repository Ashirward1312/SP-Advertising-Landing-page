"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  Hospital as HospitalIcon,
  GraduationCap as GraduationCapIcon,
  Building as BuildingIcon,
  Building2 as OfficeIcon,
  Gem as GemIcon,
  ShoppingBag as ShoppingBagIcon,
  Trees as TreesIcon,
  Boxes as BoxesIcon,
  LineChart as LineChartIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MapPin as MapPinIcon,
  Home as HomeIcon,
  Factory as FactoryIcon,
} from "lucide-react";

/* -------------------- CATEGORIES FOR FOOTER -------------------- */

const FOOTER_CATS = [
  { id: "bestbuy", label: "Best Buy", icon: FactoryIcon },
  { id: "jointventures", label: "Joint Ventures", icon: FactoryIcon },
  { id: "hospital", label: "Hospital Lands", icon: HospitalIcon },
  { id: "education", label: "Education / Institutional", icon: GraduationCapIcon },
  { id: "residential", label: "Residential Real Estate", icon: BuildingIcon },
  { id: "commercial", label: "Commercial Real Estate", icon: BuildingIcon },
  { id: "office", label: "Office Space", icon: OfficeIcon },
  { id: "luxuryplots", label: "Luxury Plots", icon: GemIcon },
  { id: "projectlands", label: "Project Lands", icon: MapPinIcon },
  { id: "farmhouse", label: "Premium Farm House", icon: HomeIcon },
  { id: "resortswedding", label: "Resorts / Wedding Lawns", icon: TreesIcon },
  { id: "warehouse", label: "Warehouse", icon: BoxesIcon },
  { id: "lease", label: "Land on Lease", icon: MapPinIcon },
  { id: "invest-land", label: "Land / Plot Investment", icon: LineChartIcon },
  { id: "standalone", label: "Stand Alone Buildings", icon: BuildingIcon },
  { id: "others", label: "Other Requirements", icon: MoreHorizontalIcon },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  /* --------- Category routing (reused from CategoriesSection) --------- */
  const handleCategoryClick = (id) => {
    if (id === "bestbuy")
      return navigate("/best-property-buy-offices-plots-raipur");
    if (id === "jointventures")
      return navigate("/joint-ventures-property-in-raipur");
    if (id === "hospital") return navigate("/hospital-lands-in-raipur");
    if (id === "education")
      return navigate("/education-&-institution-lands-raipur");
    if (id === "residential")
      return navigate("/residential-property-in-raipur");
    if (id === "commercial") return navigate("/commercial-property-raipur");
    if (id === "office") return navigate("/office-space-in-raipur");
    if (id === "luxuryplots") return navigate("/luxury-plots-in-raipur");
    if (id === "projectlands") return navigate("/key-project-lands-raipur");
    if (id === "standalone")
      return navigate("/stand-alone-property-raipur");
    if (id === "malls") return navigate("/malls-jv-opportunity-raipur");
    if (id === "resortswedding")
      return navigate("/resorts-&-wedding-lawn-lands");
    if (id === "farmhouse") return navigate("/farmhouse-plots-raipur");
    if (id === "warehouse") return navigate("/warehouse-in-raipur");
    if (id === "invest-land")
      return navigate("/land-plot-investment-raipur");
    if (id === "lease") return navigate("/land-on-lease-in-raipur");
    if (id === "others") return navigate("/others");
  };

  // Split categories into two columns for nicer layout
  const mid = Math.ceil(FOOTER_CATS.length / 2);
  const col1 = FOOTER_CATS.slice(0, mid);
  const col2 = FOOTER_CATS.slice(mid);

  return (
    <footer className="bg-black/90 text-white pt-10 pb-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-semibold mb-3 tracking-wide text-orange-400">
            MAHESH VENTURES
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Strategic real estate advisory for{" "}
            <span className="font-semibold text-white">
              offices, lands, projects and investments
            </span>{" "}
            across Raipur and key growth corridors – with curated options and
            transparent processes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-orange-400">
            Quick Links
          </h2>
          <ul className="space-y-1.5 text-white/75 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-orange-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/B2B-land-&-property-in-raipur"
                className="hover:text-orange-400 transition-colors"
              >
                B2B Land &amp; Property Raipur
              </Link>
            </li>
            <li>
              <Link
                to="/pre-launch-land-&-property-raipur"
                className="hover:text-orange-400 transition-colors"
              >
                Pre‑Launch Properties in Raipur
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-orange-400 transition-colors"
              >
                All Categories
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Key Categories – 2 columns, tidy list */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-orange-400">
            Key Categories
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-white/75">
            {[col1, col2].map((col, colIndex) => (
              <div key={colIndex} className="space-y-1.5">
                {col.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleCategoryClick(id)}
                    className="flex items-center gap-2 text-left hover:text-orange-400 transition-colors w-full"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[11px] text-orange-300 flex-shrink-0">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-orange-400">
            Contact &amp; Follow
          </h2>
          <ul className="space-y-2 text-white/75 text-sm mb-4">
            <li className="leading-relaxed">
              Mahesh Ventures
              <br />
              LK Logistic Park, Kursi, 3rd Floor
              <br />
              Near Kamal Vihar, Raipur (C.G.)
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span>{" "}
              +91 88710 90476
            </li>
          </ul>
          <div className="flex space-x-4 text-white/80 text-xl">
            <a
              href="https://www.facebook.com/Maheshventures/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/maheshventuresrpr/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/maheshwari95189"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-neutral-400 mt-8">
        © {year} Mahesh Ventures. All rights reserved. Designed &amp; Developed by{" "}
        <a
          href="https://spadvertising.in/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-100 font-semibold hover:text-orange-300 transition-colors"
        >
          SP ADVERTISING
        </a>
        .
      </div>

      {/* Scroll to top button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 text-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;