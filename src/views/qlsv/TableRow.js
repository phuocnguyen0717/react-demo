import React from "react";

export default function TableRow({ handleUpdateRowClick, handleDelRowClick, student, idx }) {
  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>
        <button
          onClick={() => {
            handleUpdateRowClick(student);
          }}
          className="btn btn-sm btn-warning text-white"
        >
          Sửa
        </button>
        <button
          onClick={() => {
            handleDelRowClick(student);
          }}
          className="btn btn-sm btn-danger text-white"
        >
          Xoá
        </button>
      </td>
      <td>{student?.name}</td>
      <td>{student?.address}</td>
    </tr>
  );
}
