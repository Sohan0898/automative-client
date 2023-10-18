import { MdOutlineMail } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/txV99GD/blake-meyer-CRNb-Hj-Naljo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-gradient-to-b from-[#12121200]  to-[#161616] "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            

            <h1 className="mb-5 text-white text-5xl font-bold">
              Fusion<span className="text-FusionRed">X</span> : <br />
              Your Automotive Car Destination
            </h1>
            <p className="mb-5 text-FusionGray max-w-xl mx-auto">
              Discover automotive excellence at FusionX. Explore the latest
              innovations in electric, luxury, and high-performance cars.
              Elevate your driving experience today.
            </p>
            <button
              className="mx-auto flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-FusionRed transition-all hover:bg-FusionRed/10 active:bg-FusionRed/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Explore FusionX
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
            <div className="w-3/6 mx-auto mt-6">
              <div className="relative flex h-10 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-lg rounded-r-none  border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-FusionRed focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Enter email to get started"
                />
                <span>
                  <button
                    className="middle none relative h-10 max-h-[40px] w-16 max-w-[70px] rounded-lg rounded-l-none bg-FusionRed text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-FusionRed/20 transition-all hover:shadow-lg hover:shadow-FusionRed/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    <span className="text text-2xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                      <MdOutlineMail></MdOutlineMail>
                    </span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
