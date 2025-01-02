import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../../firebase/firebase.config";
import "./Navbar.css";
import navimg from "../../../../src/assets/icons/Azraelle-logo-bgless.png";
const auth = getAuth();

const Navigation = () => {
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
          icon: "success",
          title: "signOut SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {});
  };

  return (
    <nav
      style={{ fontFamily: "Nunito Sans, serif" }}
      className="bg-blue-200 fixed top-0 py-1 z-10 w-full shadow-sm shadow-gray-900 
    xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto"
    >
      {/* nav for large device  */}
      <div className="lg:flex justify-between md:hidden sm: hidden">
        <div>
          <img className="w-[85px]" src={navimg} alt="" />
        </div>
        <div className="flex gap-44">
        {/* ul li section  */}
        <div className=" flex items-center">
          <ul className="flex justify-between gap-10 uppercase font-bold text-sm">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/instructors">
              <li>Instructors</li>
            </Link>
            <Link to="/classes">
              <li>Classes</li>
            </Link>
            <Link to="/dashboard/myselectedclass">
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
        {/* dark light login logout button  */}
        <div className="grid md:grid-cols-2 sm: grid-cols-1 items-center gap-5 ">
          <div>
            <button
              onClick={() => setDarkTheme(!darkTheme)}
              className="navButton uppercase font-bold px-2 py-1 rounded-sm"
            >
              {darkTheme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <div className="flex ">
            {user ? (
              <>
                <div className="w-10 rounded-full">
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt="User"
                  />
                </div>
                <button
                  onClick={logOut}
                  className="navButton uppercase font-bold px-2 py-1 rounded-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="navButton uppercase font-bold px-2 py-1 rounded-sm">
                  LogIn
                </button>
              </Link>
            )}
          </div>
        </div>
        </div>
      </div>
      {/* nav for small device  */}
      <div className="lg:hidden md:flex justify-between sm: flex">
      <div>
          <img className="w-[85px]" src={navimg} alt="" />
        </div>
        {/* ul li section  */}
        <div className=" flex justify-center items-center leading-10 text-center">
          <ul className=" uppercase font-bold text-sm">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/instructors">
              <li>Instructors</li>
            </Link>
            <Link to="/classes">
              <li>Classes</li>
            </Link>
            <Link to="/dashboard/myselectedclass">
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
