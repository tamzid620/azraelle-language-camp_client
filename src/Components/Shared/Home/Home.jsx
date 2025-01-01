import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "./Accordion";
import Banner from "./Banner";
import Info from "./Info";
import PopularClasses from "./popularClasses/popularClasses";
import PopularInstructor from "./popularInstructor/popularInstructor";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  Aos.init();

  return (
    <React.Fragment>
      {/* Banner Section ----------------------- */}
      <div data-aos="fade-right">
        <Banner />
      </div>

      {/* Info section ----------------------- */}
      <div data-aos="fade-left">
        <Info />
      </div>

      {/*Popular Classes Section ----------------------- */}
      <div data-aos="fade-down">
        <PopularClasses />
      </div>

      {/* Popular Instructors section ----------------------- */}
      <div data-aos="fade-down">
        <PopularInstructor />
      </div>

      {/* Accordion   section ----------------------- */}
      <Accordion />
    </React.Fragment>
  );
};

export default Home;
