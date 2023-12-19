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

  const dataBanner = {
    image: "http://cutuananh.devmaster.vn/images/AnhCat/banner.jpg",
    title: "Thế giới nội thất số 1 việt nam ",
    subTitle: "Hoàng Hoan",
    description:
      "Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.",
  };
  return (
    <>
      <Header />
      <Slider dataBanner={dataBanner} />
      {status !== "succeeded" ? <Loading /> : <Products products={products} />}
      <Footer />
    </>
  );
}

export default ProductsPage;
