import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import ProductDetail from "../../components/productDetail/ProductDetail";

function ProductDetailPage() {
  const dataBanner = {
    image: "http://cutuananh.devmaster.vn/images/AnhCatTC/GIOITHIEU.jpg",
    title: "",
    subTitle: "",
    description: "",
  };
  return (
    <>
      <Header />
      <Slider containerSize={"container-fluid"} dataBanner={dataBanner} />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
