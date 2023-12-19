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
  const dataBanner = {
    image: "http://cutuananh.devmaster.vn/images/AnhCat/banner.jpg",
    title: "Thế giới nội thất số 1 việt nam ",
    subTitle: "Hoàng Hoan",
    description:
      "Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.",
  };
  return (
    <>
      <Header />
      <Slider dataBanner={dataBanner} />
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
