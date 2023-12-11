import React from "react";
import Product from "./product/Product";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import "./products.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products({ products }) {
  const status = useSelector((state) => state.products.status);
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 4,
  };
  return (
    <>
      <div className="wrap-all-products d-flex justify-content-center">
        <div className="box-content all-product container row">
          <Slider {...settings}>
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
