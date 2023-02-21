import React, {useEffect} from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
    
  );
}

export default App;
