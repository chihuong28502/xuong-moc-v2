import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <section id="footer" className="container-fluid">
        <>
          <div className="allInfo container">
            <div className="info">
              <h5 className="underlined">thông tin chung</h5>
              <p>công ty tnhh hoàng hoan</p>
              <ul className="list-footer">
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <a href="tel:0999.999.999">0999.999.999</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-regular fa-envelope" />
                  </div>
                  <div>
                    <a href="mailto:cskh@hoanghoan.vn">cskh@hoanghoan.vn</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</div>
                </li>
              </ul>
            </div>
            <div className="info">
              <h5>về chúng tôi</h5>
              <ul className="list-footer">
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <a href="/products">Sản phẩm</a>
                </li>
                <li>
                  <a href="/news">Tin tức</a>
                </li>
                <li>
                  <a href="/">Đối tác</a>
                </li>
                <li>
                  <a href="/contact">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="info">
              <h5 className="underlined">kết nối với chúng tôi</h5>
              <div className="social">
                <a href="/">
                  <img
                    src="http://cutuananh.devmaster.vn/images/iconFooter/icon_fb_pro.jpg"
                    alt="social images"
                  />
                </a>
                <a href="/">
                  <img
                    src="http://cutuananh.devmaster.vn/images/iconFooter/icon_zalo_pro.jpg"
                    alt="social images"
                  />
                </a>
                <a href="/">
                  <img
                    src="http://cutuananh.devmaster.vn/images/iconFooter/icon_email_pro.jpg"
                    alt="social images"
                  />
                </a>
              </div>
              <img
                src="http://cutuananh.devmaster.vn/images/iconFooter/chatluong.jpg"
                alt="chứng nhận"
              />
            </div>
          </div>
        </>
      </section>
    </>
  );
}

export default Footer;
