import React, { useEffect } from "react";

import Header from "../common/Header";
import HeaderQLSV from "./HeaderQLSV";
import TableRow from "./TableRow";
import { callApis } from "../../apis";
// handleUpdateStudent,
export default function DataTable({ callGetAllStudents, handleDelRowClick, students, isLoading, ...props }) {
  const handleUpdateRowClick = (newStudent) => {
    return (
      <div className="Task__editing">
        <input type="text" className="Student__editor" defaultValue={newStudent["name"]} />
        <input type="text" className="Student__editor" defaultValue={newStudent["address"]} />
        <div className="Task__editing-action">
          <i className="fas fa-check"></i>
          <i className="fas fa-ban"></i>
        </div>
        <div className="Task__editing-bgr"></div>
      </div>
    );
    // if (!newStudent.id) return alert("không có dữ liệu");
    // // newStudent = students.map((std, idx) => {
    // //   return (std["name"] = "abc"), (std["address"] = "aaa");
    // // });
    // console.log(newStudent.name);
    // console.log(newStudent.address);
    // newStudent = students.map((std, idx) => {});
    // newStudent = {
    //   id: this.id,
    //   name: "abc",
    //   address: "mmm",
    // };
    // handleUpdateStudent(newStudent);
    // callGetAllStudents();
  };
  return (
    <>
      <Header />
      <HeaderQLSV />
      <section className="search-banner text-white py-3 form-arka-plan" id="search-banner">
        <div className="container py-5 my-5">
          <div
            style={{
              backgroundColor: "white",
              maxHeight: "70vh",
              overflowY: "scroll",
            }}
          >
            <table className="table" style={{ height: "100%" }}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Thao Tác</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Địa Chỉ</th>
                </tr>
              </thead>
              {students?.[0] ? (
                <tbody>
                  {students.map((std, idx) => {
                    return (
                      <TableRow
                        key={idx}
                        student={std}
                        idx={idx}
                        handleUpdateRowClick={handleUpdateRowClick}
                        handleDelRowClick={handleDelRowClick}
                      />
                    );
                  })}
                </tbody>
              ) : isLoading ? (
                <div className="spinner-border" role="status"></div>
              ) : null}
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
