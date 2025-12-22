import React from "react";

function TaskList({ tasks, onViewDetails }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "10px" }}>
          <p>{task.name} - {task.status}</p>
          <button onClick={() => onViewDetails(task)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
