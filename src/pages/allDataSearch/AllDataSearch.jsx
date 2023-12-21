import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/products/product/Product";
import TitleHome from "../../components/titleHome/TitleHome";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";

function AllDataSearch() {
  const data = useSelector((state) => state.products.dataSearch);
  const value = useSelector((state) => state.products.valueSearch);
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
      <div className="all-product__item container py-5">
        {data.length === 0 ? (
          <div className="all-product__item--title">
            <TitleHome
              title={`Không tìm thấy kết quả nào<`}
              colorText={`#2e2c53`}
            />
          </div>
        ) : (
          <div className="all-product__item--title">
            <TitleHome
              title={`Kết quả tìm kiếm cho từ khóa "${value}"`}
              colorText={`#2e2c53`}
            />
          </div>
        )}

        <div className="row">
          {data.slice(0, 4).map((item) => (
            <Product
              iconProduct={"fa-regular fa-heart"}
              product={item}
              key={item.id}
            />
          ))}
        </div>
        <div className="load-more">
          <button type="button" className="load-more__btn">
            Xem thêm
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllDataSearch;
