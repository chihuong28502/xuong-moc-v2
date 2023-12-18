import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import AllProducts from "../../components/allProducts/AllProducts";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
function AllProductsCategories() {
  const { slug } = useParams();
  const products = useSelector((state) => state.products.data);
  const [data, setData] = useState(products);
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    categories.map((cate) => {
      if (cate.slug === slug && products.length !== 0) {
        setData(products.filter((pro) => pro.cid === cate.id));
      }
    });
  }, [categories, products, slug]);

  return (
    <>
      <Header />
      <Slider />
      <AllProducts products={data} status={status} />
      <Footer />
    </>
  );
}

export default AllProductsCategories;
