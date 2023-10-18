import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <Link>
          <img
            className="w-40 "
            src="https://i.ibb.co/r4dHXVR/usio-X-1.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
