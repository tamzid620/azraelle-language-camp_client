import { useForm } from 'react-hook-form';
import './Login.css';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        const { email, password } = data;

        //  Email Password  Login ----------------------------------
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                Swal.fire({
                    icon: 'success',
                    title: 'Login SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login Failed!',
                    footer: 'Please Login Again'
                })
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
                    icon: 'success',
                    title: 'Login SuccessFully with Google ',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Registration Failed!',
                    footer: 'Please Registration Again'
                })
            });
    };

    return (
        <div>
            <form className="login-form mx-auto my-20" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-bold text-2xl">Please Login</h2>
                {/* Email input  */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                    />
                </div>
                {/* password input  */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            {...register('password', { required: true })}
                        />
                        <i className="fa fa-eye" onClick={() => setShowPassword(!showPassword)}>Show Password</i>
                    </div>
                </div>
                {/* submit input  */}
                <div className="form-group bg-blue-300">
                    <input type="submit" value="Login" />
                </div>
                {/* go to register page option  */}
                <div className="form-group">
                    <p>Don't have an account?</p>
                    <Link to="/register"><a>Register</a></Link>
                </div>
                {/* google login option  */}
                <hr />
                <div className='flex justify-center mt-3'>
                    <button onClick={() => googleLogin()}><FcGoogle className='w-[50px] h-[50px]'></FcGoogle></button>
                </div>
            </form>
        </div>
    );
};

export default Login;
