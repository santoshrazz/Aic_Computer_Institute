import React, { useRef } from "react";
import gsap from "gsap";

const TextRevealSection = () => {
  return (
    <div className="main h-48 w-full bg-black">
      <div className="cursor h-5 w-5 rounded-full fixed top-0 left-0 bg-teal-500 opacity-0"></div>
    </div>
  );
};

export default TextRevealSection;
