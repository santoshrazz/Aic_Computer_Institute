import React from "react";
import "./styleScroll.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const GSAP_Scroll_Aic = () => {
  useGSAP(() => {
    gsap.to(".textRevealDiv h2", {
      transform: "translateX(-78%)",
      delay: 2,
      scrollTrigger: {
        trigger: ".textRevealDiv",
        scroller: "body",
        start: "top -50%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);
  return (
    <div className="textRevealDiv">
      <h2 className="h2">AICComputer</h2>
    </div>
  );
};

export default GSAP_Scroll_Aic;
