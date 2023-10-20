import { useLoaderData} from "react-router-dom";
import BrandCards from "./BrandCards";

const Brand = () => {

  
const lodedBrands = useLoaderData();

  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-14 pb-16">
        <div className="mb-10">
            <h1 className="text-6xl text-center font-bold text-FusionDark drop-shadow-lg font-racing pb-5">Fusion<span className="text-FusionRed">X</span> Brands</h1>
        </div> 
     <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12">
     {
        lodedBrands?.map(brands => (
            <BrandCards key={brands._id} brands={brands}></BrandCards>
        ))
     }
     </div>
    </div>
  );
};

export default Brand;
