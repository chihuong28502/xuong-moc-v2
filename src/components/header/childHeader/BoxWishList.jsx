import React from "react";
import "./wishlist.css";
import { useSelector } from "react-redux";
import Loading from "../../loading/Loading";
function BoxWishList({ wishlist }) {
  const status = useSelector((state) => state.wishlist.status);
  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="box__content">
        <div>
          <a href="/">
            <div className="box__content--data">
              <div className="details">
                <img
                  src={`http://apixm.devmaster.vn/${wishlist.image}`}
                  alt=""
                />
                <div>
                  <h5>{wishlist.title}</h5>
                </div>
              </div>
              <h5>
                <span className="new-price">
                  {Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(wishlist.priceNew)}
                </span>
              </h5>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default BoxWishList;
