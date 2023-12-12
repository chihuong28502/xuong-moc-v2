import ProductsPage from '../pages/productsPage/ProductsPage'
import Home from "../pages/homePage/Home";
const listRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
];
export default listRouter;
