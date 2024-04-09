import React, { useState } from "react";
import "./Check_Certificate.css";

const Check_Certificate = () => {
  const [result, setResult] = useState(null);
  return (
    <div className="loginDiv w-full  bg-green-400 flex gap-2 justify-around flex-wrap items-center  min-h-screen">
      <div className="loginElementDiv  p-8 sm:w-10/12 md:w-1/3 bg-white  rounded-md text-slate-100">
        <form action="" className="flex flex-col" method="get">
          <h4 className="text-black text-lg font-bold text-center">
            Check Certificate
          </h4>
          <input
            type="text"
            className="text-black bg-blue-gray-200 placeholder:text-black min-w-fit p-2 focus:border-none my-2 focus:outline-none"
            placeholder="Serial No."
            id="Email"
          />
          <input
            type="text"
            placeholder="Father Name"
            className="text-black bg-blue-gray-200 placeholder:text-black min-w-fit p-2 focus:border-none my-2 focus:outline-none"
            id="password"
          />
          <button className="btn bg-green-700 hover:bg-black text-white mx-auto my-4 text-center py-2 w-full">
            Login
          </button>
        </form>
      </div>
      <div className="table">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Your Products
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Type Your Serial number of Your Certificate (Appears at the top
                right corner )
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Harsh Kumar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Father Name
                </th>
                <td className="px-6 py-4">Sumit Sah</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Course
                </th>
                <td className="px-6 py-4">ADCA</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Date of Issue
                </th>
                <td className="px-6 py-4">12-09-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Check_Certificate;
