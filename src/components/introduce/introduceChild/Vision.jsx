import React from "react";
import TitleHome from "../../titleHome/TitleHome";

function Vision({ vision }) {
  return (
    <div className="row about-vision">
      <div className="col-md-12">
        <TitleHome title={vision?.title} colorText={"#2e2c53"} />
        <img
          src="http://cutuananh.devmaster.vn/images/AnhCatTC/tamnhin.jpg"
          alt=""
          className="w-100"
        />
        <p>{vision?.metaDescription}</p>
      </div>
    </div>
  );
}

export default Vision;
