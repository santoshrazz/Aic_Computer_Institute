import React from "react";
import Dashboard_Slider from "./Dashboard_Slider";
import { PiStudentFill, PiCertificateFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Button } from "@material-tailwind/react";
const Main_Dashboard = () => {
  return (
    <>
      <Dashboard_Slider />
      <div className="flex min-h-screen justify-center flex-wrap bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl text-white font-bold">
            Shreenath Kumar
          </h1>
        </div>
        <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
          <div className="grid gap-14 md:grid-cols-3 md:gap-5">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 cursor-pointer transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                <PiStudentFill className="text-2xl text-white" />
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                All Certificate
                <p>89978</p>
              </h1>
              <p className="px-4 text-gray-500">
                You can check or edit all Certificate From this option and total
                89978 Certificate uploaded on your website
              </p>
            </div>
            <div
              data-aos-delay="150"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 cursor-pointer transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                <MdEmail className="text-2xl text-white" />
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                Emails & Requests
                <p>39390</p>
              </h1>
              <p className="px-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                iure inventore amet modi accusantium vero perspiciatis, incidunt
                dicta sed aspernatur!
              </p>
            </div>
            <div
              data-aos-delay="300"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 cursor-pointer transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                <PiCertificateFill className="text-2xl text-white" />
              </div>
              <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                All Students
                <p>93783</p>
              </h1>
              <p className="px-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                iure inventore amet modi accusantium vero perspiciatis, incidunt
                dicta sed aspernatur!
              </p>
              <Button>Check</Button>;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Dashboard;
