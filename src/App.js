import React from "react";
import Navbar from "./components/Navbar";
import Landing_info from "./components/Landing_Info"
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import OtherContent from "./components/OtherContent";
import Footer from "./components/Footer";
const App=()=>{
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Landing_info />
      <Portfolio />
      <About />
      <Contact />
      <OtherContent />
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default App;