import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "../views/elements/Dashboard";
import Buttons from "../views/elements/Buttons";
import Icons from "../views/elements/Icons";
import HomePrice from "../views/qlsv/HomePrice";
import DataTable from "../views/qlsv/DataTable";
import FormDemo from "../views/qlsv/FormDemo";
import AppTodos from "./AppTodos";
import AppFoods from "./AppFoods";
import { callApis } from "../apis";

export default function AppContent() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSetStudents = (_formData) => {
    callApis.post("/students", _formData).then((response) => {
    });
  };

  useEffect(() => {
    if (!students?.[0] && !isLoading) {
      callGetAllStudents();
    }
  }, [students]);

  const callGetAllStudents = () => {
    setIsLoading(true);
    callApis
      .get("/students")
      .then((res) => {
        setStudents(res?.data);
        return res?.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
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
        <Route
          path="/table"
          element={<DataTable callGetAllStudents={callGetAllStudents} students={students} isLoading={isLoading} />}
        ></Route>
        <Route path="/form" element={<FormDemo handleSetStudents={handleSetStudents} />} />
        {/* -------------------End QLSV----------------- */}

        {/* -------------------Begin Todos----------------- */}
        <Route path="/todos" element={<AppTodos />}></Route>
        {/* -------------------End Todos----------------- */}
      </Routes>
    </>
  );
}
