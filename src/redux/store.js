import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import aboutUsSlice from "../components/aboutUs/aboutUsSlice";
import policiesSlice from "../components/aboutUs/policiesSlice";
import newsSlice from "./newsSlice";
import partnersSlice from "../components/partners/partnersSlice";
import wishlistSlice from "./wishlistSlice";
import introduceSlice from "../components/introduce/introduceSlice";
const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    aboutUs: aboutUsSlice,
    policies: policiesSlice,
    news: newsSlice,
    partners: partnersSlice,
    wishlist: wishlistSlice,
    introduce: introduceSlice,
  },
});
export default store;
