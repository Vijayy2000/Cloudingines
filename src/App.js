import React from "react";

import "./App.css";
import CardList from "./Pages/Cards/Cards";
import FooterPage from "./Pages/FooterPage/FooterPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NavBar from "./components/Navbar/NavBar";
import Services from "./Pages/Services/Services";
import CarouselPage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div >
      <NavBar style={{backgroundColor:'rgb(179, 217, 255,0.2)'}} />

      <section id="home" style={{backgroundColor:'rgb(179, 217, 255,0.2)'}}>
        <CarouselPage />
      </section>
      <section style={{backgroundColor:'rgb(179, 217, 255,0.2)'}} >
      <CardList  />
      </section>
      

      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <FooterPage />
    </div>
  );
}

export default App;
