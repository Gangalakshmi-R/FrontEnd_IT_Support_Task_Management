import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboards
import AdminDashboard from "./pages/admin/AdminDashboard";
import TechnicianDashboard from "./pages/technician/TechnicianDashboard";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";

// Technician Resolution Page
import ResolutionPage from "./pages/technician/ResolutionPage";

const App = () => {
  return (
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
  );
};

export default App;
