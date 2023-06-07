import Aos from "aos";
import 'aos/dist/aos.css'
import Accordion from "./Accordion";
import Banner from "./Banner";
import Info from "./Info";


const Home = () => {
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


            {/* Popular Instructors section ----------------------- */}


            {/* Accordion   section ----------------------- */}
            <Accordion></Accordion>

        </div>
    );
};

export default Home;