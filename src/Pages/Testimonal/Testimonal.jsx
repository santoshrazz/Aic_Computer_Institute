import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import Testimonal_Card from "./Testimonal_Card";
const Testimonal = () => {
  return (
    <>
      <h3 className="text-center font-extrabold text-4xl">
        Our Student Review's
      </h3>
      <Marquee pauseOnHover={true} speed={90}>
        <div className="flex w-full  justify-around m-3 p-3">
          <Testimonal_Card number={"1"} />
          <Testimonal_Card number={"4"} />
        </div>
        <div className="flex w-full  justify-around m-3 p-3">
          <Testimonal_Card number={"1"} />
          <Testimonal_Card number={"4"} />
        </div>
      </Marquee>
    </>
  );
};

export default Testimonal;
