import React, { useEffect, useState } from "react";
import axios from "axios";

import Actions from "../views/todos/Actions";
import Content from "../views/todos/Content";
import Header from "../views/common/Header";
import { callApisTodos } from "../apis";
export default function AppTodos() {
  const [todos, setTodos] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetTodos = (_data) => {
    callApisTodos.post("/todos", _data).then((res) => {});
    getAllTodos();
  };

  useEffect(() => {
    if (!todos?.[0] && !isApiCalled) {
      getAllTodos();
    }
  }, [todos]);
  const getAllTodos = () => {
    setIsLoading(true);
    callApisTodos
      .get("/todos")
      .then((res) => {
        setTodos(res?.data);
        setIsApiCalled(true);
        return res?.data;
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <Actions handleSetTodos={handleSetTodos} />
                <Content todos={todos} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
