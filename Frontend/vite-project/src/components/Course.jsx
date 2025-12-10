import list from "../list.json";
import Cards from "../components/Cards.jsx";
import {Link} from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl contianer mx-auto md:px-20 px-4">
        <div className="mt-28 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're are delighted to have you{" "}
            <span className="text-pink-400">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quidem, ea est, dicta illum neque debitis deserunt voluptas
            laboriosam beatae natus distinctio ullam harum earum saepe officiis
            quae dolor voluptatibus at quo omnis assumenda dolore eaque autem.
            Debitis quo, sequi aperiam at eius culpa sint nam dolorum quia.
          </p>
          <Link to="/">
            <button className="btn btn-soft btn-secondary mt-4">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((item) => (
            <Cards item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
