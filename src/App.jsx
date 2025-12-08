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

// ✅ Land, Commercial, Residential pages
import Land from "./Components/Listing/Land"; // jahan tumne LandListings dala hai
import CommercialListings from "./Components/Listing/Commercial"; // VB Tower / commercial wala
import ResidentialListings from "./Components/Listing/Residence"; // residential cards wala
import Others from "./Components/Listing/Others"; // premium video showcase wala
import Hospital from "./Components/Listing/Hospital";

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
                <Testimonial />
                <Contact />
                <Faq />
                <Contactus />
              </>
            }
          />

          {/* B2B Page */}
          <Route path="/b2b" element={<B2B />} />

          {/* Pre-Launch Page */}
          <Route path="/prelaunch" element={<Prelaunch />} />

          {/* LAND PAGE */}
          <Route path="/land" element={<Land />} />

          {/* COMMERCIAL REAL ESTATE PAGE */}
          <Route path="/commercial" element={<CommercialListings />} />

         
          {/* ✅ RESIDENTIAL REAL ESTATE PAGE */}
          <Route path="/residential" element={<ResidentialListings />} />


          {/* OTHERS / PREMIUM VIDEO SHOWCASE PAGE */}
          <Route path="/others" element={<Others />} />

          {/* Agar direct contact page chahiye */}
          {/* <Route path="/contact" element={<Contactus />} /> */}

          {/* HOSPITAL PAGE */}
          <Route path="/hospital" element={<Hospital />} />
          
        </Routes>

        {/* Footer sab pages pe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;