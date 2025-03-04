import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navigation from "../Navbar/Navigation";

const Layout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className="">
            {/* {noHeaderFooter || <Navbar/>} */}
            {noHeaderFooter || <Navigation/>}
            <Outlet />
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Layout;