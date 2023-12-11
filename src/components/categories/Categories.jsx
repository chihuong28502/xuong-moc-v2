import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/categoriesSlice";
import "./categories.css";
import Loading from "../loading/Loading";
function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);
  useEffect(() => {
    dispatch(fetchCategories());
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
      <section id="home-category">
        <div className="list-category container">
          <div className="row">
            {categories.map((category) => (
              <div className="col-md-3 my-5" key={category.id}>
                <a href="/">
                  <img
                    src={`http://apixm.devmaster.vn/${category.icon}`}
                    alt={categories.title}
                  />
                  <p>{category.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
