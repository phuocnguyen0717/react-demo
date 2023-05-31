import React, { useEffect, useRef, useState } from "react";

import { callApisTodos } from "../../apis";
import Header from "../common/Header";
import Actions from "./Actions";
import Content from "./Content";

export default function AppTodos() {
  const [formData, setFormData] = useState({});
  const [todos, setTodos] = useState([]);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClickUpdateButton, setIsClickUpdateButton] = useState(false);
  const ref = useRef();

  const handleSubmitUpdateTodo = (_todo) => {
    console.log("--->abc ", _todo["id"]);
    // callApisTodos.put("/todos/" + _todo.id, _todo).then((res) => {
    //   console.log("RES -------------> ", res);
    //   getAllTodos();
    // });
  };
  const handleClickUpdateButton = (todo) => {
    setFormData({ name: todo.name, id: todo.id });
    ref.current.focus();
  };
  const handleDeleteTodo = (_todo) => {
    callApisTodos.delete("/todos/" + _todo.id).then((res) => {
      getAllTodos();
      alert("Xóa Thành Công ");
    });
  };

  const handleSetTodos = (_data) => {
    callApisTodos.post("/todos", _data).then((res) => {
      getAllTodos();
    });
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
  const handleOnChangeInput = (e) => {
    console.log("onChang ------>", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmitData = () => {
    if (!formData?.["name"]) return alert("K có dữ liệu");
    handleSetTodos(formData);
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <div>
                  <form>
                    {!isClickUpdateButton ? (
                      <div>
                        <input
                          ref={ref}
                          key={"name"}
                          name="name"
                          value={formData["name"]}
                          onChange={handleOnChangeInput}
                          type="text"
                          className="form-control add-task"
                          placeholder="New Task..."
                        />
                        <button className="btn btn-sm btn-success text-white" type="button" onClick={handleOnSubmitData}>
                          New Task
                        </button>
                      </div>
                    ) : (
                      <div>
                        <input
                          ref={ref}
                          key={"name"}
                          name="name"
                          value={formData.name}
                          onChange={handleOnChangeInput}
                          type="text"
                          className="form-control add-task"
                          placeholder="New Task..."
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-warning text-white"
                          onClick={() => {
                            handleSubmitUpdateTodo({ formData });
                            setIsClickUpdateButton(false);
                          }}
                        >
                          UPDATE
                        </button>
                      </div>
                    )}
                  </form>
                </div>
                <Actions />
                <Content
                  setIsClickUpdateButton={setIsClickUpdateButton}
                  handleClickUpdateButton={handleClickUpdateButton}
                  handleDeleteTodo={handleDeleteTodo}
                  todos={todos}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
