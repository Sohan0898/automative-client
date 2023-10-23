import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="">
        <Link>
          <div className="flex items-end ">
            <h2 className="text-4xl lg:text-5xl font-racing">Fusion</h2>
            <img
              className="w-10 lg:w-12 -ml-1 "
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
