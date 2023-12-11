import React from "react";
import Product from "./product/Product";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import "./products.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from "../slick-custom/CustomArrows";

function Products({ products }) {
  const status = useSelector((state) => state.products.status);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    prevArrow: <CustomArrows direction="fa-solid fa-chevron-left" />,
    nextArrow: <CustomArrows direction="fa-solid fa-chevron-right" />,
  };
  return (
    <>
      <div className="wrap-all-products d-flex justify-content-center">
        <div className="container-fluid">
          <Slider {...settings} className="container-mx-10">
            {status === "succeeded" ? (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <Loading />
            )}{" "}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Products;
