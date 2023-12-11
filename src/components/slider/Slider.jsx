import React from "react";
import "./slider.css";
function Slider() {
  const dataBanner = {
    image: "http://cutuananh.devmaster.vn/images/AnhCat/banner.jpg",
    title: "Thế giới nội thất số 1 việt nam ",
    subTitle: "Hoàng Hoan",
    description:
      "Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.",
  };
  return (
    <div className="slider position-relative">
      <div className="slider-img container-fluid gx-0">
        <img className="w-100" src={dataBanner.image} alt="" />
      </div>
      <div className="slider-content position-absolute container ">
        <h1 className="text-uppercase">
          {dataBanner.title}
          <br />
          <span>{dataBanner.subTitle}</span>
        </h1>
        <p>{dataBanner.description}</p>
        <a href={`/contact`}>
          <button className="" type="submit">
            LIÊN HỆ NGAY
          </button>
        </a>
      </div>
    </div>
  );
}

export default Slider;
