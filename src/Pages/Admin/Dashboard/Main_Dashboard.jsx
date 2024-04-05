import React from "react";
import Dashboard_Slider from "./Dashboard_Slider";
import Card from "../../../Components/Card";

const Main_Dashboard = () => {
  return (
    <section className=" h-screen max-w-full  flex justify-around">
      <div className="first">
        <Dashboard_Slider />
      </div>
      <div className="second w-full ml-10  grid md:grid-cols-3 grid-cols-1 gap-3">
        <Card data={677} title={"Total Students"} />
        <Card data={677} title={"Total Certificate"} />
        <Card data={677} title={"Total Payments"} />
        <Card data={677} title={"Total Students"} />
      </div>
    </section>
  );
};

export default Main_Dashboard;
