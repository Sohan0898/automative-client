import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar.Jsx";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;