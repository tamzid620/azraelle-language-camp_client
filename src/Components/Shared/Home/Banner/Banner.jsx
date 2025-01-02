import "./Banner.css";
import "react-awesome-slider/dist/styles.css";
import bannerImg1 from "../../../../../src/assets/images/Banner.jpeg";

const Banner = () => {
  return (
    <div>
      <img className="hadow-gray-500 shadow-lg" src={bannerImg1} alt="" />
    </div>
  );
};

export default Banner;
