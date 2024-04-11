import React from "react";
import Dashboard_Slider from "../Dashboard/Dashboard_Slider";

const All_Students = () => {
  const array = new Array(12).fill(0);
  return (
    <>
      <Dashboard_Slider />
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              All Students
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg scroll-auto">
              <table className="min-w-full leading-normal scroll-auto overflow-scroll">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                      Students / Invoice
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                      Course
                    </th>
                    <th className=" hidden md:block px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                      Admission Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((_, ind) => {
                    return (
                      <tr key={ind}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap font-bold">
                                Harsh Kumar
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                Vikrant Yadav
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap font-extrabold">
                            $20,000
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            90876
                          </p>
                        </td>
                        <td className="hidden md:block px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 28, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due in 3 days
                          </p>
                        </td>
                        <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Paid</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <button
                            type="button"
                            className="inline-block text-gray-500 hover:text-gray-700"
                          >
                            <svg
                              className="inline-block h-6 w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default All_Students;
