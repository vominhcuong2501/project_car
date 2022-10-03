import React from "react";
import CarList from "../../components/car-list/car-list";
import Carousel from "../../components/carousel/carousel";
import Contact from "../../components/contact/contact";
import HeaderHome from "../../components/header-home/header-home";
import Products from "../../components/products/products";
import Search from "../../components/search/search";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Contact />
      <HeaderHome />
      <Carousel />
      <Search />
      <CarList />
      <Products />
      <div className="featured"></div>
      <div className="question"></div>
      <div className="footer"></div>
    </div>
  );
}
