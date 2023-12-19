import React from "react";
import TitleHome from "../../titleHome/TitleHome";

function Mission({ mission }) {
  return (
    <>
      <TitleHome title={mission[0]?.title} colorText={"#2e2c53"} />

      <div className="row about-policy mt-2">
        {mission.slice(1).map((item, index) => {
          return (
            <div className="col-md-6 my-3 " key={index}>
              <div className="thumbnail">
                <img
                  src={`http://cutuananh.devmaster.vn/images/AnhCatTC/su-menh1.jpg`}
                  alt=""
                  className="image"
                />
                <div className="content">
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mission;
