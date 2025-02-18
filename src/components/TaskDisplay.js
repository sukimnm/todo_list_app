import React from "react";
import Task from "./Task";

function TaskDisplay({ tasks, toggleTaskStatus }) {
  return (
    <div className="task-display">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
      ))}
    </div>
  );
}

export default TaskDisplay;