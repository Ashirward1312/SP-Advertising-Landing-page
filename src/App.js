import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ServicesPage from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhatsAppFloat from "./Components/Whatsapp";
import ContactUsModal from "./Components/Contactus"; // import modal

function App() {
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    // page load hote hi modal open ho jaye
    setOpenContact(true);
  }, []);

  const handleClose = () => setOpenContact(false);

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    // yahan API call ya backend logic laga sakte ho
  };

  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>

      <WhatsAppFloat />

      {/* Contact Modal */}
      <ContactUsModal
        open={openContact}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
