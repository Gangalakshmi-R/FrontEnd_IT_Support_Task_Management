import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name,
      description,
      status: "pending"
    });
  };

  return (
    <form onSubmit={submitHandler} style={{ marginTop: "20px" }}>
      <input
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br /><br />

      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
