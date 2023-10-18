const ProductDetails = () => {
  return (
    <div>
        <section className="py-10 bg-gray-200 sm:py-16 lg:py-20">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold text-black lg:max-w-md">Get full Details On Product</h2>

            <form action="#" method="POST" className="px-10 mt-8 lg:mt-0 lg:px-0">
                <div className="sm:flex sm:justify-center lg:justify-end">
                    <div>
                        <label  className="sr-only"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email to get started"
                            className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-FusionRed focus:border-FusionRed focus:ring-1 focus:ring-FusionRed"
                            required
                        />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-FusionRed border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-red-700 focus:bg-red-700">
                        Get Started Free
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="https://i.ibb.co/HG50V89/pexels-jdlr-photography-17377920.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-FusionRed sm:text-4xl">
                        67%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        User Positive <br />
                       Reviews on This Car
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
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
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Mclearn-sereis-100
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <button
                
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-FusionRed to-FusionDark hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Add To Cart{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
