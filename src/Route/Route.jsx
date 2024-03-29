import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Root from "../MainLayout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Mycart from "../Pages/MyCart/Mycart";
import BrandsProduct from "../Components/BrandsProduct/BrandsProduct";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Components/BrandsProduct/productDetails";
import Gallery from "../Pages/Gallery/Gallery";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(" https://automative-server-site.vercel.app/brands"),
      },
      {
        path: "/brandsProduct/:brand",
        element: <BrandsProduct></BrandsProduct>,
        loader: ({ params }) =>
          fetch(
            ` https://automative-server-site.vercel.app/products/${params.brand}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://automative-server-site.vercel.app/products/brand/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <Mycart></Mycart>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://automative-server-site.vercel.app/products/brand/${params.id}`
          ),
      },

      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
]);

export default myCreatedRoute;
