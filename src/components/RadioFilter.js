import React from "react";

function RadioFilter({ value, label, filter, setFilter }) {
  return (
    <label className="radio-filter">
      <input
        type="radio"
        name="filter"
        value={value}
        checked={filter === value}
        onChange={() => setFilter(value)}
        className="radio-input"
      />
      <span className="radio-label">{label}</span>
    </label>
  );
}

export default RadioFilter;