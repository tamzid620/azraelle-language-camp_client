import { useForm } from 'react-hook-form';
import './Login.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const Login = () => {


    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const onSubmit = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div>
            <form className="login-form mx-auto my-20" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-bold text-2xl">Please Login</h2>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: true })}
                        />
                        <i className="fa fa-eye"></i>
                    </div>
                </div>

                <div className="form-group bg-blue-300">
                    <input type="submit" value="Login" />
                </div>

                <div className="form-group">
                    <p>Don't have an account?</p>
                    <Link to="/register"><a>Register</a></Link>
                </div>

                <div>
                    <hr />
                </div>
            </form>
        </div>
    );
};

export default Login;
