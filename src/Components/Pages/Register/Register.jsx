import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useTitle from "../../../hooks/useTitle";
import loginBg from "../../../assets/images/login-bg.jpg";

const auth = getAuth();

const Register = () => {
  useTitle("Register");

  const { googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [axiosSecure] = useAxiosSecure();

  // Email and Password SignUp ----------------------------------
  const onSubmit = (data) => {
    const { email, password, name, photoUrl } = data;
    console.log(data);

    if (email && password) {
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, userCredential);

          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
          })
            .then(() => {
              const allUser = { name: data.name, email: data.email };
              axiosSecure
                .post("/users", allUser)
                .then((response) => {
                  const data = response.data;
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      icon: "success",
                      title: "Account Registered Successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error.message);
                });
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "SignUp Failed!",
            footer: "Please SignUp Again",
          });
        });
    } else {
      return;
    }
  };

  // Google SignUp ----------------------------------
  const googleLogin = () => {
    googleSignIn(GoogleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
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
          text: "Login Failed!",
          footer: "Please Login Again",
        });
      });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <img
        className="absolute w-full h-full object-cover"
        src={loginBg}
        alt=""
      />
      <form
        style={{ fontFamily: "Nunito Sans, serif" }}
        className="relative md:w-[500px] w-full h-[700px] p-[20px] bg-white drop-shadow-lg shadow-black rounded-md border-t-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {/* Name field  */}
          <div className="form-group">
            <label className="text-black font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
          </div>

          {/* email field  */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {/* password field  */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*\d)(?!.*\s).*$/,
              })}
            />
            {errors.password && (
              <span className="error">
                This field is required or Password must be at least 6 characters
                long and a capital letter and a special character
              </span>
            )}
          </div>

          {/* confirm password filed  */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword?.type === "required" && (
              <span className="error">This field is required</span>
            )}
            {errors.confirmPassword?.type === "validate" && (
              <span className="error">Passwords do not match</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {/* photoURL field  */}
          <div className="form-group">
            <label htmlFor="photoUrl">Photo URL</label>
            <input
              type="text"
              id="photoUrl"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <span className="error">This field is required</span>
            )}
          </div>

          {/* gender field  */}
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" {...register("gender", { required: true })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {/* phone Number filed  */}
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="error">This field is required</span>
            )}
          </div>

          {/* address field  */}
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" {...register("address", { required: true })} />
            {errors.address && (
              <span className="error">This field is required</span>
            )}
          </div>
        </div>

        {/* submit button fied  */}
        <div>
          <button
            type="submit"
            className="mt-2 uppercase font-bold text-lg w-full text-center py-2  bg-[#004C7F] text-white hover:bg-[#C5F5FF] hover:text-black  hover:shadow-xl mb-4 rounded-sm"
          >
            Register
          </button>
        </div>
        {/* home button   */}
        <div className="flex justify-between items-center text-black">
          <Link
            to="/login"
            className="font-medium text-blue-500 underline hover:text-gray-500"
          >
            {" "}
            Already Have an account?
          </Link>
          <div>
            <button className="text-sm bg-[#004C7F] text-white hover:bg-[#C5F5FF] hover:text-black hover:shadow-xl px-3 py-2 rounded-sm">
              <Link to="/">Back To Home</Link>
            </button>
          </div>
        </div>

        {/* google login option  */}
        <div className="flex justify-center mt-3 border-t-2 pt-2">
          <button onClick={() => googleLogin()}>
            <FcGoogle className="w-[50px] h-[50px]"></FcGoogle>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
