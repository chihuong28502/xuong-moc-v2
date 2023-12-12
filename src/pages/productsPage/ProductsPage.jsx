import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";

function ProductsPage() {
  const products = useSelector((state) => state.products.data);
  console.log(products);
  const status = useSelector((state) => state.products.status);
  return (
    <>
      <Header />
      <Slider />
      {status === "loading" ? <Loading /> : <Products products={products} />}
      <Footer />
    </>
  );
}

export default ProductsPage;
