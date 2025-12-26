import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
      

    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "22px",
          borderRadius: "50px",
          textAlign: "center",
          borderStyle: "solid",
          borderBlockColor: "black",
          backgroundColor: "teal",
          color: "black",
          fontWeight: "bold"
        }}
      >
        IT Support HelpDesk
      </h1>
      <br /><br />

      <Link to="/login/admin">
        <button style={btnStyle}>Admin</button>
      </Link>
      <br /><br />

      <Link to="/login/technician">
        <button style={btnStyle}>Technician</button>
      </Link>
      <br /><br />

      <Link to="/login/employee">
        <button style={btnStyle}>Employee</button>
      </Link>
    </div>
  );
};

const btnStyle = {
  width: "200px",
  padding: "12px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "20px",
  backgroundColor: "teal",
  borderStyle: "solid",
  borderBlockColor: "black",
  color: "black",
  fontWeight: "600"
};

export default Welcome;
