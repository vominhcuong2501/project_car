import React from "react";
import { useSelector } from "react-redux";
import "./products.scss";

export default function Products() {
  const { productList } = useSelector((state) => state.carReducer);
  return (
    <div className="product">
      <div className="product-title">
        <h3>How it works. </h3>
        <p>This is how our products works </p>
      </div>
      <div className="row">
        <div className="card col-sm-4 col-12">
          <img
            className="card-img-top icon-local"
            src={require(`../../Assets/images/icons/icon.png`)}
            alt="icon"
          />
          <div className="card-body">
            <h4 className="card-title">Find Car</h4>
            <p className="card-text">
              Our cars are located at prime areas where by there won’t be
              problem with transportation
            </p>
          </div>
        </div>
        <div className="card col-sm-4 col-12">
          <img
            className="card-img-top icon-smart"
            src={require(`../../Assets/images/icons/Smart.png`)}
            alt="smart"
          />
          <div className="card-body">
            <h4 className="card-title">Make payments</h4>
            <p className="card-text">
              Our estates comes with good network,portable water , 24hrs light
              and round the clock security.
            </p>
          </div>
        </div>
        <div className="card col-sm-4 col-12">
          <img
            className="card-img-top icon-secure"
            src={require(`../../Assets/images/icons/Secure.png`)}
            alt="secure"
          />
          <div className="card-body">
            <h4 className="card-title">Make it Official</h4>
            <p className="card-text">
              We have been in business for over 32 years,for client outside the
              country you can trust us to deliver well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
