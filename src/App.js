import React, { useState } from "react";
import AddTask from './components/AddTask';
import TaskDisplay from "./components/TaskDisplay";
import TaskFilter from "./components/TaskFilter";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const filteredTasks = tasks.filter(
    (task) =>
      filter === "all" || (filter === "completed" ? task.completed : !task.completed)
  );

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTask input={input} setInput={setInput} addTask={addTask} />
      {(tasks.length !== 0) && <TaskFilter filter={filter} setFilter={setFilter} />}
      <TaskDisplay tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
    </div>
  )
}

export default App;


