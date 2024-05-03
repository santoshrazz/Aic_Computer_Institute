import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextRevealSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-white text-4xl font-bold" ref={textRef}>
        <span className="text-transparent">A</span>
        <span className="text-transparent">n</span>
        <span className="text-transparent">i</span>
        <span className="text-transparent">m</span>
        <span className="text-transparent">a</span>
        <span className="text-transparent">t</span>
        <span className="text-transparent">e</span>
        <span className="text-transparent">d</span>
        <span className="text-transparent"> </span>
        <span className="text-transparent">T</span>
        <span className="text-transparent">e</span>
        <span className="text-transparent">x</span>
        <span className="text-transparent">t</span>
        <span className="text-transparent"> </span>
        <span className="text-transparent">R</span>
        <span className="text-transparent">e</span>
        <span className="text-transparent">v</span>
        <span className="text-transparent">e</span>
        <span className="text-transparent">a</span>
        <span className="text-transparent">l</span>
        <span className="text-transparent"> </span>
        <span className="text-transparent">E</span>
        <span className="text-transparent">f</span>
        <span className="text-transparent">f</span>
        <span className="text-transparent">e</span>
        <span className="text-transparent">c</span>
        <span className="text-transparent">t</span>
      </div>
    </div>
  );
};

export default TextRevealSection;
