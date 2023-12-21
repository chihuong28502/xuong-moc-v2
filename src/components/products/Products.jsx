/* eslint-disable no-dupe-keys */
import React, { useEffect } from "react";
import Product from "./product/Product";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import "./products.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from "../slick-custom/CustomArrows";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/categoriesSlice";

function Products({ products, showSlider }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
  };
  const elementAllproducts = categories.map((item, index) => {
    return (
      <div className="all-product__item" key={index}>
        <div className="all-product__item--title">
          <h4>{item.title}</h4>
          <Link className="see-all" to={item.slug}>
            Xem tất cả
          </Link>
        </div>
        <div className="row mt-3">
          {status === "succeeded" ? (
            products
              .filter((x) => x.cid === item.id)
              .slice(0, 4)
              .map((product) => (
                <Product
                  column={"col-md-3"}
                  key={product.id}
                  product={product}
                />
              ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="wrap-all-products d-flex justify-content-center">
        <div className="container-fluid">
          {showSlider && (
            <Slider {...settings} className="container-mx-10">
              {status === "succeeded" ? (
                products.map((product) => (
                  <Product column={"mx-2"} key={product.id} product={product} />
                ))
              ) : (
                <Loading />
              )}
            </Slider>
          )}
          {!showSlider && elementAllproducts}
        </div>
      </div>
    </>
  );
}

export default Products;
