import Home from "./home/Home.jsx";
import Courses from "./course/Courses.jsx";
import Signup from "./components/Signup.jsx"
import {Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element = {<Courses/>}/>
          <Route path="/signup" element = {<Signup/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
