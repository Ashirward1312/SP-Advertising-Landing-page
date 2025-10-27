import React from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Listing from './Components/Listing'
import Service from './Components/Service'
import Testimonial from './Components/Testomonial'
import MyChatBot from './Chatbot/Chat'
import About from './Components/About'
import Floating from './Components/Floating'
import Whatsapp from './Components/Whatsapp'
import Contact from './Components/Contact'
import How from './Components/How'
import Faq from './Components/Faq'
import Contactus from './Components/Contactus'
import Brand from './Components/Brands'

function App() {
  return (
    <div >
      <Nav />
      <Home /> 
      <MyChatBot />
      <Floating />
      <Whatsapp />
      <Listing />
      <Service />
      <Testimonial />
      <About />
      <How />
      <Brand />
      <Contact />
      <Faq />
      <Contactus />
      {/* <Chat /> */}
      <Footer />

    </div>
  )
}

export default App
