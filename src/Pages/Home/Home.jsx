import React from "react";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel";
import Course_Container from "../Course2/Course_Container";
import About_Container from "../About_Us/About_Container";
import Footer from "../Footer/Footer";
import Testimonal from "../Testimonal/Testimonal";
import Contact from "../Contact/Contact";
import Frenchise from "../Franchise/Frenchise";
import Director from "../Director/Director";
import { Accordian } from "../Accordian/Accordian";
import { Vortex2 } from "../GSAP_Scroll/Vertex2";
import ThreeDCardDemo from "../Our_Services/Our_Service_Card";
// import Vortex from "../GSAP_Scroll/Vortex";
const Home = () => {
  return (
    <div>
      <Hero />
      <Vortex2 />
      <Carousel />
      <Course_Container />
      <About_Container />
      <Testimonal />
      <Accordian />
      {/* <Our_Services /> */}
      <ThreeDCardDemo />
      <Frenchise />
      <Contact />
      <Director />
      <Footer />
    </div>
  );
};

export default Home;
