

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Y3CDw7M/pexels-sebastian-pichard-6894430.jpg)",
              
            }}
          >
            <div className="hero-overlay  bg-gradient-to-b from-[#12121200]  to-[#181818] "></div>
            <div
              
              className="hero-content text-center text-neutral-content"
            >
              <div className="">
                <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl text-white font-bold">
                <span className="text-amber-500">Lamborghini</span> - Embrace the Art of Supercars<br />
                at Fusion<span className="text-FusionRed">X</span>
                </h1>
                <p className="mb-5 text-gray-400">
                Indulge in the art of performance and design with Lamborghini at FusionX. <br /> From the roaring V12 engines to the iconic scissor doors, experience the thrill of owning a legend. Lamborghini, where performance meets passion.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-FusionRed hover:bg-FusionRed focus:ring-4 focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-red-700">
                    Get Ride
                  </button>
                  <button className=" text-FusionRed hover:text-white border border-FusionRed hover:bg-FusionRed focus:ring-4 focus:outline-none focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-FusionRed dark:text-FusionRed dark:hover:text-white dark:hover:bg-FusionRed dark:focus:ring-red-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/nCwBW78/pexels-abdulwahab-alawadhi-5623494.jpg)",
              
            }}
          >
            <div className="hero-overlay  bg-gradient-to-b from-[#12121200]  to-[#181818] "></div>
            <div
              
              className="hero-content text-center text-neutral-content"
            >
              <div className="">
                <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl text-white font-bold">
                <span className="text-amber-500">McLaren</span> - Unleash Supercar Dreams<br />
                at Fusion<span className="text-FusionRed">X</span>
                </h1>
                <p className="mb-5 text-gray-400">
                Unleash your inner speed demon with McLaren supercars at FusionX. Precision engineering, cutting-edge technology,<br /> and breathtaking performance await you. Get behind the wheel of a McLaren masterpiece
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-FusionRed hover:bg-FusionRed focus:ring-4 focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-red-700">
                    Get Ride
                  </button>
                  <button className=" text-FusionRed hover:text-white border border-FusionRed hover:bg-FusionRed focus:ring-4 focus:outline-none focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-FusionRed dark:text-FusionRed dark:hover:text-white dark:hover:bg-FusionRed dark:focus:ring-red-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero h-[80vh] "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/B3v7SY2/pexels-mike-bird-892522.jpg)",
              
            }}
          >
            <div className="hero-overlay  bg-gradient-to-b from-[#12121200]  to-[#181818] "></div>
            <div
              
              className="hero-content text-center text-neutral-content"
            >
              <div className="">
                <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl text-white font-bold">
                <span className="text-amber-500">BMW</span> - Power and Precision<br />
                at Fusion<span className="text-FusionRed">X</span>
                </h1>
                <p className="mb-5 text-gray-400">
                Experience the iconic blend of luxury, performance, and innovation with BMW cars at FusionX. From the sleek <br /> sedans to dynamic SUVs, elevate your drive with the ultimate driving machines. Discover BMW excellence today.
                </p>
                <div className="flex justify-center items-center gap-5 pt-3">
                  <button className="focus:outline-none text-white bg-FusionRed hover:bg-FusionRed focus:ring-4 focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:focus:ring-red-700">
                    Get Ride
                  </button>
                  <button className=" text-FusionRed hover:text-white border border-FusionRed hover:bg-FusionRed focus:ring-4 focus:outline-none focus:ring-FusionRed font-medium rounded-lg text-sm px-6 py-3 text-center mr-2 mb-2 dark:border-FusionRed dark:text-FusionRed dark:hover:text-white dark:hover:bg-FusionRed dark:focus:ring-red-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
         
      </div>
        </div>
    );
};

export default Slider;