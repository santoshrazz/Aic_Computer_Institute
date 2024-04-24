import React from "react";
import Dashboard_Slider from "./Dashboard_Slider";
import { PiStudentFill, PiCertificateFill } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Main_Dashboard = () => {
  const dataArray = [
    {
      heading: "All Certificate",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <PiCertificateFill />,
      numbers: "45342",
      btnText: "Check",
      redirectUrl: "/head/all_Certificate",
    },
    {
      heading: "Add Certificate",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <PiCertificateFill />,
      numbers: "56542",
      btnText: "Add",
      redirectUrl: "/head/add_certificate",
    },

    {
      heading: "All Student Request",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <PiStudentFill />,
      numbers: "34232",
      btnText: "Check",
      redirectUrl: "/head/view_student",
    },
    {
      heading: "Search Student",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <PiStudentFill />,
      numbers: "23434",
      btnText: "Add",
      redirectUrl: "/head/search_student",
    },

    {
      heading: "Add Frenchise",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <FaCodeBranch />,
      numbers: "56542",
      btnText: "Add",
      redirectUrl: "/head/profile",
    },
    {
      heading: "All Frenchise",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <FaCodeBranch />,
      numbers: "56542",
      btnText: "Check",
      redirectUrl: "/frenchise",
    },
    {
      heading: "Your Profile",
      desc: "lorme ipsum dolar sit generator and something else else",
      icon: <CgProfile />,
      numbers: "56542",
      btnText: "Visit",
      redirectUrl: "/head/profile",
    },
  ];
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
          <div className="grid gap-14 md:grid-cols-3 md:gap-5 ">
            {dataArray.map((ele, ind) => {
              return (
                <div
                  data-aos-delay="300"
                  key={ind}
                  className="rounded-xl bg-white p-6 text-center shadow-xl transform translate-y-4 hover:translate-y-8 duration-500 ease-in-out  hover:scale-105 "
                >
                  <div className=" text-white text-3xl mx-auto flex h-16 w-16 -translate-y-12 cursor-pointer transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                    {ele.icon}
                  </div>
                  <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                    {ele.heading}
                    <p>{ele.numbers}</p>
                  </h1>
                  <p className="px-4 text-gray-500">{ele.desc}</p>
                  <Button>
                    <Link to={ele.redirectUrl}>{ele.btnText}</Link>
                  </Button>
                  ;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Dashboard;
