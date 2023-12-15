import ProductsPage from "../pages/productsPage/ProductsPage";
import Home from "../pages/homePage/Home";
import ContactPage from "../pages/contactPage/ContactPage";
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
];
export default listRouter;
