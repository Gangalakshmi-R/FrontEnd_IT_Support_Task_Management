import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={header}>Dashboard</h2>

      <Link to="/tasks">
        <button style={btn}>View Tasks</button>
      </Link>
    </div>
  );
};

const header = {
  backgroundColor: "teal",
  padding: "10px",
  borderRadius: "10px",
  width: "200px"
};

const btn = {
  marginTop: "20px",
  padding: "10px",
  backgroundColor: "teal",
  fontWeight: "bold"
};

export default Dashboard;
