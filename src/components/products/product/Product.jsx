import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishListAsync,
  deleteWishListAsync,
  removeItemWishList,
} from "../../../redux/wishlistSlice";
import { toast } from "react-toastify";
function Product({ product, column, iconProducts }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.data);
  const handleAddOrRemoveProduct = async (product) => {
    if (iconProducts !== "fa-solid fa-heart-crack") {
      const arr = wishlist.filter((item) => product.id !== item.id);
      // Dispatch the addData action to add the new data directly
      if (arr.length !== wishlist.length) {
        toast.error("Sản phẩm đã tồn tại");
      } else {
        try {
          // Dispatch Thunk Action Creator để thêm sản phẩm và tự động cập nhật Redux store
          await dispatch(addWishListAsync(product));
          toast.success("Sản phẩm đã thêm vào mục yêu thích");
        } catch (error) {
          toast.promise("Sản phẩm yêu thích lỗi catch");
        }
      }
    } else {
      try {
        // Dispatch Thunk Action Creator để thêm sản phẩm và tự động cập nhật Redux store
        await dispatch(deleteWishListAsync(product.id));
        toast.success("Sản phẩm xóa khỏi yêu thích");
      } catch (error) {
      }
    }
  };

  return (
    <>
      <div className={column || "col-md-3"}>
        <div className="product-card ">
          <img
            src={`http://apixm.devmaster.vn/${product?.image}`}
            alt="san pham"
            className="product-card__image "
          />
          <div className="product-card__content">
            <span className="title">
              {product?.title}
              <br />
            </span>
            <span
              style={{
                display: "inline-block",
                direction: "ltr",
                touchAction: "none",
              }}
            >
              <span
                className="react-simple-star-rating"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  userSelect: "none",
                }}
              >
                <span
                  className="empty-icons"
                  style={{
                    display: "inline-block",
                    color: "rgb(204, 204, 204)",
                  }}
                >
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                </span>
                <span
                  className="filled-icons"
                  title="1 out of 5"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    color: "rgb(189, 148, 95)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    width: "0%",
                  }}
                >
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    className="star-svg"
                  >
                    <path
                      fill="currentColor"
                      stroke="none"
                      strokeMiterlimit={10}
                      strokeWidth={0}
                      d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                    ></path>
                  </svg>
                </span>
              </span>
            </span>
            <br />
            <span className="old-price">
              {Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(product?.priceOld)}
            </span>
            <br />
            <span className="new-price">
              {Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(product?.priceNew)}
            </span>
          </div>
          <div className="product-card__group-btn">
            <a href="/" className="see-all">
              <button className="btn">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </a>
            <button
              className="btn"
              type="button"
              id="liveToastBtn"
              onClick={(e) => handleAddOrRemoveProduct(product)}
            >
              <i className={iconProducts || "fa-regular fa-heart"}></i>
            </button>
            <button className="btn" type="button" id="liveToastBtn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
