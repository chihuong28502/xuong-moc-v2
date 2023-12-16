import ProductsPage from "../pages/productsPage/ProductsPage";
import Home from "../pages/homePage/Home";
import ContactPage from "../pages/contactPage/ContactPage";
import AllWishListPage from "../pages/allWishListPage/AllWishListPage";
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
    path: "/wishlistAll",
    component: AllWishListPage,
  },
];
export default listRouter;
