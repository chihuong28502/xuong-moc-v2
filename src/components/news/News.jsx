import React, { useEffect } from "react";
import "./news.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/newsSlice";
import Loading from "../loading/Loading";
import TitleHome from "../titleHome/TitleHome";
function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.data);
  const status = useSelector((state) => state.news.status);
  console.log(news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <section id="home-news">
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="home-news container-fluid">
          <TitleHome title={"TIN TỨC"} colorText={'#2e2c53'} />
          <div className="row container-mx-10">
            <div className="col-md-7 home-news__effect">
              <a
                href="/"

                // to={`/news/${slugify(news[0].title)}`}
              >
                <div className="thumbnail box">
                  <div className="img img-main">
                    <img
                      src={`http://apixm.devmaster.vn/${news[0]?.image}`}
                      alt=""
                    />
                  </div>
                  <div className="main-content">
                    <p>{news[0]?.title}</p>
                    <p>{news[0]?.description}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-5">
              <div className="thumbnail">
                <div className="home-news__effect">
                  {news.slice(0, 3).map((item, index) => (
                    <a
                      href="/"
                      // to={`/news/${slugify(item.title)}`}
                      className="row fix-height"
                      key={index}
                    >
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <img
                            className="home-new-img-item"
                            src={`http://apixm.devmaster.vn/${item.image}`}
                            alt="tin tức"
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/#">{item.title}</a>
                        </p>
                        <p className="desc">{item.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="readMore">
                  <a href="/">
                    Xem thêm
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default News;
