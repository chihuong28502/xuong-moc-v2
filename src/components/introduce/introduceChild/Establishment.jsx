import React from "react";
import TitleHome from "../../titleHome/TitleHome";
import { useSelector } from "react-redux";
import Loading from "../../loading/Loading";
function Establishment({ establishment }) {
  const status = useSelector((state) => state.introduce.status);
  if (status !== "succeeded") {
    <Loading />;
  }
  return (
    <>
      <TitleHome title={establishment?.title} colorText={"#2e2c53"} />
      <div className="row about-history mt-3">
        <div className="col-md-6">
          <img
            src="http://cutuananh.devmaster.vn/images/AnhCatTC/thanhlap.jpg"
            alt="thanh lap"
            className="h-100 w-100"
          />
        </div>
        <div className="col-md-6">
          <p>{establishment?.description}</p>
          <p>
            Cả một quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính, tự
            tạo ra cho mình 1 phân xưởng nhỏ rồi dần phát triển và hiện tại
            Hoàng Hoan đã là một trong những công ty có dịch vụ thiết kế và thi
            công nội thất uy tín chất lượng với giá tốt nhất tại Hà Nội với sứ
            mệnh “đem đến cho khách hàng không gian nội thất hòan hảo”.
          </p>
          <p>{establishment?.metaDescription}</p>
        </div>
      </div>
    </>
  );
}

export default Establishment;
