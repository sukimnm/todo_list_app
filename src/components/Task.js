import React from "react";

function Task({ task, toggleTaskStatus }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={() => toggleTaskStatus(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default Task;