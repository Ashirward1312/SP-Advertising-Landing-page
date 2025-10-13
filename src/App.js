import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ServicesPage from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
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
    </>
  );
}

export default App;
