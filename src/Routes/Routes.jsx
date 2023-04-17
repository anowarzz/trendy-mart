
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import AllCustomers from "../Pages/Dashboard/AllCustomers/AllCustomers";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AddCustomer from "../Pages/Dashboard/AddCustomer/AddCustomer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
  <AllCustomers />
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllCustomers />,
      },
      {
        path: "/dashboard/customers",
        element: <AllCustomers />,
      },
      {
        path: "/dashboard/products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/addCustomer",
        element: <AddCustomer />,
      },
    ],
  },
]);

export default router;