import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import "./car-list.scss";

export default function CarList() {
  const { carList } = useSelector((state) => state.carReducer);
  return (
    <div className="carList">
      <div className="car-list web-carList">
        <div className="row">
          <div className="card-item col-xl-3 col-lg-4  col-md-6 col-12">
            <img
              src={require("../../Assets/images/banner/poster.png")}
              alt="Postter"
              style={{ height: "361px" }}
            />
          </div>
          {carList.map((ele, index) => {
            return (
              <div className="card-item  col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
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
          <button>View more new cars</button>
        </div>
      </div>
      <div className="mobile-carList">
        <Carousel autoplay slidesToShow={1} slidesToScroll={1} dots={false}>
          <div className="card-item">
            <img
              src={require("../../Assets/images/banner/poster.png")}
              alt="Postter"
              style={{ width: "309.3px", height: "361px" }}
            />
          </div>
          {carList.map((ele, index) => {
            return (
              <div className="card-item" key={index}>
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
        </Carousel>
        <div className="btn-view text-right">
          <button>View more new cars</button>
        </div>
      </div>
    </div>
  );
}
