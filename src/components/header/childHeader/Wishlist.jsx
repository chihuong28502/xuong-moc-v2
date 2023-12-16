import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWishlist } from "../../../redux/wishlistSlice";
import Loading from "../../loading/Loading";
import BoxWishList from "./BoxWishList";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.data);
  const status = useSelector((state) => state.wishlist.status);
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);
  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Link
        to={"/wishlistAll"}
        className="item-icon icon-heart  d-flex justify-content-center align-items-center position-relative"
      >
        <i className="fa-regular fa-heart" />
        <div className="box-heart">
          {wishlist === null || (wishlist !== null && wishlist.length === 0) ? (
            // /products
            <div className="box-wishlist__empty position-absolute ">
              <p className="box__title">Danh sách của bạn đang trống !</p>
              <a href="/san-pham" className="d-block text-center">
                <Link to={"/products"} className="check__btn ">
                  xem sản phẩm ngay
                </Link>
              </a>
            </div>
          ) : (
            <div className=" box-wishlist">
              <div className="box__title">Danh sách yêu thích</div>
              {wishlist.slice(0,8 ).map((item) => (
                <BoxWishList wishlist={item} key={item.id} />
              ))}
              <div className="check">
                <p>có {wishlist.length} sản phẩm</p>
                <Link className="check__btn" to={"/wishlistAll"}>
                  Xem chi tiết
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="number-productWishlist">{wishlist?.length}</div>
      </Link>
    </>
  );
}

export default Wishlist;
