import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Listing from "./Components/Listing";
import Service from "./Components/Service";
import Testimonial from "./Components/Testomonial";
import MyChatBot from "./Chatbot/Chat";
import About from "./Components/About";
import Floating from "./Components/Floating";
import Whatsapp from "./Components/Whatsapp";
import Contact from "./Components/Contact";
import How from "./Components/How";
import Faq from "./Components/Faq";
import Contactus from "./Components/Contactus";
import Brand from "./Components/Brands";
import B2B from "./Components/Bab";
import Prelaunch from "./Components/Prelaunch";
import Carrer from "./Components/Carrer";

import Land from "./Components/Listing/Land";
import CommercialListings from "./Components/Listing/Commercial";
import ResidentialListings from "./Components/Listing/Residence";
import Others from "./Components/Listing/Others";
import Hospital from "./Components/Listing/Hospital";
import MallListings from "./Components/Listing/Mall";
import Jointventures from "./Components/Listing/Jointventures";
import FarmhouseListings from "./Components/Listing/Farmhouse";
import WarehouseListings from "./Components/Listing/Warehouse";
import BestBuyListings from "./Components/Listing/Bestbuy";
import ResortListings from "./Components/Listing/Resort";
import EducationListings from "./Components/Listing/Education";
import LandInvestmentListings from "./Components/Listing/Landinvesment";
import Lease from "./Components/Listing/Lease";
import StandAloneListings from "./Components/Listing/Standalone";
import OfficeListings from "./Components/Listing/Office";
import ProjectsListings from "./Components/Listing/Projectlands";

/* 🔥 FORCE SCROLL TO TOP */
function ScrollFix() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

/* ✅ Reusable Home Page Layout */
function HomePage() {
  return (
    <>
      <Home />
      <Listing />
      <How />
      <About />
      <Brand />
      <Testimonial />
      <Faq />
      <Contactus />
    </>
  );
}

/* ✅ /categories route – Home + scroll to #categories */
function CategoriesPage() {
  useEffect(() => {
    const el = document.getElementById("categories");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return <HomePage />;
}

function AppContent() {
  return (
    <>
      {/* HEADER */}
      <Nav />

      {/* Floating items */}
      <MyChatBot />
      <Floating />
      <Whatsapp />

      {/* ROUTES */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* ✅ /categories route for BACK TO CATEGORIES buttons */}
        <Route path="/categories" element={<CategoriesPage />} />

        {/* Standalone pages */}
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Other pages */}
        <Route path="/B2B-land-&-property-in-raipur" element={<B2B />} />
        <Route path="/pre-launch-land-&-property-raipur" element={<Prelaunch />} />
        <Route path="/career" element={<Carrer />} />

        {/* Listings */}
        <Route path="/luxury-plots-in-raipur" element={<Land />} />
        <Route path="/commercial-property-raipur" element={<CommercialListings />} />
        <Route path="/residential-property-in-raipur" element={<ResidentialListings />} />
        <Route path="/others" element={<Others />} />
        <Route path="/hospital-lands-in-raipur" element={<Hospital />} />
        <Route path="/joint-ventures-property-in-raipur" element={<Jointventures />} />
        <Route path="/malls-jv-opportunity-raipur" element={<MallListings />} />
        <Route path="/farmhouse-plots-raipur" element={<FarmhouseListings />} />
        <Route path="/warehouse-in-raipur" element={<WarehouseListings />} />
        <Route path="/best-property-buy-offices-plots-raipur" element={<BestBuyListings />} />
        <Route path="/resorts-&-wedding-lawn-lands" element={<ResortListings />} />
        <Route path="/education-&-institution-lands-raipur" element={<EducationListings />} />
        <Route path="/land-plot-investment-raipur" element={<LandInvestmentListings />} />
        <Route path="/land-on-lease-in-raipur" element={<Lease />} />
        <Route path="/stand-alone-property-raipur" element={<StandAloneListings />} />
        <Route path="/office-space-in-raipur" element={<OfficeListings />} />
        <Route path="/key-project-lands-raipur" element={<ProjectsListings />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollFix />
      <AppContent />
    </Router>
  );
}

export default App;