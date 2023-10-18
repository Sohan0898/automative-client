import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div className="grid h-screen px-4 bg-white place-content-center">
  <div className="text-center">
    
  <h1 className="font-black text-FusionRed font-racing text-9xl">4<span className="text-gray-700">0</span>4</h1>

    <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Uh-oh!
    </h2>

    <p className=" text-gray-500">We can't find that page.</p>

    <Link><button
      
      className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-FusionRed rounded hover:bg-red-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </button></Link>
  </div>
</div>
    </div>
  );
};

export default Errorpage;
