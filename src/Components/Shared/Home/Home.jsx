import Aos from "aos";
import 'aos/dist/aos.css'
import Accordion from "./Accordion";
import Banner from "./Banner";
import Info from "./Info";
import PopularClasses from "./popularClasses/popularClasses";
import PopularInstructor from "./popularInstructor/popularInstructor";
import useTitle from "../../../hooks/useTitle";


const Home = () => {
    useTitle('Home')
    Aos.init();

    
    return (
        <div>
            {/* Banner Section ----------------------- */}
            <div data-aos="fade-right">
                <Banner ></Banner>
            </div>

            {/* Info section ----------------------- */}
            <div data-aos="fade-left">
                <Info ></Info>
            </div>


            {/*Popular Classes Section ----------------------- */}
            <div data-aos="fade-down">
                <PopularClasses></PopularClasses>
            </div>

            {/* Popular Instructors section ----------------------- */}
            <div data-aos="fade-down">
                <PopularInstructor></PopularInstructor>
            </div>

            {/* Accordion   section ----------------------- */}
            <Accordion></Accordion>

        </div>
    );
};

export default Home;