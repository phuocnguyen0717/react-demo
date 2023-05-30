import React from "react";

import Header from "../common/Header";
import HeaderQLSV from "./HeaderQLSV";
import "../qlsv/FormDemo.css";

export default function HomePrice() {
  return (
    <>
      <Header />
      <HeaderQLSV />
      <section className="search-banner text-white py-3 form-arka-plan" id="search-banner">
        <div className="container py-5 my-5">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2 className="text-white siyah-cerceve">Web Gì Đó</h2>
            </div>
          </div>
          <div className="card-deck mb-3 text-center" style={{ flexFlow: "row wrap" }}>
            <div className="row">
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $0 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $15 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      $29 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
