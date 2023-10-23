import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-6 py-3 md:px-6 lg:px-16">
      <section className="bg-base-100 my-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
            Fusion<span className="text-FusionRed">X</span> Automotive: A
            Gallery of Innovation on Wheels
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Explore the world of automotive innovation with FusionX, where
            cutting-edge technology meets sleek design. Our gallery showcases a
            stunning collection of cars that redefine the driving experience.
            From electric marvels to high-performance supercars, FusionX sets
            the bar high for the future of automotive excellence. Browse through
            our gallery and witness the fusion of technology, style, and
            performance like never before.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={"/"}>
              {" "}
              <button
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-FusionRed hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
              >
                Our Brands
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Explore more
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/3Sj0hHZ/667852.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/CQzQfwx/20200709122144-Lamborghini-Sian-Roadster-front-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/q9rsfVs/Lamborghini-Urus-1-1.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/HG50V89/pexels-jdlr-photography-17377920.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/nCwBW78/pexels-abdulwahab-alawadhi-5623494.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/Y3CDw7M/pexels-sebastian-pichard-6894430.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/bPd43KJ/row07285.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/HCbYWNz/istockphoto-529992082-612x612.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/B3v7SY2/pexels-mike-bird-892522.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/nzhH7W1/1-5.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/Lp4NTFs/front-left-side-47-1.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/tpsnPsY/images-mgl-qkk7zv-s1-novitec-ferrari-sf90-stradale-2022.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
