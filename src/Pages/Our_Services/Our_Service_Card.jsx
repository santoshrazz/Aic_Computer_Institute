"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./Our_Service2";
import Computer1 from "../../Assets/Computer1.jpg";
import Computer2 from "../../Assets/Computer2.jpg";
import ISO from "../../Assets/ISO.jpg";
import ComputerImage from "../../Assets/Computer_Image.jpg";
export default function ThreeDCardDemo() {
  const ServiceArray = [
    {
      title: "Global ISO Certification",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: ISO,
    },
    {
      title: "Quality Education",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: ComputerImage,
    },
    {
      title: "Certification Verification",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: Computer1,
    },
    {
      title: "Global ISO Certification",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      img: Computer2,
    },
  ];
  return (
    <div className="flex gap-4 m-4 flex-wrap justify-center items-center">
      {ServiceArray.map((ele, ind) => {
        return (
          <CardContainer className="inter-var " key={ind}>
            <CardBody className=" bg-gray-800 text-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {ele.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {ele.desc}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <img
                  src={ele.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Book Demo
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
}
