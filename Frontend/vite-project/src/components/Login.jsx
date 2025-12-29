// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios"
// import toast from "react-hot-toast"

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async(data) => {
//     console.log("Login Data:", data);
//     const userInfo={
//       email: data.email,
//       password: data.password
//     };
//     await axios.post("http://localhost:4001/user/login", userInfo)
//     .then((res) => {
//       console.log(res.data.user)
//       if(res.data){
//         toast.success("Login Successfull")
//       }
//       localStorage.setItem("Users", JSON.stringify(res.data.user))
//     }).catch((err) => {
//       if(err.response){
//         toast.error("Error: "+ err.response.data.message)
//         console.log(err.message);
//       }
//     });
//   };

//   return (
//     <div className="container flex items-center justify-center">
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box relative dark:bg-slate-900 dark:text-white border-2">
          
//           {/* ❌ Remove method="dialog" */}
//           {/* ❗ Inputs MUST be inside the form */}
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
//             {/* Close Button */}
//             <Link to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_modal_3").close()}
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg text-center mb-4">Login</h3>
//             <hr className="border-solid border-white border-2" />
//             {/* Email */}
//             <label className="block mt-4">Email</label>
//             <input
//               className="w-full px-3 py-2 border rounded-md outline-none dark:text-white mt-2"
//               type="email"
//               placeholder="Enter your mail"
//               {...register("email", { required: true })}
//             />
//             {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

//             {/* Password */}
//             <label className="block mt-2">Password</label>
//             <input
//               className="w-full px-3 py-2 border rounded-md outline-none mt-2"
//               type="password"
//               placeholder="Enter your password"
//               {...register("password", { required: true })}
//             />
//             {errors.password && (
//               <span className="text-red-500 text-sm">Password is required</span>
//             )}

//             {/* Submit button */}
//             <button
//               type="submit"
//               className="bg-pink-400 w-full mt-4 px-3 py-2 rounded-md hover:bg-amber-400"
//             >
//               Sign In
//             </button>

//             <p className="text-gray-400 text-sm mt-3 text-center">
//               Don’t have an account?
//               <Link
//                 to="/signup"
//                 className="text-blue-500 underline ml-1"
//                 onClick={() => document.getElementById("signup_modal").showModal()}
//               >
//                 Signup
//               </Link>
//             </p>

//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );

      toast.success("Login Successful!");
      document.getElementById("my_modal_3").close()

      setTimeout(() => {
        window.location.reload();
        // Store user in localStorage
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }, 1000)


      // close modal
      document.getElementById("my_modal_3").close();
    } catch (err) {
      toast.error("Error: " + err.response?.data?.message);
      console.log(err.message);
      setTimeout(() => {}, 3000);
    }
  };

  return (
    <div className="container flex items-center justify-center">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative dark:bg-slate-800 dark:text-white shadow-2xl">

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-center mb-4">Login</h3>

            {/* Email */}
            <label className="block mt-4">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md outline-none dark:text-white dark:bg-gray-700 dark:border-gray-700 mt-2"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            {/* Password */}
            <label className="block mt-2">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700 dark:border-gray-700 mt-2"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="bg-pink-500 w-full mt-4 px-3 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Sign In
            </button>

            <p className="text-gray-400 text-sm mt-3 text-center">
              Don’t have an account?
              <Link
                to="/signup"
                className="text-blue-500 underline ml-1"
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

