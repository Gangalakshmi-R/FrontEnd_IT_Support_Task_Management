import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={container}>
      <h1 style={title}>IT Support HelpDesk</h1>

      <Link to="/dashboard">
        <button style={btn}>Go to Dashboard</button>
      </Link>
    </div>
  );
};

const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e0f2f1"
};

const title = {
  backgroundColor: "teal",
  padding: "15px",
  borderRadius: "20px",
  color: "black",
  fontWeight: "bold"
};

const btn = {
  marginTop: "20px",
  padding: "12px",
  width: "200px",
  borderRadius: "20px",
  backgroundColor: "teal",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Home;
