import React from "react";
import axios from "axios";

import Actions from "../views/todos/Actions";
import Content from "../views/todos/Content";
import Header from "../views/common/Header";
export default function AppTodos() {
  const handleSetTodos = (_data) => {
    axios.post("https://64722f466a9370d5a41b2130.mockapi.io/todos", _data).then((res) => {
      console.log("post --------> ", res.data);
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
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
