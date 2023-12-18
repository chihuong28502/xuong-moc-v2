import React from "react";
import { useState } from "react";
import Product from "../products/product/Product";
import Loading from "../loading/Loading";

function AllWishList({ title,products,status }) {
  let [numberLoad, setNumberLoad] = useState(4);
  let iconProducts = "fa-solid fa-heart-crack";
  const [filters, setFilters] = useState();
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + products?.length);
  };
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      handleShowAllProducts();
    }
  };

  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div>
    );
  }
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
            {title && (
              <h4>Danh sách yêu thích ({products?.length}sản phẩm) </h4>
            )}
          </div>
          {status === "loading" ? (
            <Loading />
          ) : (
            <div className="row">
              {filters === undefined
                ? products
                    ?.slice(0, numberLoad)
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
          )}
          <div className="load-more">
            <button
              type="button"
              className="load-more__btn"
              onClick={handleShowAllProducts}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllWishList;
