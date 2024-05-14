import React from "react";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel";
import Course_Container from "../Course2/Course_Container";
import About_Container from "../About_Us/About_Container";
import Footer from "../Footer/Footer";
import Testimonal from "../Testimonal/Testimonal";
import Contact from "../Contact/Contact";
import Our_Services from "../Our_Services/Our_Services";
import Frenchise from "../Franchise/Frenchise";
import Director from "../Director/Director";
import { Accordian } from "../Accordian/Accordian";
import GSAP_Scroll_Aic from "../GSAP_Scroll/GSAP_Scroll_Aic";
const Home = () => {
  return (
    <div>
      <Hero />
      <GSAP_Scroll_Aic />
      <Carousel />
      <Course_Container />
      <About_Container />
      <Testimonal />
      <Accordian />
      <Our_Services />
      <Frenchise />
      <Contact />
      <Director />
      <Footer />
    </div>
  );
};

export default Home;
