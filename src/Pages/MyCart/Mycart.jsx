const Mycart = () => {


  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-14 pb-16">
        <h2 className="text-4xl text-center font-bold mb-6">Your cart</h2>
      <div className="flex flex-col max-w-3xl p-6 mx-auto  space-y-4 sm:p-10 bg-base-100">
        
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0  w-60 h-40 dark:border-transparent rounded outline-none  dark:bg-gray-500"
                src="https://i.ibb.co/HG50V89/pexels-jdlr-photography-17377920.jpg"
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                    Mclearn-sereis-100
                    </h3>
                    <p className="text-sm dark:text-gray-400">Super Car</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">12345.99 $</p>
                    
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 hover:text-FusionRed space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Mycart;
