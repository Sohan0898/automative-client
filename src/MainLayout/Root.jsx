import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navbar/Navber";



const Root = () => {
    return (
        <div  className="font-gabarito  bg-base-200">
           
           <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;