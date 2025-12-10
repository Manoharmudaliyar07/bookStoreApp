import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="container flex items-center justify-center">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative dark:bg-slate-900 dark:text-white border-2">
          
          {/* ❌ Remove method="dialog" */}
          {/* ❗ Inputs MUST be inside the form */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            {/* Close Button */}
            <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center mb-4">Login</h3>
            <hr className="border-solid border-white border-2" />
            {/* Email */}
            <label className="block mt-4">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md outline-none dark:text-white mt-2"
              type="email"
              placeholder="Enter your mail"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

            {/* Password */}
            <label className="block mt-2">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-md outline-none mt-2"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="bg-pink-400 w-full mt-4 px-3 py-2 rounded-md hover:bg-amber-400"
            >
              Sign In
            </button>

            <p className="text-gray-400 text-sm mt-3 text-center">
              Don’t have an account?
              <Link
                to="/signup"
                className="text-blue-500 underline ml-1"
                onClick={() => document.getElementById("signup_modal").showModal()}
              >
                Signup
              </Link>
            </p>

          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
