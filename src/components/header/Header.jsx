import Cart from "./childHeader/Cart";
import Search from "./childHeader/Search";
import Wishlist from "./childHeader/Wishlist";
import Navigate from "./childHeader/Navigate";
import "../header/header.css";
function Header() {
  return (
    <div className="header d-flex m-auto position-fixed">
      <div className="container-ct container-fluid d-flex align-items-center justify-content-between row">
        <div className="head-logo  col-3">
          <a className="w-100" href="/#">
            <img
              className="img-logo"
              alt=""
              src="http://cutuananh.devmaster.vn/images/AnhCat/logo.jpg"
            />
          </a>
        </div>
        <Navigate />
        <div className="list-icon gap-4 d-flex justify-content-end col-3">
          <Cart />
          <Wishlist />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
