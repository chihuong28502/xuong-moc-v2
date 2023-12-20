import ProductsPage from "../pages/productsPage/ProductsPage";
import Home from "../pages/homePage/Home";
import ContactPage from "../pages/contactPage/ContactPage";
import AllWishListPage from "../pages/allWishListPage/AllWishListPage";
import AllProductsCategoriesPage from "../pages/allProductsCategoriesPage/AllProductsCategoriesPage";
import IntroducePage from "../pages/introduce/IntroducePage";
import ProductDetail from "../components/productDetail/ProductDetail";
import ProductDetailPage from "../pages/productDetailPage/ProductDetailPage";
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

  { path: "/products/product/:slug", component: ProductDetailPage },
];
export default listRouter;
