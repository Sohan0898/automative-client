import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Root from "../MainLayout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Mycart from "../Pages/MyCart/Mycart";
import BrandsProduct from "../Components/BrandsProduct/BrandsProduct";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";

  const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader : ()=> fetch('/brands.json'),
        },
        {
          path: "/brandsProduct/:id",
          element: <BrandsProduct></BrandsProduct>,
          loader : ()=> fetch('/brands.json'),
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
          element: <AddProduct></AddProduct>,

        },
        {
          path: "/updateProduct",
          element: <UpdateProduct></UpdateProduct>,
        },
        {
          path: "/myCart",
          element:<Mycart></Mycart>,
        },
      ],
    },
  ]);
  
  export default myCreatedRoute;