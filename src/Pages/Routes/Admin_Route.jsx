import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Add_Certificate from "../Admin/Add_Certificate/Add_Certificate";
import All_Students from "../Admin/All_Students/All_Students";
import Main_Dashboard from "../Admin/Dashboard/Main_Dashboard";
import { useSelector } from "react-redux";
import Search_Student from "../Admin/Search_Student/Search_Student";
import View_Student from "../Admin/View_Student/View_Student";
import Profile from "../Admin/Profile/Profile";
import Add_Frenchise from "../Franchise/Add_Frenchise";
const Admin_Route = () => {
  // Getting login state value from store
  const { loginState } = useSelector((store) => store.login);

  // Creating navigate object
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, [loginState]);

  return (
    <div>
      <Routes>
        <Route path="add_certificate" element={<Add_Certificate />} />
        <Route path="all_Certificate" element={<All_Students />} />
        <Route path="add_frenchise" element={<Add_Frenchise />} />
        <Route path="search_student" element={<Search_Student />} />
        <Route path="view_student" element={<View_Student />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Main_Dashboard />} />
      </Routes>
    </div>
  );
};

export default Admin_Route;
