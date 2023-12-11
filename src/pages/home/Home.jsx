import React from "react";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import ProductsHot from "../../components/productsHot/ProductsHot";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <ProductsHot />
    </>
  );
}

export default Home;
