import React from "react";
import "./header-home.scss";

export default function HeaderHome() {
  return (
    <div className="header">
      <div className="header-home web">
        <div className="logo">
          <img
            src={require("../../Assets/images/logo/UCARS Logo.png")}
            alt="Logo"
          />
        </div>
        <div className="menu">
          <ul className="p-0 nav-list">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                New Cars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Used Cars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-login">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      <div className="mobile  m-0">
        <div className="logo">
          <img
            src={require("../../Assets/images/logo/Carbuyer Logo 2.png")}
            alt="Logo"
          />
          <p>
            <i className="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
