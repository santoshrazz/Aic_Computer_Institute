import React, { useState } from "react";
import "./Frenchise.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
const Frenchise = () => {
  // usestate to store result
  const [frenchiseResult, setfrenchiseResult] = useState([]);

  // funtion to fetch frenchise
  const fetchFrenchise = async () => {
    const response = await axios.get("/frenchise/getFrenchise");
    return response.data;
  };
  // fetching data using useQuery
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["frenchiseData"],
    queryFn: fetchFrenchise,
    staleTime: 30000,
  });
  useEffect(() => {
    if (data) {
      setfrenchiseResult(data.frenchise);
    }
  }, [data]);
  if (isLoading) {
    <h3>Loading....</h3>;
  }
  return (
    <div className="bg-[#40678d] min-h-screen">
      <h3 className=" text-center font-extrabold text-5xl text-white">
        Our New Frenchise
      </h3>
      <div className=" min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
          <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
            {frenchiseResult.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0"
                >
                  <Link
                    to={"/frenchise"}
                    className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
                  >
                    <img
                      src={ele.frenchiseAvatar}
                      className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
                    />
                    <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                      <div className="h-1/2 relative">
                        <div className="absolute bottom-0">
                          <h2 className="font-bold text-white text-center leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                            {ele.name}, By - <span>{ele.ownerName}</span>
                          </h2>
                        </div>
                      </div>
                      <div className="h-1/2">
                        <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
                          Our new Frenchise at {ele.location} is working from{" "}
                          {ele.openingYear}
                        </p>
                        <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
                          Read More
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frenchise;
