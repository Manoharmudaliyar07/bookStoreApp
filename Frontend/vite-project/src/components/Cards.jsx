const Cards = ({ item }) => {
  return (
    <div className="group h-full flex flex-col rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Fixed height image container */}
      <div className="h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content and footer */}
      <div className="flex flex-col flex-1 p-4">
        <div>
          <h3 className="text-lg font-semibold dark:text-black">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.title}</p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-bold text-gray-800">${item.price}</span>
          <button className="rounded-full border px-4 py-1 text-sm hover:bg-black hover:text-white transition dark:text-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;