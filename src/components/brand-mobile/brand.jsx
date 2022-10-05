import React from "react";
import "./brand.scss";

export default function BrandList() {
  return (
    <div className="brand">
      <h4>Popular Brands</h4>
      <div className="brand-list">
        <a className="brand-item">
          <img
            src={require("../../Assets/images/logo/Toyota.png")}
            alt="Toyota"
          />
          <p>Toyota</p>
        </a>
        <a className="brand-item">
          <img src={require("../../Assets/images/logo/BMW.png")} alt="BMW" />
          <p>BMW</p>
        </a>
        <a className="brand-item">
          <img
            src={require("../../Assets/images/logo/Mercedes.png")}
            alt="Mercedes"
          />
          <p>Mercedes</p>
        </a>
        <a className="brand-item">
          <img
            src={require("../../Assets/images/logo/Huyndai.png")}
            alt="Huyndai"
          />
          <p>Huyndai</p>
        </a>
        <a className="brand-item">
          <img
            src={require("../../Assets/images/logo/MAZDA.png")}
            alt="Mazda"
          />
          <p>Mazda</p>
        </a>
      </div>
      <div className="brand-list">
        <a className="brand-item">
          <img src={require("../../Assets/images/logo/Audi.png")} alt="Audi" />
          <p>Audi</p>
        </a>
        <div className="brand-item">
          <img
            src={require("../../Assets/images/logo/Nissan.png")}
            alt="Nissan"
          />
          <p>Nissan</p>
        </div>
        <div className="brand-item">
          <img src={require("../../Assets/images/logo/KIA.png")} alt="Kia" />
          <p>Kia</p>
        </div>
        <div className="brand-item">
          <img
            src={require("../../Assets/images/logo/Honda.png")}
            alt="Honda"
          />
          <p>Honda</p>
        </div>
        <div className="brand-item">
          <img src={require("../../Assets/images/logo/more.png")} alt="more" 
          style={{width: "20.5px", height: "20.5px", margin: "10px 0 18px"}}/>
          <p>More</p>
        </div>
      </div>
    </div>
  );
}
