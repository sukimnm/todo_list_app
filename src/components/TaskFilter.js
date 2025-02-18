import React from "react";
import RadioFilter from "./RadioFilter";

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="task-filter">
      <RadioFilter value="all" label="All" filter={filter} setFilter={setFilter} />
      <RadioFilter value="completed" label="Completed" filter={filter} setFilter={setFilter} />
      <RadioFilter value="Todo" label="Todo" filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default TaskFilter;