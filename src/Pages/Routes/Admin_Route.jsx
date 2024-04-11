import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Check_Certificate from "../Admin/Check_Certificate/Check_Certificate";
import Add_Certificate from "../Admin/Add_Certificate/Add_Certificate";
import All_Students from "../Admin/All_Students/All_Students";
import Main_Dashboard from "../Admin/Dashboard/Main_Dashboard";
import { useSelector } from "react-redux";
const Admin_Route = () => {
  const { loginState } = useSelector((store) => store.login);
  console.log(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      navigate("/login");
    }
  }, [loginState]);

  return (
    <div>
      <Routes>
        <Route path="check_certificate" element={<Check_Certificate />} />
        <Route path="add_certificate" element={<Add_Certificate />} />
        <Route path="all_Students" element={<All_Students />} />
        <Route path="dashboard" element={<Main_Dashboard />} />
      </Routes>
    </div>
  );
};

export default Admin_Route;
