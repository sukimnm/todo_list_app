import React from "react";

function Task({ task, onToggleComplete }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}

export default Task;