import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import AllProducts from "../../components/allProducts/AllProducts";
import { useSelector } from "react-redux";

function AllWishListPage() {
  var title = true;

  const wishlist = useSelector((state) => state.wishlist.data);
  const status = useSelector((state) => state.wishlist.status);
  return (
    <>
      <Header />
      <Slider />
      <AllProducts title={title} products={wishlist} status={status} />
      <Footer />
    </>
  );
}

export default AllWishListPage;
