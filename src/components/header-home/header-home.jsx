import React from "react";
import { NavLink } from "react-router-dom";
import "./header-home.scss";

export default function HeaderHome() {
  return (
    <div className="header">
      <div className="header-home ">
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
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link">
                Car Brand
              </NavLink>
            </li>
          </ul>
          <div className="btn-login">
            <button type="button" className="btn">
              Login
            </button>
          </div>
        </div>
        <div className="dropdown btn-toggle">
          <button
            className="btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars text-light"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              New Cars
            </a>
            <a className="dropdown-item" href="#">
              Used Cars
            </a>
            <a className="dropdown-item" href="#">
              Reviews
            </a>
            <a className="dropdown-item" href="#">
              News
            </a>
            <NavLink to="/admin" className="dropdown-item">
              Car Brand
            </NavLink>
            <a className="dropdown-item" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-header  m-0">
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
