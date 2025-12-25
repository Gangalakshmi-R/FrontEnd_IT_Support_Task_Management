import React from "react";
import { Outlet } from "react-router-dom";
//import building from "../assets/building.jpg";

const Layout = () => {
 return (
  <div
   style={{
     position: "fixed",
     top: 0,
     left: 0,
     width: "100%",
     height: "100%",
    minHeight: "100vh",
    // backgroundImage: `url(${building})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    opacity:1,
     zIndex: -1  
    
   }}
  >
   {/* Header */}
   <div
    style={{
     backgroundColor: "teal",
     color: "black",
     fontWeight:"600",
     padding: "15px",
     textAlign: "center",
     fontSize: "22px",
     zIndex: 1

    }}
   >
    IT Support System
   </div>

   {/* Page Content */}
   <div style={{ padding: "20px" }}>
    <Outlet />
   </div>

   {/* Footer */}
   <div
    style={{
     backgroundColor: "teal",
     color: "black",
     padding: "10px",
     fontWeight: "600", 
     textAlign: "center",
     position: "fixed",
     bottom: 0,
     width: "100%",
     zIndex: 1

    }}
   >
    © My IT Support
   </div>
  </div>
 );
};

export default Layout;

