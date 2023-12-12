import React from "react";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import ProductsHot from "../../components/productsHot/ProductsHot";
import AboutUs from "../../components/aboutUs/AboutUs";
import News from "../../components/news/News";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Partners from "../../components/partners/Partners";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <ProductsHot />
      <AboutUs />
      <News />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
