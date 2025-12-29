// import React from "react";
// import { useForm } from "react-hook-form";
// import Login from "./Login";
// import axios from "axios"
// import toast from "react-hot-toast"
// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data)
//     const userInfo={
//       fullname:data.fullname,
//       email: data.email,
//       password: data.password
//     };
//     await axios.post("http://localhost:4001/user/signup", userInfo)
//     .then((res) => {
//       console.log(res.data)
//       if(res.data){
//         toast.success("Signup Successfull!")
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
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      
//       {/* Signup Card */}
//       <div className="bg-white dark:bg-gray-900 w-full max-w-md shadow-2xl rounded-xl p-8 relative dark:text-white border-2">

//         {/* Close Button */}
//         <button
//           type="button"
//           className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
//           onClick={() => window.history.back()}
//         >
//           ✕
//         </button>

//         <h3 className="font-bold text-lg text-center mb-6">Signup</h3>
//         <hr className="border-solid border-white border-2" />
//         <form onSubmit={handleSubmit(onSubmit)}>

//           {/* NAME */}
//           <label className="block font-medium mt-4">Full Name</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
//             type="text"
//             placeholder="Enter your fullname"
//             {...register("fullname", { required: "Enter fullname" })}
//           />
//           {errors.fullname && (
//             <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
//           )}

//           {/* EMAIL */}
//           <label className="block font-medium mt-4">Email</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
//             type="email"
//             placeholder="Enter your email"
//             {...register("email", { required: "Enter your email" })}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//           )}

//           {/* PASSWORD */}
//           <label className="block font-medium mt-4">Password</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
//             type="password"
//             placeholder="Enter your password"
//             {...register("password", { required: "Enter your password" })}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//           )}

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             className="bg-pink-500 w-full mt-6 py-2 text-white rounded-md font-semibold hover:bg-pink-600 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Redirect Section (NO <p> WRAPPING MODAL) */}
//         <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
//           Already have an Account?
//           <button
//             type="button"
//             className="text-blue-500 underline ml-1 hover:cursor-pointer"
//             onClick={() => document.getElementById("my_modal_3").showModal()}
//           >
//             Sign In
//           </button>
//         </div>

//         {/* Modal OUTSIDE <p>, OUTSIDE form → NO hydration errors */}
//         <Login />
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );

      toast.success("Signup Successful!");

      // store user
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      
    } catch (err) {
      toast.error("Error: " + err.response?.data?.message);
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md shadow-2xl rounded-xl p-8 relative dark:text-white">

        {/* Close button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          onClick={() => window.history.back()}
        >
          ✕
        </button>

        <h3 className="font-bold text-lg text-center mb-6">Signup</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Full Name */}
          <label className="block font-medium mt-4">Full Name</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-700 dark:border-gray-700"
            type="text"
            placeholder="Enter your fullname"
            {...register("fullname", { required: "Enter fullname" })}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
          )}

          {/* Email */}
          <label className="block font-medium mt-4">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-700 dark:border-gray-700"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Enter email" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="block font-medium mt-4">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-700 dark:border-gray-700"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Enter password" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-pink-500 w-full mt-6 py-2 rounded-md text-white hover:bg-pink-600"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?
          <button
            type="button"
            className="text-blue-500 underline ml-1"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Sign In
          </button>
        </div>

        <Login />
      </div>
    </div>
  );
}

export default Signup;
