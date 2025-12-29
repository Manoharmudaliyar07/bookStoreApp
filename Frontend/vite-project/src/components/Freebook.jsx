import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";
import axios from "axios";
import {useState, useEffect} from "react";

const Freebook = () => {
  const [book, setBook] = useState([])
    useEffect(() => {
      const getBook = async() => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          const data = res.data.filter((data) => data.category === "Free")
          // console.log(data)
          setBook(data)
        } catch (error) {
          console.log(error)
        }
      };
      getBook()
    }, [])
  var settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl contianer mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Ordered Courses</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            laborum ducimus ipsum iusto ad, assumenda voluptatem. Tempore nihil
            voluptate debitis sint id mollitia.
          </p>
        </div>
        <div>
          <div className="slider-container m-8">
            <Slider {...settings}>
              {book.map((item, index) => (
                <div key={index} className="h-full flex px-2 m-2">
                  <Cards item={item}/>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freebook;
