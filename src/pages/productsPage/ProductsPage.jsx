import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import { fetchProducts } from "../../redux/productsSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);
  return (
    <>
      <Header />
      <Slider />
      {status !== "succeeded" ? <Loading /> : <Products products={products} />}
      <Footer />
    </>
  );
}

export default ProductsPage;
