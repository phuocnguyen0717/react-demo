import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../todos/Todos.css";

export default function Actions({ handleSetTodos, ...props }) {
  const [formData, setFormData] = useState({});

  const handleOnChangeInput = (e) => {
    console.log("onChange ----> ", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmitData = () => {
    if (!formData?.["name"]) return alert("K có dữ liệu");
    handleSetTodos(formData);
  };
  return (
    <div>
      <form>
        <input
          name="name"
          value={formData["name"]}
          onChange={handleOnChangeInput}
          type="text"
          className="form-control a
          dd-task"
          placeholder="New Task..."
        />
        <button type="button" onClick={handleOnSubmitData}>
          New Task
        </button>
      </form>
      <ul class="nav nav-pills todo-nav">
        <li role="presentation" class="nav-item all-task active">
          <a href="#" class="nav-link">
            All
          </a>
        </li>
        <li role="presentation" class="nav-item active-task">
          <a href="#" class="nav-link">
            Active
          </a>
        </li>
        <li role="presentation" class="nav-item completed-task">
          <a href="#" class="nav-link">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}
