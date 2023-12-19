import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Slider from "../../components/slider/Slider";

function ContactPage() {
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
      <Slider dataBanner={dataBanner}/>
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
