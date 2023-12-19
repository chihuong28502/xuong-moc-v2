import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Introduce from "../../components/introduce/Introduce";
import Slider from "../../components/slider/Slider";

function IntroducePage() {
  const dataBanner = {
    image: 'http://cutuananh.devmaster.vn/images/AnhCatTC/GIOITHIEU.jpg',
    title: "",
    subTitle: "",
    description: "",
  };
  return (
    <>
      <Header />
      <Slider containerSize = {'container-fluid'} dataBanner={dataBanner}/>
      <Introduce />
      <Footer />
    </>
  );
}

export default IntroducePage;
