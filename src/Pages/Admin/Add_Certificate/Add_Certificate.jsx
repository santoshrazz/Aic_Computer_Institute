import React, { useState } from "react";
import ButtonComp from "../../../Components/ButtonComp";
import { Link } from "react-router-dom";
import Dashboard_Slider from "../Dashboard/Dashboard_Slider";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Add_Certificate = () => {
  // State for handle form value
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    gender: "",
    course: "",
    frenchise: "",
    admissionDate: "",
    fees: "",
    registrationNumber: "",
    serialNumber: "",
    issueDate: "",
    percent: "",
    place: "",
  });
  const [editData, setEditData] = useState();

  // Get data from useLocationHook if admin wants to edit certificate

  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setFormData({
        applicantName: location.state?.name,
        fatherName: location.state?.fatherName,
        gender: location.state?.Gender,
        course: location.state?.course,
        frenchise: location.state?.frenchise,
        admissionDate: location.state?.DateOFAdmission?.slice(0, 10),
        fees: location.state?.fees,
        registrationNumber: location.state?.RegistrationNumber,
        serialNumber: location.state?.SerialNumber,
        issueDate: location.state?.DateOfIssue?.slice(0, 10),
        percent: location.state?.percentage,
        place: location.state?.place,
      });
    }
  }, []);
  // Handle form change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   // Toast notify Function
  const notify = (msg) => toast(msg);

  //----------> Update Certificate Funtion  <----------------------
  const updateData = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.put(
        "/students//update-certificate",
        formData
      );
      if (response.data.status) {
        notify(response.data.message);
        setFormData({
          applicantName: response.data.result.name,
          fatherName: response.data.result.fatherName,
          gender: response.data.result.Gender,
          course: response.data.result.course,
          frenchise: response.data.result.frenchise,
          admissionDate: response.data.result.DateOFAdmission?.slice(0, 10),
          fees: response.data.result.fees,
          registrationNumber: response.data.result.RegistrationNumber,
          serialNumber: response.data.result.SerialNumber,
          issueDate: response.data.result.DateOfIssue?.slice(0, 10),
          percent: response.data.result.percentage,
          place: response.data.result.place,
        });
      }
    } catch (error) {
      console.log(error);
      notify(error.response.data.message);
    }
  };
  // Post Data Function
  const postData = async (postDataParams) => {
    try {
      const response = await axios.post(
        "/students/create-certificate",
        postDataParams
      );
      return response.data;
    } catch (error) {
      console.log("Error at postdata", error);
    }
  };

  // useMutation Function for add Certificate
  const { mutate, isSuccess, data, isError, error } = useMutation({
    mutationKey: ["postData"],
    mutationFn: postData,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
    // Do something with the form data, like send it to an API
  };

  // if isError
  useEffect(() => {
    if (isError) {
      notify(error.response.data.message);
    }
  }, [isError, data, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      notify(data.message);
      // setting object as empty
      setFormData({
        applicantName: "",
        fatherName: "",
        gender: "",
        course: "",
        frenchise: "",
        admissionDate: "",
        fees: "",
        registrationNumber: "",
        serialNumber: "",
        issueDate: "",
        percent: "",
        place: "",
      });
    }
  }, [isSuccess]);
  return (
    <section className=" py-1 bg-blueGray-50">
      <Dashboard_Slider />
      <div className="w-full lg:w-9/12 px-4 mx-auto mt-6">
        {/* Toast Container For Success Alert */}
        <ToastContainer />
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add Certificate
              </h6>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                <Link to={"/admin/all_Students"}>All Certificate</Link>
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Add Details
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Applicant Name
                    </label>
                    <input
                      type="text"
                      name="applicantName"
                      value={formData.applicantName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Father Name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      id="gender"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="Gender">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Course
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      id="course"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="Select_Course">Select Course</option>
                      <option value="Dca">Dca</option>
                      <option value="ADCA">ADCA</option>
                      <option value="Tally">Tally</option>
                      <option value="DTP">DTP</option>
                      <option value="ENGLISH TYPING">ENGLISH TYPING</option>
                      <option value="HINDI TYPING">HINDI TYPING</option>
                      <option value="JAVA">JAVA</option>
                      <option value="PYTHON">PYTHON</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Franchaise
                    </label>
                    <select
                      name="frenchise"
                      id="course"
                      value={formData.frenchise}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="Select_Course">Select Frencheise</option>
                      <option value="Dca">Dca</option>
                      <option value="ADCA">ADCA</option>
                      <option value="Tally">Tally</option>
                      <option value="DTP">DTP</option>
                      <option value="ENGLISH TYPING">ENGLISH TYPING</option>
                      <option value="HINDI TYPING">HINDI TYPING</option>
                      <option value="JAVA">JAVA</option>
                      <option value="PYTHON">PYTHON</option>
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Date of Admission
                    </label>
                    <input
                      type="date"
                      value={formData.admissionDate}
                      onChange={handleChange}
                      name="admissionDate"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Fees
                    </label>
                    <input
                      type="text"
                      name="fees"
                      value={formData.fees}
                      onChange={handleChange}
                      placeholder="Fees"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Registration Number
                    </label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      name="registrationNumber"
                      placeholder="Registration Number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Serial Number
                    </label>
                    <input
                      type="text"
                      value={formData.serialNumber}
                      onChange={handleChange}
                      name="serialNumber"
                      placeholder="serial Number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Certificate Issue Date
                    </label>
                    <input
                      type="date"
                      value={formData.issueDate}
                      onChange={handleChange}
                      name="issueDate"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Percent
                    </label>
                    <input
                      type="text"
                      value={formData.percent}
                      onChange={handleChange}
                      name="percent"
                      placeholder="Percent"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/6 px-4 my-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Place
                    </label>
                    <input
                      type="text"
                      value={formData.place}
                      onChange={handleChange}
                      name="place"
                      placeholder="Place"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                {location.state ? (
                  <div className="w-full px-4">
                    <div className="relative flex justify-center items-center w-full mb-3">
                      <button
                        className="bg-black rounded-md text-white px-4 py-2"
                        onClick={updateData}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full px-4">
                    <div className="relative flex justify-center items-center w-full mb-3">
                      <button
                        onClick={handleSubmit}
                        className="bg-black rounded-md text-white px-4 py-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add_Certificate;
