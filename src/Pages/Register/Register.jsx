import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { signUpWithEmail } = useContext(AuthContext);
  const [regError, setRegError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setRegError("Password must be six characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter!");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegError("Password must contain at least one special character!");
      return;
    }

    setRegError("");
    // create user
    signUpWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        Swal.fire({
          position: "top-bottom",
          icon: "success",
          title: "You Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });
  };

  return (
    <div>
      <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            className="object-cover opacity-50 blur-sm      w-full h-full"
            src="https://i.ibb.co/30X8yBt/dan-gold-N7-Ri-Dzf-F2iw-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative max-w-lg px-8 md:px-4 mx-auto ">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create an account
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already joined?{" "}
                  <Link to={"/login"}>
                    <span className="text-FusionRed transition-all duration-200 hover:underline hover:text-red-700">
                      Sing in now
                    </span>
                  </Link>
                </p>
              </div>

              <form onSubmit={handleRegister} className="mt-8 ">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Enter your full name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Photo{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="Photo"
                        id=""
                        placeholder="Enter your photo URL"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                  </div>
                  {regError && (
                    <p className="text-red-600 font-semibold">{regError}</p>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-FusionRed border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>

              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
