import { useLoaderData } from "react-router-dom";
import BrandCards from "./BrandCards";

const Brand = () => {
  const lodedBrands = useLoaderData();

  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-14 pb-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-6xl text-center font-bold  font-racing pb-5">
          Fusion<span className="text-FusionRed">X</span> Trusted Brands
        </h1>
      </div>
      <div className="pb-10 font-montserrat">
        <marquee className="py-3" direction="left">
          <span className="text-4xl font-bold text-FusionRed">
            Limited-Time Offer!{" "}
          </span>
          <span className="text-3xl font-medium">
            Upgrade your new Car with Fusion X advanced safety features and
            luxurious interior options, all with a 15% discount for a limited
            time.
          </span>{" "}
        </marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-4 gap-12">
        {lodedBrands?.map((brands) => (
          <BrandCards key={brands._id} brands={brands}></BrandCards>
        ))}
      </div>
    </div>
  );
};

export default Brand;
