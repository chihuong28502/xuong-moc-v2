import ProductsPage from "../pages/productsPage/ProductsPage";
import Home from "../pages/homePage/Home";
import ContactPage from "../pages/contactPage/ContactPage";
import AllWishListPage from "../pages/allWishListPage/AllWishListPage";
import AllProductsCategoriesPage from "../pages/allProductsCategoriesPage/AllProductsCategoriesPage";
import IntroducePage from "../pages/introduce/IntroducePage";
const listRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/introduce",
    component: IntroducePage,
  },
  {
    path: "/wishlistAll",
    component: AllWishListPage,
  },
  { path: "/products/:slug", component: AllProductsCategoriesPage },
];
export default listRouter;
