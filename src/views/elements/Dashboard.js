import React from "react";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import Setting from "../common/Setting";
import Header from "../common/Header";
export default function Dashboard() {
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
        <Sidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div className="page-title-icon">
                    <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                  </div>
                  <div>
                    Analytics Dashboard
                    <div className="page-title-subheading">
                      This is an example dashboard created using build-in elements and components.
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
