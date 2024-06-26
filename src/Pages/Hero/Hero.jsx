"use client";
import React from "react";
import { ContainerScroll } from "./Ui/Container_Scroll";
import C_Image from "../../Assets/Computer_Image.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  // ----------> GSAP Animation <-------------
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".heading", {
      y: 300,
      opacity: 0,
      scale: 0.2,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl heading font-semibold text-black dark:text-white">
              Unlock Education At <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Aic Computer Institute
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "ADCA",
    designation: "Advance Diploma in Computer Application",
    image: C_Image,
    badge: "12 Months",
  },
  {
    name: "DTP",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DDTP",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "8 Months",
  },
  {
    name: "CTTC",
    designation: "Certificate in lorem ipsum",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "HDCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "PGDCA",
    designation: "PG Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DFA",
    designation: "Diploma in Foundation",
    image: C_Image,
    badge: "4 Months",
  },
  {
    name: "Tally",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "4 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
  {
    name: "DCA",
    designation: "Diploma in Computer Application",
    image: C_Image,
    badge: "6 Months",
  },
];
