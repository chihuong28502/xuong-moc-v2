import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "./partnersSlice";
import Loading from "../loading/Loading";
import TitleHome from "../titleHome/TitleHome";
function Partners() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners.data);
  const status = useSelector((state) => state.partners.status);
  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
  };
  return (
    <div className="partners container-fluid mt-5 pt-5">
      <TitleHome title={"ĐỐI TÁC"} colorText={"2c2e53"} />
      <Slider {...settings} className="container-mx-10 mt-5">
        {status === "succeeded" ? (
          partners.map((partner) => (
            <div className="" key={partner.id}>
              <img src={partner.image} alt="" />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </Slider>
    </div>
  );
}

export default Partners;
