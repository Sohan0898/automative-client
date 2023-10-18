import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <Link>
          <img
            className="w-36 "
            src="https://i.ibb.co/92cCTpX/usio-X-200-x-100-px.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Logo;
