import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, image, brand, type, price, rating } = product;
  console.log(product);

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const updateProduct = {
      image,
      name,
      brand,
      type,
      price,
      rating,
    };

    console.log(updateProduct);

    fetch(` https://automative-server-site.vercel.app/products/brand/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <section className="py-10 bg-base-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
              Update Fusion<span className="text-FusionRed">X</span> Product
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Enhance your FusionX experience with our Update Product feature.
              Seamlessly introduce new car models, update your inventory, and
              stay at the forefront of automotive innovation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="mt-6 overflow-hidden bg-base-200 rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-FusionRed">
                  Update Your Available Product
                </h3>

                <form onSubmit={handleUpdateProduct} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium "> Image</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="image"
                          defaultValue={image}
                          id=""
                          placeholder="Enter your image URL"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium "> Name </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          defaultValue={name}
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium ">
                        {" "}
                        Brand Name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="brand"
                          defaultValue={brand}
                          id=""
                          placeholder="Enter your brand name"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium "> Type</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="type"
                          defaultValue={type}
                          id=""
                          placeholder="Enter your product type"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium "> Price</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="price"
                          defaultValue={price}
                          id=""
                          placeholder="Enter your product price"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="text-base font-medium "> Rating</label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="rating"
                          defaultValue={rating}
                          id=""
                          placeholder="Enter your rating"
                          className="block w-full px-4 py-4  placeholder-gray-500 transition-all duration-200 bg-base-100 border border-gray-200 rounded-md focus:outline-none focus:border-red-600 caret-red-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-FusionRed border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700"
                      >
                        Update Product
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
