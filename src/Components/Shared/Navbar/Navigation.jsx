import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../../firebase/firebase.config";
import "./Navbar.css";
import navimg from "../../../../src/assets/icons/Azraelle-logo-bgless.png";
import menuImg from "../../../../src/assets/icons/menu.png";
const auth = getAuth(app);

const Navigation = () => {
  const [user, setUser] = useState({});
  const [darkTheme, setDarkTheme] = useState(false);
  const lightThemeClass = "light-theme";
  const darkThemeClass = "dark-theme";
  const [menuOpen, setMenuOpen] = useState(false);


  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

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
  }, []);

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
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav
        style={{ fontFamily: "Nunito Sans, serif" }}
        className="bg-[#004C7F] shadow-gray-900 py-1 w-full"
      >
        <div className=" xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto">
          {/* nav for large device  */}
          <div className="flex justify-between items-center px-4">
            <div>
              <img className="w-[85px]" src={navimg} alt="" />
            </div>
{/* 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            <div className="lg:flex md:hidden sm: hidden lg:gap-52 ">
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
              <div className="flex justify-center items-center gap-5 ">
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
{/* 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            <div className="lg:hidden md:block sm: block">
            <div onClick={handleMenuOpen}>
              <img
                className="w-[25px] drop-shadow-xl relative"
                src={menuImg}
                alt=""
              />
            </div>
            {menuOpen ? (
              <div className=" absolute top-[60px] left-0 flex justify-center items-center text-center bg-blue-600 w-full py-1 border-t-2 border-gray-500">
                <ul className=" uppercase font-bold text-sm leading-[60px]">
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
                  {/* dark light login logout button  */}
                  <div>
                    <button
                      onClick={() => setDarkTheme(!darkTheme)}
                      className=" text-white underline uppercase font-bold px-2 py-1 rounded-sm"
                    >
                      {darkTheme ? "Light Mode" : "Dark Mode"}
                    </button>
                  </div>
                  <div>
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
                          className="text-white underline uppercase font-bold px-2 py-1 rounded-sm"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link to="/login">
                        <button className="text-white underline uppercase font-bold px-2 py-1 rounded-sm">
                          LogIn
                        </button>
                      </Link>
                    )}
                  </div>
                </ul>
              </div>
            ) : (
              <></>
            )}
            </div>
          </div>
    </div>
      </nav>
  );
};

export default Navigation;
