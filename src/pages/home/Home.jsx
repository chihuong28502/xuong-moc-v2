import React from "react";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import ProductsHot from "../../components/productsHot/ProductsHot";
import AboutUs from "../../components/aboutUs/AboutUs";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <ProductsHot />
      <AboutUs />
    </>
  );
}

export default Home;
