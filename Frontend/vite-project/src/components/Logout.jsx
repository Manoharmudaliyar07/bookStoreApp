// import React from "react";
// import toast from "react-hot-toast";
// import { useAuth } from "../context/AuthProvider";

// const Logout = () => {
//   const [authUser, setAuthUser] = useAuth();
// //   console.log(authUser);
//   const handleLogout = () => {
//     try {
//         setAuthUser({
//             ...authUser,
//             user: null
//         })
//         localStorage.removeItem("Users");
//         toast.success("Logout Successfully Done")
        
//         setTimeout(() => {
//             window.location.reload();
//       }, 3000);
//     } catch (error) {
//         toast.error("Error : " + error)
//         setTimeout(() => {}, 3000);
//     }
//   }
//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;


// if used login route
// import React from "react";
// import toast from "react-hot-toast";
// import { useAuth } from "../context/AuthProvider";
// import { useNavigate } from "react-router-dom";  // if using react-router

// const Logout = () => {
//   const [authUser, setAuthUser] = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     try {
//       setAuthUser({
//         ...authUser,
//         user: null,
//       });
//       localStorage.removeItem("Users");
//       toast.success("Logout Successfully Done");

//       setTimeout(() => {
//         navigate("/login"); // redirect to login or home
//       }, 2000);
//     } catch (error) {
//       toast.error("Error: " + (error.message || error));
//     }
//   };

//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;


import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully Done");

      // Reload to reset app state and show login modal again
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + (error.message || error));
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
