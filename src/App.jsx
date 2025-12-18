// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Gallery from "./Components/Gallery"; // ✅ Gallery page

// ✅ Land, Commercial, Residential pages
import Land from "./Components/Listing/Land";
import CommercialListings from "./Components/Listing/Commercial";
import ResidentialListings from "./Components/Listing/Residence";
import Others from "./Components/Listing/Others";
import Hospital from "./Components/Listing/Hospital";
import MallListings from "./Components/Listing/Mall"; // Malls page (JV for malls)

// ✅ Joint Ventures page
import Jointventures from "./Components/Listing/Jointventures";
import FarmhouseListings from "./Components/Listing/Farmhouse";
import WarehouseListings from "./Components/Listing/Warehouse";
import BestBuyListings from "./Components/Listing/Bestbuy";
import ResortListings from "./Components/Listing/Resort";
import EducationListings from "./Components/Listing/Education";
import LandInvestmentListings from "./Components/Listing/Landinvesment";

function App() {
  return (
    <Router>
      <div>
        {/* Har page par common components */}
        <Nav />
        <MyChatBot />
        <Floating />
        <Whatsapp />

        <Routes>
          {/* HOME / MAIN LANDING */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Listing />
                <How />
                <About />
                <Service />
                <Brand />
                {/* 🚫 Yahan se Gallery hata diya – ab ye alag page hoga */}
                <Testimonial />
                <Contact />
                <Faq />
                <Contactus />
              </>
            }
          />

          {/* ✅ GALLERY PAGE (alag route) */}
          <Route path="/gallery" element={<Gallery />} />

          {/* B2B Page */}
          <Route path="/b2b" element={<B2B />} />

          {/* Pre-Launch Page */}
          <Route path="/prelaunch" element={<Prelaunch />} />

          {/* Career Page */}
          <Route path="/career" element={<Carrer />} />

          {/* LAND PAGE */}
          <Route path="/land" element={<Land />} />

          {/* COMMERCIAL REAL ESTATE PAGE */}
          <Route path="/commercial" element={<CommercialListings />} />

          {/* RESIDENTIAL REAL ESTATE PAGE */}
          <Route path="/residential" element={<ResidentialListings />} />

          {/* OTHERS / PREMIUM VIDEO SHOWCASE PAGE */}
          <Route path="/others" element={<Others />} />

          {/* HOSPITAL PAGE */}
          <Route path="/hospital" element={<Hospital />} />

          {/* ✅ JOINT VENTURES PAGE */}
          <Route path="/jointventures" element={<Jointventures />} />

          {/* ✅ MALLS JV PAGE */}
          <Route path="/malls" element={<MallListings />} />
          <Route path="/farmhouse" element={<FarmhouseListings />} />
          <Route path="/warehouse" element={<WarehouseListings />} />
          <Route path="/bestbuy" element={<BestBuyListings />} />
          <Route path="/resorts-wedding" element={<ResortListings />} />
          <Route path="/education" element={<EducationListings />} />
          <Route path="/land-investment" element={<LandInvestmentListings />} />
        </Routes>

        {/* Footer sab pages pe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;