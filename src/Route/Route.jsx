import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Root from "../MainLayout/Root";

  const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/event.json"),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  
  export default myCreatedRoute;