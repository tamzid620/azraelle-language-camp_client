import { Link } from "react-router-dom";

const Navbar = () => {

    const header =
        <>
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/instructors"><li><a>Instructors</a></li></Link>
            <Link to="/classes"><li><a>Classes</a></li></Link>
            <Link to="/dashboard"><li><a>Dashboard</a></li></Link>
        </>

    return (
        <div>
            <div className="navbar  bg-base-100 fixed z-10 bg-opacity-80 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {header}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-blue-700">Azraelle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {header}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;