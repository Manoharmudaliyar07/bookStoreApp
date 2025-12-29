import React from "react";
import banner from "./banner1.png"

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl contianer mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
        <div className="w-full max:w-1/2 mt:20 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur.
              <span className="text-pink-500"> Eveniet quidem </span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              sapiente enim earum quia illo. Voluptate dolorum aliquam, corporis
              nihil qui nisi vitae nam.
            </p>
            <label className="input flex validator w-full mt-2 dark:bg-slate-900 dark:text-white dark:border-white outline-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input className="outline-none" type="email" placeholder="mail@site.com" required />
          </label>
          </div>
          <button
          onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
          className="btn btn-soft btn-secondary mt-4">Get Started</button>
        </div>
        <div className="w-full max:w-1/2 flex order-1">
            <img src={banner} className="w-102 h-102 m-auto hover:scale-85 transition-all" alt="books_banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
