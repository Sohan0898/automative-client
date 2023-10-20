import { Link } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { FcRating } from "react-icons/fc";

const ProductCard = () => {
    return (
        <div>
            <div className="">
        <div className="card  bg-base-100 shadow border-2 border-FusionGray">
          <figure className="shadow-FusionDark shadow-lg ">
            <img
              src=''
              alt="Cars"
              className="h-[220px] w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
          <h2 className=" text-black font-racing text-2xl h-[60px]  font-medium">{}</h2>
            <div className="flex justify-between text-FusionDark gap-16  w-full">
              <p><span data-tip="Brand" className="badge badge-outline badge-error tooltip tooltip-error  text-gray-500">{}</span> </p>
              <p><span data-tip="Type" className="badge badge-outline badge-accent tooltip tooltip-accent text-gray-500">{}</span></p>
            </div>
            <div className="flex justify-between  text-FusionDark gap-16 mb-4">
              <div className="flex items-center text-green-700 justify-center gap-1"><ImPriceTag></ImPriceTag> <span className=" text-gray-500">{} $</span></div>
              <div className="flex items-center justify-center gap-1"><FcRating></FcRating> <span className="text-gray-500">{}</span></div>
            </div>
            
            <div className="card-actions">
            <Link to={'/updateProduct/${_id}'}><button className="btn bg-FusionRed hover:bg-red-700 text-white">Update</button></Link>
            <Link to={'/productDetails'}><button className="btn bg-amber-500 hover:bg-amber-700 text-white">Details</button></Link>
          </div>
          </div>
         
        </div>
      </div>
        </div>
    );
};

export default ProductCard;