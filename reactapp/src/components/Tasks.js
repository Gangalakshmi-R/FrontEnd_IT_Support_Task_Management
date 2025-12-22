import React from "react";

function Tasks({ task, onStatusChange }) {
  if (!task) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Task Details</h2>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Current: {task.status}</p>

      <button onClick={() => onStatusChange("pending")}>Pending</button>
      <button onClick={() => onStatusChange("in progress")} style={{ marginLeft: "5px" }}>
        In Progress
      </button>
      <button onClick={() => onStatusChange("completed")} style={{ marginLeft: "5px" }}>
        Completed
      </button>
    </div>
  );
}

export default Tasks;
