import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import "./car-list.scss";

export default function CarListMobile() {
  const { usedCar, newCar, news } = useSelector((state) => state.carReducer);
  return (
    <div className="car-list-mobile">
      <div className="used-car">
        <div className="car-list-mobile-title">
          <h4>Used Cars</h4>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="used-car-list">
          <Carousel
            autoplay
            slidesToShow={1}
            slidesToScroll={1}
            dots={false}
            arrows
            style={{ display: "flex" }}
          >
            {usedCar.map((ele) => {
              return (
                <div className="car-list-mobile-item" key={ele.name}>
                  <div className="car-list-mobile-img">
                    <img
                      src={require(`../../Assets/images/usedCar/${ele.image}`)}
                      alt={ele.name}
                    />
                  </div>
                  <h6>{ele.name}</h6>
                  <p>{ele.price}</p>
                  <span>05/10/11 - 8,000 km - $7,000 depr.</span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="new-car">
        <div className="car-list-mobile-title">
          <h4>New Cars</h4>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="new-car-list">
          <Carousel
            autoplay
            slidesToShow={1}
            slidesToScroll={1}
            dots={false}
            style={{ display: "flex" }}
          >
            {newCar.map((ele) => {
              return (
                <div className="car-list-mobile-item" key={ele.name}>
                  <div className="car-list-mobile-img">
                    <img
                      src={require(`../../Assets/images/newCar/${ele.image}`)}
                      alt={ele.name}
                    />
                  </div>
                  <h6>{ele.name}</h6>
                  <p>{ele.price}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="latest-new">
        <div className="car-list-mobile-title">
          <h4>Latest News</h4>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="latest-new-list">
          <Carousel
            autoplay
            slidesToShow={1}
            slidesToScroll={1}
            dots={false}
            style={{ display: "flex" }}
          >
            {news.map((ele) => {
              return (
                <div className="car-list-mobile-item" key={ele.title}>
                  <div className="car-list-mobile-img">
                    <img
                      src={require(`../../Assets/images/latest/${ele.image}`)}
                      alt={ele.name}
                    />
                  </div>
                  <h6>{ele.title}</h6>
                  <span>{ele.name} - 30m ago</span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
