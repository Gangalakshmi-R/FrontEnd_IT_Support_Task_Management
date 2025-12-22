import React, { useState } from "react";
import { defaultTasks } from "../api/api";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Tasks from "../components/Tasks";

function TasksPage() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [view, setView] = useState("list");
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setView("list");
  };

  const updateStatus = (status) => {
    const updated = tasks.map((t) =>
      t.id === selectedTask.id ? { ...t, status } : t
    );
    setTasks(updated);
    setSelectedTask({ ...selectedTask, status });
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* NAVIGATION BUTTONS */}
      <button onClick={() => setView("add")}>Add Task</button>
      <button onClick={() => setView("list")} style={{ marginLeft: "10px" }}>
        Task List
      </button>

      {/* VIEWS */}
      {view === "list" && (
        <TaskList
          tasks={tasks}
          onViewDetails={(task) => {
            setSelectedTask(task);
            setView("details");
          }}
        />
      )}

      {view === "add" && <TaskForm onAdd={addTask} />}

      {view === "details" && (
        <Tasks task={selectedTask} onStatusChange={updateStatus} />
      )}
    </div>
  );
}

export default TasksPage;
