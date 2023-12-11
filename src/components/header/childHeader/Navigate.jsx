import React from "react";
import { NavLink } from "react-router-dom";

function Navigate() {
  const listNav = [
    {
      id: 1,
      title: "Trang chủ",
      router: "/",
    },
    {
      id: 2,
      title: "Giới thiệu",
      router: "/introduce",
    },
    {
      id: 3,
      title: "Sản Phẩm",
      router: "/products",
    },
    {
      id: 4,
      title: "Tin tức",
      router: "/news",
    },
    {
      id: 5,
      title: "Liên hệ",
      router: "/contact",
    },
  ];
  const activeClassName = ({ isActive }) => {
    return isActive ? "nav-item active" : "nav-item";
  };
  return (
    <nav className="nav col-6 align-items-center d-flex">
      <ul className="nav-list d-flex align-items-center my-0 w-100 justify-content-between ">
        {listNav.map((nav) => {
          return (
            <a key={nav.id} className="nav-item d-flex">
              {nav.title}
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigate;
