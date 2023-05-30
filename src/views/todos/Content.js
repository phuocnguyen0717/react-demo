import React, { useEffect, useState } from "react";
import axios from "axios";

import "../todos/Todos.css";

export default function Content({ ...props }) {
  const [todos, setTodos] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false);

  useEffect(() => {
    if (!todos?.[0] && !isApiCalled) {
      console.log("abc");
      getAllTodos();
    }
  }, [todos]);
  const getAllTodos = () => {
    axios
      .get("https://64722f466a9370d5a41b2130.mockapi.io/todos")
      .then((res) => {
        console.log("res -----> ", res.data);
        setTodos(res?.data);
        setIsApiCalled(true);
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  return (
    <div className="todo-list">
      {todos?.[0]
        ? todos.map((todo, idx) => {
            return (
              <div className="todo-item">
                <div className="checker">
                  <span className>
                    <input type="checkbox" />
                  </span>
                </div>
                <span>{todo["name"]}</span>
                <a href="#" className="float-right remove-todo-item">
                  <i className="icon-close" />
                </a>
              </div>
            );
          })
        : null}
    </div>
  );
}
