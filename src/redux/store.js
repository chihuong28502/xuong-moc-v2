import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import aboutUsSlice from "../components/aboutUs/aboutUsSlice";
import policiesSlice from "../components/aboutUs/policiesSlice";
import newsSlice from "./newsSlice";
const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    aboutUs: aboutUsSlice,
    policies: policiesSlice,
    news: newsSlice,
  },
});
export default store;
