import React from "react";
import "./carousel.scss"

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="card">
        <div className="card-body p-0">
          <h4 className="card-title">Car Marketplace</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc odio in et, lectus sit lorem id integer.</p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}
