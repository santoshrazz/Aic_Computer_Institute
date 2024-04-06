import React from "react";
import Dashboard_Slider from "./Dashboard_Slider";
import Card_Comp from "../../../Components/Card_Comp";

const Main_Dashboard = () => {
  return (
    <section className=" h-screen max-w-full  flex justify-around">
      <div className="first">
        <Dashboard_Slider />
      </div>
      <div className="second w-full ml-10  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
        <Card_Comp
          title={3554}
          title2={"Students"}
          desc={"You can check all certificate uploaded by you on below link"}
        />
        <Card_Comp
          title={3554}
          title2={"Students"}
          desc={"You can check all certificate uploaded by you on below link"}
        />
        <Card_Comp
          title={3554}
          title2={"Students"}
          desc={"You can check all certificate uploaded by you on below link"}
        />
        <Card_Comp
          title={3554}
          title2={"Students"}
          desc={"You can check all certificate uploaded by you on below link"}
        />
      </div>
    </section>
  );
};

export default Main_Dashboard;
