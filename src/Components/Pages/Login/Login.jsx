import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../../hooks/useTitle";
import loginBg from '../../../assets/images/login-bg.jpg'

const Login = () => {
  useTitle("Login");

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const form = location.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;

    //  Email Password  Login ----------------------------------
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(form, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Failed!",
          footer: "Please Login Again",
        });
      });
  };

  //  Google Login ----------------------------------
  const googleLogin = () => {
    googleSignIn(GoogleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login SuccessFully with Google ",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration Failed!",
          footer: "Please Registration Again",
        });
      });
  };

  return (
    <div >
        <div className="relative">
            <img className="relative w-full h-screen" src={loginBg} alt="" />
        </div>
      <form
      style={{fontFamily: "Nunito Sans, serif"}}
        className="absolute top-0 inset-0 md:w-[400px] sm: w-full h-[430px] p-[20px] bg-white drop-shadow-lg shadow-black rounded-sm border-t-2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-extrabold text-xl uppercase text-center">Please Login</h2>
        {/* Email input  */}
        <div className="text-sm">
          <label className="font-bold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
        </div>
        {/* password input  */}
        <div className="text-sm">
          <label className="font-bold" htmlFor="password">Password</label>
          <div >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
            />
            <span
              className="text-xs bg-blue-500 text-white hover:bg-slate-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </span>
          </div>
        </div>
        {/* submit input  */}
        <div>
          <button className="mt-2 uppercase font-bold text-lg w-full text-center py-2  bg-[#004C7F] text-white hover:bg-[#C5F5FF] hover:text-black  hover:shadow-xl mb-4 rounded-sm" value="Login" type="submit">Login</button>
        </div>
        {/* go to register page option  */}
        <div className="flex gap-1">
          <p>Don't have an account?</p>
          <Link to="/register">
            <a className="underline text-blue-500 hover:text-blue-300">Register</a>
          </Link>
        </div>
        {/* google login option  */}
        <div className="flex justify-center mt-3 border-t-2 pt-2">
          <button onClick={() => googleLogin()}>
            <FcGoogle className="w-[40px] h-[40px]"></FcGoogle>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
