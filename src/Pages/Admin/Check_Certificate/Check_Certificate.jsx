import React, { useEffect, useState } from "react";
import "./Check_Certificate.css";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Check_Certificate = () => {
  const [result, setResult] = useState(null);

  // Handle form change
  const [formData, setFormData] = useState({
    serialNumber: "",
    fatherName: "",
  });

  // Navigate Object
  const navigate = useNavigate();

  // navigateTodownload fuction to redirect on download certificate component
  const navigateToDownload = () => {
    navigate("/download_certificate", { state: result });
  };
  // Handle onChnage
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toast notify Function
  const notify = (msg) => toast(msg);

  // Get data Function
  const getData = async (paramsData) => {
    const response = await axios.post("students/search_Student", paramsData);
    return response.data;
  };
  const { mutate, isSuccess, data, isPending, isError, error } = useMutation({
    mutationKey: ["getCertificateData"],
    mutationFn: getData,
  });
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };
  // On Succefully data receive
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      if (!data) {
        notify("No student Found");
      }
      notify(data.message);
      setResult(data?.student);
    }
  }, [data, isSuccess]);

  // On Error
  useEffect(() => {
    if (isError) {
      console.log(error.response.data.message);
      notify(error.response.data.message);
    }
  }, [isError]);
  return (
    <div className="loginDiv w-full  bg-green-400 flex gap-2 justify-around flex-wrap items-center  min-h-screen">
      {/* Toast Container */}
      <ToastContainer />
      <div className="loginElementDiv  p-8 sm:w-10/12 md:w-1/3 bg-white  rounded-md text-slate-100">
        <form
          action=""
          className="flex flex-col"
          method="post"
          onSubmit={handleSubmit}
        >
          <h4 className="text-black text-lg font-bold text-center">
            Check Certificate
          </h4>
          <input
            type="number"
            className="text-black bg-blue-gray-200 placeholder:text-black min-w-fit p-2 focus:border-none my-2 focus:outline-none"
            placeholder="Serial No."
            id="Email"
            value={formData.serialNumber}
            name="serialNumber"
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="Father Name"
            className="text-black bg-blue-gray-200 placeholder:text-black min-w-fit p-2 focus:border-none my-2 focus:outline-none"
            id="password"
            value={formData.fatherName}
            name="fatherName"
            onChange={handleOnChange}
          />
          <button className="btn bg-green-700 hover:bg-black text-white mx-auto my-4 text-center py-2 w-full">
            {isPending ? "Loading..." : "Check"}
          </button>
        </form>
      </div>
      {result && (
        <div className="table">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Your Certificate Detail
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Type Your Serial number of Your Certificate (Appears at the
                  top right corner )
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {result ? result.name : ""}
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
                  <td className="px-6 py-4">
                    {result ? result.fatherName : ""}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Course
                  </th>
                  <td className="px-6 py-4">{result ? result.course : ""}</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Date of Issue
                  </th>
                  <td className="px-6 py-4">
                    {result ? result.DateOfIssue.slice(0, 10) : ""}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="text-center mx-auto bg-black text-white w-full hover:bg-blue-900 p-3"
              onClick={navigateToDownload}
            >
              Download Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Check_Certificate;
