import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
const Show_Single_Notification = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center flex-col m-4 p-4">
        <h2 className=" text-3xl font-semibold">Latest Notifications {id}</h2>
        {id}
        <div className="notifications bg-blue-gray-400 m-4 p-4 w-full rounded-md flex flex-col gap-5">
          <h3 className="text-white text-2xl">{state?.title}</h3>
          <p className="text-xl font-Roboto">{state?.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 m-auto py-2 px-4 rounded-md text-white"
          onClick={() => {
            navigate("/allNotifications");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Show_Single_Notification;
