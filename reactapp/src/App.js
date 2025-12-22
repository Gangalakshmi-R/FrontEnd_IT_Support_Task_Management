import React from "react";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "white", color: "black" }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: "teal", padding: "15px", color: "white", textAlign: "center" }}>
        <h1>Task Management</h1>
      </header>

      {/* BODY */}
      <TasksPage />

      {/* FOOTER */}
      <footer style={{ backgroundColor: "teal", padding: "10px", color: "white", textAlign: "center", marginTop: "20px" }}>
        IT Support Task Management System
      </footer>

    </div>
  );
}

export default App;
