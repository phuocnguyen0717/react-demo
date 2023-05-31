import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../todos/Todos.css";

export default function Actions({ ...props }) {
  return (
    <div>
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
