import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Theme from "../../Theme/Theme";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Sign-out successful"))
      .catch((error) => console.log(error));
  };

  const navMenu = (
    <>
      <li className="btn hover:bg-FusionRed hover:text-white">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <>
          <li className="btn hover:bg-FusionRed hover:text-white">
            <NavLink to={"/addProduct"}>Add Product</NavLink>
          </li>
          <li className="btn hover:bg-FusionRed hover:text-white">
            <NavLink to={"/myCart"}>My Cart</NavLink>
          </li>
        </>
      )}
      <li className="btn hover:bg-FusionRed hover:text-white">
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li className="btn hover:bg-FusionRed hover:text-white">
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className=" max-w-screen-2xl mx-auto px-2 py-3 md:px-6 lg:px-16 ">
      <div className="navbar bg-base-200 gap-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <div className="Navber"></div>
          {/* darkmode toggle */}
          <div className="mr-5 flex items-center">
            <Theme></Theme>
          </div>
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar md:ring ring-FusionRed md:online  "
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img
                        src="https://i.ibb.co/cQkSBMR/User-avatar-svg.png"
                        alt=""
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
                >
                  <div className="w-full px-2 ">
                    <p className="text-sm capitalize font-medium pb-2">
                      {user?.displayName ? user.displayName : "Anonymous User"}
                    </p>

                    <p className="text-sm font-medium pb-2 ">{user.email}</p>
                  </div>

                  <a
                    onClick={handleLogOut}
                    className="btn text-white focus:outline-none font-bold bg-FusionRed hover:bg-FusionRed  focus:ring-FusionRed w-full rounded-lg  px-5 py-2 mr-2 mb-2"
                  >
                    Sign out
                  </a>
                </ul>
              </>
            ) : (
              <Link to={"/login"}>
                <button className=" btn btn-circle  md:btn-block text-xsm md:text-base focus:outline-none text-white  font-bold bg-FusionRed hover:bg-FusionRed  focus:ring-FusionRed  md:rounded-lg p-3 md:px-5 md:py-2 md:mr-2 md:mb-2">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
