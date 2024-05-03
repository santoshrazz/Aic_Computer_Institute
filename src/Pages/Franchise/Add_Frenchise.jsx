import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add_Frenchise() {
  // useNavigate object
  const navigate = useNavigate();
  // Notify funtion to send toast notification
  const notify = (msg) => toast(msg);
  // useState for formChange
  const [formdata, setformdata] = useState({
    name: "",
    location: "",
    ownerName: "",
    openingYear: "",
    frenchiseAvatar: undefined,
  });
  // Handle Form Change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Assuming single file upload
    setformdata({ ...formdata, frenchiseAvatar: file });
  };

  //Send data function to send data on backend
  const sendData = async (frenchiseInfo) => {
    // Creating formData Object
    const formData = new FormData();

    // Append form data
    formData.append("name", frenchiseInfo.name);
    formData.append("location", frenchiseInfo.location);
    formData.append("ownerName", frenchiseInfo.ownerName);
    formData.append("openingYear", frenchiseInfo.openingYear);
    formData.append("frenchiseAvatar", frenchiseInfo.frenchiseAvatar); // Assuming frenchiseAvatar is a file
    const response = await axios.post("/frenchise/add-frenchise", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  // UseMutate to post data to backend
  const { mutate, isError, isPending, error, isSuccess, data } = useMutation({
    mutationFn: sendData,
    mutationKey: "frenchisePostData",
  });

  // Handle Submit Form
  const submitForm = async (e) => {
    e.preventDefault();
    mutate(formdata);
  };

  // useEffect on isSuccess
  useEffect(() => {
    if (data) {
      console.log(data);
      notify(data.message);
      setTimeout(() => {
        navigate("/allfrenchise");
      }, 1000);
    }
  }, [data, isSuccess]);

  // useEffect on inError
  useEffect(() => {
    if (error) {
      const errMsg = error.response.data.message || "Some error occured";
      notify(errMsg);
    }
  }, [isError]);
  return (
    <div className="">
      <ToastContainer />
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Add Your Frenchise
        </h1>
        <form onSubmit={submitForm} method="post" encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Frenchise Name
              </label>
              <input
                onChange={handleFormChange}
                name="name"
                value={formdata.name}
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Frenchise Location
              </label>
              <input
                onChange={handleFormChange}
                name="location"
                value={formdata.location}
                id="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="ownerName"
              >
                Owner Name
              </label>
              <input
                onChange={handleFormChange}
                name="ownerName"
                id="ownerName"
                value={formdata.ownerName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="Opening Year"
              >
                Opening Year
              </label>
              <input
                onChange={handleFormChange}
                name="openingYear"
                id="Opening Year"
                type="text"
                value={formdata.openingYear}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Frenchise Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        onChange={handleFileChange}
                        id="file-upload"
                        name="frenchiseAvatar"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
