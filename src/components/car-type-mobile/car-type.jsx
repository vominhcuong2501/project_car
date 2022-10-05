import React from "react";
import { Carousel } from "antd";
import "./car-type.scss";
import { useSelector } from "react-redux";

export default function CarType() {
  const {carType} = useSelector(state => state.carReducer)
  return (
    <div className="car-type">
      <h4>Car Type</h4>
      <div className="type-list">
        <Carousel
          autoplay
          slidesToShow={5}
          slidesToScroll={1}
          dots={false}
          style={{display: "flex", justifyContent: "space-between"}}
        >
          {carType.map((ele, index) => {
            return (
              <div className="type-item" key={index}>
            <div className="type-item-img">
              <img
                src={require(`../../Assets/images/carType/${ele.image}`)}
                alt={ele.name}
              />
            </div>
            <p>{ele.name}</p>
          </div>
            )
          })}
          
        </Carousel>
      </div>
    </div>
  );
}
