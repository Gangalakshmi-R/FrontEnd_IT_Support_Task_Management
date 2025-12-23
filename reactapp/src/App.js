import React from "react";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Arial",
      backgroundColor: "white",
      color: "black"
    }}>
    
      {/* HEADER */}
      <header style={{
        backgroundColor: "teal",
        padding: "20px",
        color: "white",
        textAlign: "center"
      }}>
        <h1>Task Management</h1>
      </header>

      {/* BODY */}
      <main style={{
        flex: 1,
        padding: "20px",
        display: "block"
      }}>
        <TasksPage />
      </main>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "teal",
        padding: "10px",
        color: "white",
        textAlign: "center"
      }}>
        IT Support Task Management System
      </footer>

    </div>
  );
}


export default App;
