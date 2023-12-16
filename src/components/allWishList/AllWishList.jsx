import React from "react";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../products/product/Product";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Slider from "../slider/Slider";

function AllWishList() {
  let [numberLoad, setNumberLoad] = useState(4);
  let iconProducts = "fa-solid fa-heart-crack";
  const wishlist = useSelector((state) => state.wishlist.data);
  const status = useSelector((state) => state.wishlist.status);
  const [filters, setFilters] = useState();
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + wishlist.length);
  };
  return (
    <>
      <div className="box-content all-product">
        <div className="all-product__item container">
          {/* <Control
          product={local}
          sort={sort}
          setSort={setSort}
          onFilter={handleFilter}
        /> */}
          <div className="all-product__item--title">
            <h4>Danh sách yêu thích ({wishlist.length}sản phẩm) </h4>
          </div>
          <div className="row">
            {filters === undefined
              ? wishlist
                  .slice(0, numberLoad)
                  .map((item) => (
                    <Product
                      iconProducts={iconProducts}
                      filters={filters}
                      product={item}
                      key={item.id}
                    />
                  ))
              : filters
                  .slice(0, numberLoad)
                  .map((item) => (
                    <Product
                      iconProducts={iconProducts}
                      filters={filters}
                      product={item}
                      key={item.id}
                    />
                  ))}
          </div>
          <div className="load-more">
            <button
              type="button"
              className="load-more__btn"
              onClick={handleShowAllProducts}
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllWishList;