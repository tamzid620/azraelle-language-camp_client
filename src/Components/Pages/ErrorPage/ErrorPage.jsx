import errorphoto from "../../../assets/icons/404.gif"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
        <div className='flex justify-center items-center'>
            <img src={errorphoto} alt="" />
        </div>
        <div className='flex justify-center mt-2'>
            <Link to="/"><button className='btn bg-blue-600'>Back To Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;