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
      <AllProducts products={data} status={status} />
      <Footer />
    </>
  );
}

export default AllProductsCategories;
