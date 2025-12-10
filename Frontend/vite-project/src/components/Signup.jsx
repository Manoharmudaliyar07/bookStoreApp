// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import Login from "./Login"

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Signup Data:", data);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white-100  relative">
//       {/* Signup Card */}
//       <div className="bg-white w-full max-w-md shadow-2xl rounded-xl p-8 relative text-black">

//         {/* Close Button */}
//         <button
//           type="button"
//           className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
//           onClick={() => window.history.back()}
//         >
//           ✕
//         </button>

//         <h3 className="font-bold text-lg text-center mb-6">Signup</h3>

//         <form onSubmit={handleSubmit(onSubmit)}>

//           {/* NAME */}
//           <label className="block font-medium">Full Name</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1"
//             type="text"
//             placeholder="Enter your name"
//             {...register("name", { required: true })}
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
//           )}

//           {/* EMAIL */}
//           <label className="block font-medium mt-4">Email</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1"
//             type="email"
//             placeholder="Enter your email"
//             {...register("email", { required: true })}
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
//           )}

//           {/* PASSWORD */}
//           <label className="block font-medium mt-4">Password</label>
//           <input
//             className="w-full px-3 py-2 border rounded-md outline-none mt-1"
//             type="password"
//             placeholder="Enter your password"
//             {...register("password", { required: true })}
//           />
//           {errors.password && (
//             <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
//           )}

//           {/* Button */}
//           <button
//             type="submit"
//             className="bg-pink-500 w-full mt-6 py-2 text-white rounded-md font-semibold hover:bg-pink-600 transition"
//           >
//             Sign Up
//           </button>

//           {/* Redirect */}
//           <p className="text-center mt-4 text-gray-600">
//             Already have an Account?
//             <button  className="text-blue-500 underline ml-1 hover:cursor-pointer"
//             onClick={() => document.getElementById("my_modal_3").showModal()}
//             >
//               Sign In
//             </button>
//             <Login/>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React from "react";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      
      {/* Signup Card */}
      <div className="bg-white dark:bg-gray-900 w-full max-w-md shadow-2xl rounded-xl p-8 relative dark:text-white border-2">

        {/* Close Button */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          onClick={() => window.history.back()}
        >
          ✕
        </button>

        <h3 className="font-bold text-lg text-center mb-6">Signup</h3>
        <hr className="border-solid border-white border-2" />
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* NAME */}
          <label className="block font-medium mt-4">Full Name</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Full Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}

          {/* EMAIL */}
          <label className="block font-medium mt-4">Email</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          {/* PASSWORD */}
          <label className="block font-medium mt-4">Password</label>
          <input
            className="w-full px-3 py-2 border rounded-md outline-none mt-1 dark:bg-gray-800 dark:border-gray-700"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-pink-500 w-full mt-6 py-2 text-white rounded-md font-semibold hover:bg-pink-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect Section (NO <p> WRAPPING MODAL) */}
        <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an Account?
          <button
            type="button"
            className="text-blue-500 underline ml-1 hover:cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Sign In
          </button>
        </div>

        {/* Modal OUTSIDE <p>, OUTSIDE form → NO hydration errors */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
