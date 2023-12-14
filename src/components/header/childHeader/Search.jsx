import React from "react";
import handleOnclickInputSearch from "../../../handleJs/handleOnclickInputSearch";
import handleClickSearch from "../../../handleJs/search";

function Search() {
  
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
          type="text"
          className="search-box"
          onClick={handleOnclickInputSearch}
        />
        <label className="label-search" htmlFor="search">
          Bạn cần tìm sản phẩm gì?
        </label>
      </div>
    </>
  );
}

export default Search;
