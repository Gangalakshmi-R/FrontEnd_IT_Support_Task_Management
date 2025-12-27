import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Navbar from "./components/Navbar.jsx";


// Pages
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
 
// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"; 
import TechnicianDashboard from "./pages/technician/TechnicianDashboard.jsx";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard.jsx";

// Technician Resolution Page
import ResolutionPage from "./pages/technician/ResolutionPage.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/technician" element={<TechnicianDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />

          <Route path="/resolve/:id" element={<ResolutionPage />} />
        </Route>
      </Routes>
    </>
  );
};


export default App;
