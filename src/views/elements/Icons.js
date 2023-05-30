import React from "react";
import { Link } from "react-router-dom";
import Setting from "../common/Setting";
import Footer from "../common/Footer";
import Header from "../common/Header";
export default function Icons() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="ui-theme-settings">
        <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
          <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
        </button>
        <Setting />
      </div>
      <div className="app-main">
        {/* 
        ---------------- Begin Sidebar ----------------------
        */}
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
                  <Link to="/">
                    <i className="metismenu-icon pe-7s-rocket" />
                    Dashboard Example 1
                  </Link>
                </li>
                <li className="app-sidebar__heading">UI Components</li>
                <li>
                  <Link to="#" className="mm-active">
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
                      <Link to="/icons" className="mm-active">
                        <i className="metismenu-icon"></i>Icons
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 
        ---------------- End Sidebar ----------------------
        */}
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div className="page-title-icon">
                    <i className="pe-7s-phone icon-gradient bg-night-fade"></i>
                  </div>
                  <div>
                    Icons
                    <div className="page-title-subheading">
                      Wide icons selection including from flag icons to FontAwesome and other icons libraries.
                    </div>
                  </div>
                </div>
                <div className="page-title-actions">
                  <button
                    type="button"
                    data-toggle="tooltip"
                    title="Example Tooltip"
                    data-placement="bottom"
                    className="btn-shadow mr-3 btn btn-dark"
                  >
                    <i className="fa fa-star" />
                  </button>
                  <div className="d-inline-block dropdown">
                    <button
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="btn-shadow dropdown-toggle btn btn-info"
                    >
                      <span className="btn-icon-wrapper pr-2 opacity-7">
                        <i className="fa fa-business-time fa-w-20" />
                      </span>
                      Buttons
                    </button>
                    <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a href="javascript:void(0);" className="nav-link">
                            <i className="nav-link-icon lnr-inbox" />
                            <span>Inbox</span>
                            <div className="ml-auto badge badge-pill badge-secondary">86</div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="javascript:void(0);" className="nav-link">
                            <i className="nav-link-icon lnr-book" />
                            <span>Book</span>
                            <div className="ml-auto badge badge-pill badge-danger">5</div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="javascript:void(0);" className="nav-link">
                            <i className="nav-link-icon lnr-picture" />
                            <span>Picture</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a disabled href="javascript:void(0);" className="nav-link disabled">
                            <i className="nav-link-icon lnr-file-empty" />
                            <span>File Disabled</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
}
