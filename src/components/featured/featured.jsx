import React from "react";
import { Carousel } from "antd";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured-title row">
        <div className="featured-text col-md-6 col-12">
          <h3>Our Featured Vehicles. </h3>
          <p>
            One of our biggest product to be featured and that has sold out the
            most.
          </p>
        </div>
        <div className="featured-btn col-md-6 col-12">
          <button className="btn-view">View more</button>
        </div>
      </div>
      <div className="featured-list">
        <Carousel
          className="row"
          autoplay
          slidesToShow={4}
          slidesToScroll={1}
          dots={false}
          responsive={[
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <div className="card col-lg-3 col-md-6 col-12">
            <img
              className="card-img-top"
              src={require("../../Assets/images/feature/thepalace.png")}
              alt="1"
            />
            <div className="card-content">
              <div className="card-title">
                <p>The Palace</p>
                <span>Duplex</span>
              </div>
              <div className="card-text">
                <p>Lekki,phase 2</p>
                <span>$2,000</span>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img
              className="card-img-top"
              src={require("../../Assets/images/feature/ivyrony.png")}
              alt="2"
            />
            <div className="card-content">
              <div className="card-title">
                <p>IVY RORY</p>
                <span>Duplex</span>
              </div>
              <div className="card-text">
                <p>Lekki,phase 2</p>
                <span>$2,000</span>
              </div>
            </div>
          </div>
          <div className="poster col-lg-3 col-md-6 col-12">
            <img
              src={require("../../Assets/images/banner/poster.png")}
              alt="3"
            />
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img
              className="card-img-top"
              src={require("../../Assets/images/feature/rexona.png")}
              alt="4"
            />
            <div className="card-content">
              <div className="card-title">
                <p>REXONA</p>
                <span>Duplex</span>
              </div>
              <div className="card-text">
                <p>Lekki,phase 2</p>
                <span>$2,000</span>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img
              className="card-img-top"
              src={require("../../Assets/images/feature/thepalace.png")}
              alt="1"
            />
            <div className="card-content">
              <div className="card-title">
                <p>The Palace</p>
                <span>Duplex</span>
              </div>
              <div className="card-text">
                <p>Lekki,phase 2</p>
                <span>$2,000</span>
              </div>
            </div>
          </div>
          <div className="card col-lg-3 col-md-6 col-12">
            <img
              className="card-img-top"
              src={require("../../Assets/images/feature/ivyrony.png")}
              alt="2"
            />
            <div className="card-content">
              <div className="card-title">
                <p>IVY RORY</p>
                <span>Duplex</span>
              </div>
              <div className="card-text">
                <p>Lekki,phase 2</p>
                <span>$2,000</span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="featured-responsive col-md-6 col-12">
        <button className="btn-view">View more</button>
      </div>
    </div>
  );
}
