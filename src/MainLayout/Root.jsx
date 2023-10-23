import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navbar/Navber";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-gabarito  bg-base-200 ">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
