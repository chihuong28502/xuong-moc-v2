import React from "react";
import "./slider.css";
import { Link } from "react-router-dom";
function Slider({ containerSize, dataBanner }) {
  return (
    <div className={`slider position-relative ${containerSize}`}>
      <div className="slider-img container-fluid px-0 gx-0">
        <img className="w-100" src={dataBanner?.image} alt="" />
      </div>
      <div className="slider-content position-absolute container ">
        <h1 className="text-uppercase">
          {dataBanner?.title}
          <br />
          <span>{dataBanner?.subTitle}</span>
        </h1>
        <p>{dataBanner?.description}</p>
        {dataBanner?.description && (
          <a href={`/contact`}>
            <button type="submit">
              <Link to={`/contact`} />
              LIÊN HỆ NGAY
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Slider;
