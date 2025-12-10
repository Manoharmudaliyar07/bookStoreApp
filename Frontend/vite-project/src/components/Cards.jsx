import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-5 my-4 p-3">
        <div className="card bg-base-100 sm:w-90 md:w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer badge badge-outline hover:bg-pink-400 hover:text-white px-4 py-4 rounded-full">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cards;
