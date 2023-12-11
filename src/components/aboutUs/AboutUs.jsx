import React, { useEffect } from "react";
import "./aboutUs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutUs } from "./aboutUsSlice";
import { fetchPolicies } from "./policiesSlice";
import TitleHome from "../titleHome/TitleHome";
import Loading from "../loading/Loading";
function AboutUs() {
  const dispatch = useDispatch();
  const aboutUs = useSelector((state) => state.aboutUs.data);
  const policies = useSelector((state) => state.policies.data);
  const status = useSelector((state) => state.aboutUs.status);
  const status2 = useSelector((state) => state.policies.status);
  useEffect(() => {
    dispatch(fetchAboutUs());
    dispatch(fetchPolicies());
  }, [dispatch]);
  if (status === "loading") {
    <Loading />;
  }
  if (status2 === "loading") {
    <Loading />;
  }
  return (
    <section id="home-aboutUs">
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="home-aboutUs__content container-fluid">
          <TitleHome title={`VỀ CHÚNG TÔI`} colorText={"#fff"} />

          <div className="row container-mx-10">
            <div className="col-md-6">
              <img
                src="http://cutuananh.devmaster.vn/images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg"
                alt="về chúng tôi"
                className="h-100 w-100"
              />
            </div>
            <div className="col-md-6">
              <p>
                nội thất <span>hoàng hoan</span>
                <br />
                uy tín song hành chất lượng
              </p>
              <p>
                Nội thất của <span>Hoàng Hoan</span> chúng tôi tự hào là đức con
                tinh thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh
                doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN nổi tiếng.
              </p>
              <p>
                Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH
                Kiên Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt
                huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở
                hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các
                sản phẩm với giá cả luôn cạnh tranh.
              </p>
              <div className="list-img">
                <ul className="d-flex row justify-content-between align-items-center">
                  {aboutUs.map((item) => {
                    return (
                      <li className="col-md-3" key={item.id}>
                        <div className="box position-relative">
                          <img
                            className=""
                            src={`http://cutuananh.devmaster.vn/${item.image}`}
                            alt="về chúng tôi 1"
                          />
                          <div className="see-more">
                            <a className="btn" href="/">
                              Xem thêm&nbsp;
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {status2 === "loading" ? (
        <Loading />
      ) : (
        <div className="home-aboutUs__content container-fluid ">
          <TitleHome
            title={`TẠI SAO NÊN CHỌN HOÀNG HOAN?`}
            colorText={"#fff"}
          />
          <div className="row container-mx-10">
            {policies.map((item, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <div className="aboutUs-policy__item d-flex">
                    <div className="img">
                      <img
                        src={`http://cutuananh.devmaster.vn/${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p className="title">{item.title}</p>
                      <p className="desc">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs;
