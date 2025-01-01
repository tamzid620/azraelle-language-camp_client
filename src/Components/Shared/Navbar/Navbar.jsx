import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../../firebase/firebase.config";
import './Navbar.css'
import navimg from '../../../../src/assets/icons/Azraelle-logo-bgless.png'

const auth = getAuth();

const Navbar = () => {

    const [user, setUser] = useState({});
    const [darkTheme, setDarkTheme] = useState(false);
    const lightThemeClass = "light-theme";
    const darkThemeClass = "dark-theme";

    useEffect(() => {
        const body = document.body;
        if (darkTheme) {
            body.classList.add(darkThemeClass);
            body.classList.remove(lightThemeClass);
        } else {
            body.classList.add(lightThemeClass);
            body.classList.remove(darkThemeClass);
        }
    }, [darkTheme]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, [app]);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'signOut SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
            });
    };

    const header =
        <>
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/instructors"><li><a>Instructors</a></li></Link>
            <Link to="/classes"><li><a>Classes</a></li></Link>
            <Link to="/dashboard/myselectedclass"><li><a>Dashboard</a></li></Link>
        </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-blue-300 opacity-80 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {header}
                        </ul>
                    </div>
                        <img className="w-[85px]" src={navimg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {header}
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                    <div>
                        <button onClick={() => setDarkTheme(!darkTheme)} className="me-3 btn btn-xs">
                            {darkTheme ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                    <div className="flex">
                    {user ? (
                        <>
                            <div className="w-10 rounded-full">
                                <img className="w-10 rounded-full" src={user.photoURL} alt="User" />
                            </div>
                            <button onClick={logOut} className="btn btn-xs bg-blue-600 text-white">
                                Log out
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn bg-blue-600 btn-xs text-white">Log In</button>
                        </Link>
                    )}
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;