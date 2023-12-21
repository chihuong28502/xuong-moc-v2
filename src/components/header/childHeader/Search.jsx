import React, { useState } from "react";
import handleOnclickInputSearch from "../../../handleJs/handleOnclickInputSearch";
import handleClickSearch from "../../../handleJs/search";
import { useDispatch, useSelector } from "react-redux";
import { setDataSearch, setValueSearch } from "../../../redux/productsSlice";
import slugifyText from "../../../utils/formatText";
import DataSearchList from "./child/DataSearchList";
import { Link } from "react-router-dom";
function Search() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.products.valueSearch);
  const data = useSelector((state) => state.products.dataSearch);
  const products = JSON.parse(localStorage.getItem("products"));
  const handleChange = (e) => {
    dispatch(setValueSearch(e.target.value));
    dispatch(
      setDataSearch(
        products.filter((item) =>
          slugifyText(item.title).includes(slugifyText(e.target.value))
        )
      )
    );
  };
  return (
    <>
      <div
        href="/#"
        onClick={handleClickSearch}
        className="item-icon icon-search d-flex justify-content-center align-items-center position-relative"
      >
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="search-form">
        <input
          id="search"
          onChange={handleChange}
          type="text"
          className="search-box"
          onClick={handleOnclickInputSearch}
        />
        <label className="label-search" htmlFor="search">
          Bạn cần tìm sản phẩm gì?
        </label>
        <Link
          to={`/search/${slugifyText(value)}`}
          className="search-form__search"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </Link>
      </div>
      {value === "" ? (
        ""
      ) : (
        <DataSearchList valueSearch={value} products={data} />
      )}
    </>
  );
}

export default Search;
