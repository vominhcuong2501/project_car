import React from "react";
import { useSelector } from "react-redux";
import "./car-list.scss";

export default function CarList() {
  const { carList } = useSelector((state) => state.carReducer);
  return (
    <div className="car-list">
      <div className="row">
        <div className="card-item col-3">
          <img
            src={require("../../Assets/images/banner/poster.png")}
            alt="Postter"
            style={{ width: "309.3px", height: "361px" }}
          />
        </div>
        {carList.map((ele, index) => {
          return (
            <div className="card-item col-3" key={index}>
              <img
                className="card-img-top"
                src={require(`../../Assets/images/cars/${ele.image}`)}
                alt={ele.image}
              />
              <div className="card-body ">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-text d-flex align-items-center">
                  <span className="from">{ele.from}</span>
                  <span className="price">{ele.price}</span>
                  <span className="mo">{ele.mo}</span>
                </p>
                <p className="var">{ele.var}</p>
                <div className="d-flex align-items-center">
                  <img
                    src={require(`../../Assets/images/logo-car-list/${ele.logo}`)}
                    alt={ele.logo}
                    width={32}
                    height={32}
                  />
                  <p className="type mb-0">{ele.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-view text-center">
        <button >View more new cars</button>
      </div>
    </div>
  );
}
