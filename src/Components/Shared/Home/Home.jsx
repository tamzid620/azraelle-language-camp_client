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
    
    <div className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto'>
      {/* Banner Section ----------------------- */}
      <Banner />
      {/* Info section ----------------------- */}
      <Info />
      {/*Popular Classes Section ----------------------- */}
      <PopularClasses />
      {/* Popular Instructors section ----------------------- */}
      <PopularInstructor />
      {/* Accordion   section ----------------------- */}
      <Accordion />
    </div >
  );
};

export default Home;
