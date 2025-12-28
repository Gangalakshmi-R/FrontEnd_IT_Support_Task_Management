import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>HelpDesk</h2>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/login/admin" className={({ isActive }) => isActive ? "active" : ""}>
            Admin Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/login/technician" className={({ isActive }) => isActive ? "active" : ""}>
            Technician Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/login/employee" className={({ isActive }) => isActive ? "active" : ""}>
            Employee Login
          </NavLink>
        </li>

        {/* <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
            Register
          </NavLink>
        </li> */}
        
      </ul>
    </nav>
  );
};

export default Navbar;
