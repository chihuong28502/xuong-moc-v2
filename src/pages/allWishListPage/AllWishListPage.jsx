import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import AllWishList from "../../components/allWishList/AllWishList";

function AllWishListPage() {
  return (
    <>
      <Header />
      <Slider />
      <AllWishList />
      <Footer />
    </>
  );
}

export default AllWishListPage;
