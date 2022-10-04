import React from "react";
import CarList from "../../components/car-list/car-list";
import Carousel from "../../components/carousel/carousel";
import Contact from "../../components/contact/contact";
import Featured from "../../components/featured/featured";
import Footer from "../../components/footer/footer";
import HeaderHome from "../../components/header-home/header-home";
import Marketplace from "../../components/marketplace/marketplace";
import Products from "../../components/products/products";
import Question from "../../components/question/question";
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
      <Featured />
      <Question />
      <Marketplace />
      <Footer />
    </div>
  );
}
