import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="">
        <Link>
          <div className="flex  md:items-end ">
            <h2 className="text-2xl md:text-5xl font-racing">Fusion</h2>
            <img
              className="w-5  md:w-12 -ml-1 "
              src="https://i.ibb.co/5FVrzQB/Favicon.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
