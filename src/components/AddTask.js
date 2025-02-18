import React from "react";

function AddTask({ input, setInput, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default AddTask;