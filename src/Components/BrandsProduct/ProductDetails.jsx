import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {
  const brandDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const { brand, image, name, price, description, rating, type } = brandDetails;

  const handleAddToCart = () => {
    if (user) {
      const email = user.email;

      fetch(" https://automative-server-site.vercel.app/myCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, brand, name, image, price, rating }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product has been added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Please check your credentials",
      });
    }
  };

  return (
    <div>
      <section className="py-10 bg-base-100 sm:py-16 lg:py-20">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold  lg:max-w-md">
              Get full Details On <br />
              <span className="text-FusionRed">{name}</span>
            </h2>

            <form className="px-10 mt-8 lg:mt-0 lg:px-0">
              <div className="sm:flex sm:justify-center lg:justify-end">
                <div>
                  <label className="sr-only"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email to get started"
                    className="block w-full px-4 py-4 text-base bg-base-200 placeholder-gray-500 transition-all duration-200  border-gray-200 rounded-md sm:rounded-r-none caret-FusionRed focus:border-FusionRed focus:ring-1 focus:ring-FusionRed"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-FusionRed border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-red-700 focus:bg-red-700"
                >
                  Get Started Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10 bg-base-200 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img className="w-full rounded-md" src={image} alt={name} />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-base-100 rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <div className="badge">
                        <div className="rating rating-lg">
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                      </div>
                      <p className="flex-shrink-0 text-3xl font-bold text-FusionRed sm:text-4xl">
                        {rating}
                      </p>
                      <p className="pl-6 text-sm font-medium  sm:text-lg">
                        Customer Rating on
                        <br />
                        <span className="text-FusionBlue font-bold">
                          {name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-base-100 rounded-full">
                <svg
                  className="w-8 h-8 text-FusionRed"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
                {name}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {description}
              </p>

              <p className="text-lg font-semibold text-FusionBlue pt-2">
                Type: {type}
              </p>
              <p className="text-4xl pt-4 font-semibold text-FusionRed">
                {price} $
              </p>
              <div className="flex  gap-5">
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-FusionRed to-FusionDark hover:opacity-80 focus:opacity-80"
                  role="button"
                >
                  {" "}
                  Add To Cart{" "}
                </button>
                <Link to={"/myCart"}>
                  <button
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-FusionDark to-green-600 hover:opacity-80 focus:opacity-80"
                    role="button"
                  >
                    {" "}
                    Go To Cart{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
