import { Link } from "react-router-dom";
import Slider from "./Slider";

const BrandsProduct = () => {
  return (
    <div className=" ">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 mt-10  "><Slider></Slider></div>
      <div>
        <section className="py-10 bg-base-100 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Available cars are shown here
              </h2>

              <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-FusionRed border border-transparent rounded-md sm:w-auto hover:bg-red-700 focus:bg-red-700"
                  role="button"
                >
                  {" "}
                  Trial Free Ride{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-10   grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        <div className="card  bg-base-100 shadow">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/HG50V89/pexels-jdlr-photography-17377920.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
          <h2 className=" text-FusionBlue font-racing text-2xl font-medium">Mclearn-sereis-100</h2>
            <div className="flex justify-between text-FusionDark gap-10 mt-4">
              <p>Brand : <span className="text-gray-500">Mclearn</span> </p>
              <p>Type : <span className="text-gray-500">Super Car</span></p>
            </div>
            <div className="flex justify-between  text-FusionDark gap-10 mb-4">
              <p>Price : <span className="text-gray-500">12290 $</span></p>
              <p>Rating : <span className="text-gray-500">4.5</span></p>
            </div>
            
            <div className="card-actions">
            <Link to={'/updateProduct'}><button className="btn bg-FusionRed hover:bg-red-700 text-white">Update</button></Link>
            <Link to={'/productDetails'}><button className="btn bg-amber-500 hover:bg-amber-700 text-white">Details</button></Link>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BrandsProduct;
