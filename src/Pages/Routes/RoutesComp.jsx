import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course_Container from "../Course2/Course_Container";
import Contact from "../Contact/Contact";
import StickyNavbar from "../../Components/StickyNavbar";
import Home from "../Home/Home";
import Login from "../Admin/Login_Page/Login";
import Admin_Route from "./Admin_Route";
import Frenchise from "../Franchise/Frenchise";
import Director from "../Director/Director";
import Check_Certificate from "../Admin/Check_Certificate/Check_Certificate";
import { Add_Frenchise } from "../Admin/Add_Frenchise/Add_Frenchise";
import Certificate_Download from "../Certificate_Download/Certificate_Download";
import Show_Notification from "../Notifications/Show_Notification";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes path="/">
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="check_certificate" element={<Check_Certificate />} />
        <Route path="download_certificate" element={<Certificate_Download />} />
        <Route path="course" element={<Course_Container />} />
        <Route path="login" element={<Login />} />
        <Route path="allfrenchise" element={<Frenchise />} />
        <Route path="allNotifications" element={<Show_Notification />} />
        <Route path="director" element={<Director />} />
        <Route path="add_frenchise" element={<Add_Frenchise />} />
        <Route path="head/*" element={<Admin_Route />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
