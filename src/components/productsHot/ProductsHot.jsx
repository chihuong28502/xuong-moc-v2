import React, { useEffect } from "react";
import Products from "../products/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import Loading from "../loading/Loading";
import TitleHome from "../titleHome/TitleHome";
import "./productsHot.css";
function ProductsHot() {
  const dispatch = useDispatch();
  const showSlider = true;
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // products.filter((product) => product.hot === 1);
  return (
    <>
      <div className="wrap-cotnainer-home-item container-fluid">
        <TitleHome title={"Sản phẩm nổi bật"} colorText={"#2e2c53"} />
        {status === "succeeded" ? (
          <Products
            showSlider={showSlider}
            products={products.filter((product) => product.hot === 1)}
          />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default ProductsHot;
