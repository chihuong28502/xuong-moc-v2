import { Link } from "react-router-dom";
import slugifyText from "../../../../utils/formatText";

function DataSearchList({ products, valueSearch }) {
  const handleOnclickSeeAll = () => {};

  return (
    <>
      <div className="data-search">
        {products.slice(0, 3).map((item, index) => (
          <a href="/san-pham/phong-tam/bon-rua-mat" key={index}>
            <div className="data-search__item">
              <img src={`http://apixm.devmaster.vn/${item.image}`} alt="" />
              <p>{item.title}</p>
              <i className="fa-solid fa-angle-right" />
            </div>
          </a>
        ))}
        <div className="data-search__item">
          <Link
            onClick={handleOnclickSeeAll}
            to={`/search/${slugifyText(valueSearch)}`}
          >
            Xem tất cả kết quả
          </Link>
        </div>
      </div>
    </>
  );
}

export default DataSearchList;
