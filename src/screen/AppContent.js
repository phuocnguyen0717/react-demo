import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "../views/elements/Dashboard";
import Buttons from "../views/elements/Buttons";
import Icons from "../views/elements/Icons";
import HomePrice from "../views/qlsv/HomePrice";
import DataTable from "../views/qlsv/DataTable";
import FormDemo from "../views/qlsv/FormDemo";
import AppTodos from "./AppTodos";
import AppFoods from "./AppFoods";

export default function AppContent() {
  const handleSetStudents = (_formData) => {
    axios.post("https://646e37d69c677e23218b4bde.mockapi.io/students", _formData).then((response) => {
      console.log("DEBUG AFTER POST --> ", response);
    });
  };
  // const handleUpdateStudent = (_param) => {
  //   if (_param?.[0]) return "Không có dữ liệu";
  //   axios.put("https://646e37d69c677e23218b4bde.mockapi.io/students/" + _param.id).then((res) => {
  //     console.log("PUT --> ", res.data);
  //   });
  // };
  return (
    <>
      <Routes>
        <Route path="/food" element={<AppFoods />} />

        {/* -------------------Begin AppUIButton----------------- */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/icons" element={<Icons />} />
        {/* -------------------End AppUIButton----------------- */}

        {/* -------------------Begin QLSV----------------- */}
        <Route path="/homePrice" element={<HomePrice />}></Route>
        <Route path="/table" element={<DataTable />}></Route>
        <Route path="/form" element={<FormDemo handleSetStudents={handleSetStudents} />} />
        {/* -------------------End QLSV----------------- */}

        {/* -------------------Begin Todos----------------- */}
        <Route path="/todos" element={<AppTodos />}></Route>
        {/* -------------------End Todos----------------- */}
      </Routes>
    </>
  );
}
