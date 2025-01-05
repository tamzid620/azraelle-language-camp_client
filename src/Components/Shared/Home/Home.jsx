import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "./Accordion/Accordion";
import Banner from "./Banner/Banner";
import Info from "./info/Info";
import PopularClasses from "./popularClasses/popularClasses";
import PopularInstructor from "./popularInstructor/popularInstructor";
import useTitle from "../../../hooks/useTitle";
import { useEffect } from "react";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    
    <main className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto'>
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
    </main >
  );
};

export default Home;
