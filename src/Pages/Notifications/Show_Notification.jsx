import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Show_Notification = () => {
  const [result, setResult] = useState([]);

  // Get Data Funtion
  const getData = async () => {
    const response = await axios.get("notification/getNotification");
    return response.data;
  };

  const navigate = useNavigate();
  // useQuery Hook
  const { data, error, loading } = useQuery({
    queryKey: [""],
    queryFn: getData,
    staleTime: 30000,
  });

  // Handling Data After Success
  useEffect(() => {
    if (data) {
      console.log(data);
      setResult(data.response);
      console.log(result);
    }
  }, [data]);

  // Handling Error After Error

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="flex justify-center items-center flex-col m-4 p-4">
      <h2 className=" text-3xl font-semibold">Latest Notifications</h2>
      <div className="notifications bg-blue-gray-400 m-4 p-4 w-full rounded-md">
        <ol className="flex flex-col gap-5 list-decimal p-4 text-white text-xl">
          {result?.map((ele) => {
            return (
              <li key={ele._id}>
                <Link to={"/"} className="text-white hover:underline text-xl">
                  {ele.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Show_Notification;
