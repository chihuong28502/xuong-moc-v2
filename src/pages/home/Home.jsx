import React from "react";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import ProductsHot from "../../components/productsHot/ProductsHot";
import AboutUs from "../../components/aboutUs/AboutUs";
import News from "../../components/news/News";
import Partners from "../../components/partners/Partners";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <ProductsHot />
      <AboutUs />
      <News />
      <Partners />
    </>
  );
}

export default Home;
