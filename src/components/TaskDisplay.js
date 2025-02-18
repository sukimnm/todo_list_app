import React from "react";
import Task from "./Task";

function TaskDisplay({ tasks, toggleComplete }) {
  return (
    <div className="task-display">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default TaskDisplay;