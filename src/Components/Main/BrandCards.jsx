import { Link } from "react-router-dom";


const BrandCards = ({brand}) => {

    const {id, name, image_url } = brand;
    return (
        <div className="">
            <Link to={`/brandsProduct/${id}`}><div className="card  bg-base-200 border-red-200  border-2 shadow-lg p-5 ">
        <div className="card-body mx-auto">
          <h2 className="card-title text-center text-FusionBlue text-3xl font-bold">{name}</h2>
        </div>
        <figure className="shadow bg-base-200 " >
          <img className="max-w-[300px] h-[180px] p-5  hover:mix-blend-multiply     "
            src={image_url}
            alt="Brand"
          />
        </figure>
      </div></Link>
        </div>
    );
};

export default BrandCards;