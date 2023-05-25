import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src" />
        <div className="header__pane ml-auto">
          <div>
            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6" />
            </span>
          </button>
        </span>
      </div>{" "}
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">Dashboards</li>
            <li>
              <a href="index.html" className="mm-active">
                <i className="metismenu-icon pe-7s-rocket" />
                Dashboard Example 1
              </a>
            </li>
            <li className="app-sidebar__heading">UI Components</li>
            <li>
              <Link to="/">
                <i className="metismenu-icon pe-7s-diamond" />
                Elements
                <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
              </Link>
              <ul>
                <li>
                  <Link to="/buttons">
                    <i className="metismenu-icon" />
                    Buttons
                  </Link>
                </li>
                <li>
                  <Link to="/icons">
                    <i className="metismenu-icon"></i>Icons
                  </Link>
                </li>
                <Outlet />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
