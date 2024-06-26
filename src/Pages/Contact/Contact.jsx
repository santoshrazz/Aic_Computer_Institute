import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DB_URL } from "../../Constants/Const";

const Contact = () => {
  // useState to handle formState
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // notify funtion to show toast notification
  const notify = (msg) => toast(msg);

  // Post data funtion to post data on server
  const postData = async (data) => {
    try {
      const response = await axios.post(`${DB_URL}/students/saveRequest`, data);
      return response.data;
    } catch (error) {
      console.log(`Error at postData on contact component`, error);
      return error.response.data;
    }
  };
  // useMutation hook for optimised query
  const { mutate, isSuccess, data, isError, error } = useMutation({
    mutationKey: ["postData"],
    mutationFn: postData,
  });
  useEffect(() => {
    if (isSuccess) {
      notify(data.message);
      setformData({ name: "", email: "", message: "", phone: "" });
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      console.log(error);
      notify(error.message);
    }
  }, [error]);
  // Handle formChange function to change the state of the form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit Form Funtion to send DB Request
  const handleSubmitForm = (e) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <div className="container">
      <ToastContainer />
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title font-Roboto font-bold">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt mx-5"></i>

              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope mx-5"></i>
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone mx-5"></i>
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p className="font-bold">Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="" onSubmit={handleSubmitForm} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input placeholder:text-white"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
              />
              {/* <label for="">Username</label>
                            <span>Username</span> */}
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input placeholder:text-white"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input placeholder:text-white"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input placeholder:text-white"
                placeholder="Message"
                value={formData.message}
                onChange={handleFormChange}
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn bg-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
