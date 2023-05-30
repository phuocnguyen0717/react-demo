import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { callApis } from "../../apis";

export default function HeaderQLSV() {
  /**
   * bug bất động bộ
   * Student undefined
   */
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/homePrice">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/table"
              >
                Bảng Dữ Liệu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
