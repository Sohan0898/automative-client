
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const BrandsProduct = () => {

const product = useParams();

  return (
    <div className=" ">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 mt-10  ">
        <Slider></Slider>
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-10">
         
      <h1>name : {product.name}</h1>
      <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default BrandsProduct;
