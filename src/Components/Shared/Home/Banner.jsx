import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bannerimg1 from '../../../../src/assets/banner1.jpg'
import bannerimg2 from '../../../../src/assets/banner2.jpg'
import bannerimg3 from '../../../../src/assets/banner3.jpg'
import bannerimg4 from '../../../../src/assets/banner4.jpg'

const Banner = () => {
    return (
        <AwesomeSlider className='w-full my-20'>
            <div data-src={bannerimg1} />
            <div data-src={bannerimg2} />
            <div data-src={bannerimg3} />
            <div data-src={bannerimg4} />
        </AwesomeSlider>
    );
};

export default Banner;