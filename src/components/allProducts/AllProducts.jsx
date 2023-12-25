import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../products/product/Product";
import Loading from "../loading/Loading";
import Filter from "../filter/Filter";
import { useSelector } from "react-redux";

function AllWishList({ title, products, status, iconProducts }) {
  const dataFilter = useSelector((state) => state.products.dataFilter);
  const [data, setData] = useState(products);
  let [numberLoad, setNumberLoad] = useState(4);
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + products?.length);
  };

  useEffect(() => {
    setData(dataFilter);
  }, [dataFilter]);
  useEffect(() => {
    setData(products);
  }, [products]);
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
          <Filter products={products} />
          <div className="all-product__item--title">
            {title && (
              <h4>Danh sách yêu thích ({products?.length}sản phẩm) </h4>
            )}
          </div>
          {status === "loading" ? (
            <Loading />
          ) : (
            <div className="row">
              {data.map((item) => (
                <Product
                  iconProducts={iconProducts}
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
