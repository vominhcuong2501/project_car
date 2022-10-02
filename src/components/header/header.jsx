import React from "react";
import "./header.scss"

export default function HeaderAdmin() {
  return (
    <div className="container-fluid header">
      <div className="d-flex justify-content-end align-items-center align-self-center">
        <i className="fa-solid fa-circle-info"></i>
        <i className="fa-solid fa-bell"></i>
        <div className="avatar"></div>
        <a className="name">Admin <i className="fa-solid fa-chevron-down"></i></a>
      </div>
    </div>
  );
}
