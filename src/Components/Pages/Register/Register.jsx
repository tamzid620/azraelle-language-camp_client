import { useForm } from "react-hook-form";
import './Register.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch, } = useForm();

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
                        Swal.fire({
                            icon: 'success',
                            title: 'Account Registered Successfully',
                            showConfirmButton: false,
                            timer: 1500
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
                    icon: 'error',
                    title: 'Oops...',
                    text: 'SignUp Failed!',
                    footer: 'Please SignUp Again'
                });
            });
    } else {
        return;
    }
};

    return (
        <div>
            <form className="register-form mx-auto my-20"
                onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                    {errors.name && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password', { required: true })} />
                    {errors.password && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register('confirmPassword', {
                            required: true,
                            validate: (value) => value === watch('password'),
                        })}
                    />
                    {errors.confirmPassword?.type === 'required' && (
                        <span className="error">This field is required</span>
                    )}
                    {errors.confirmPassword?.type === 'validate' && (
                        <span className="error">Passwords do not match</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="photoUrl">Photo URL</label>
                    <input type="text" id="photoUrl" {...register('photoUrl', { required: true })} />
                    {errors.photoUrl && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" {...register('gender', { required: true })}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" {...register('address', { required: true })} />
                    {errors.address && <span className="error">This field is required</span>}
                </div>

                <div className="form-group bg-blue-300 py-2 rounded-lg flex justify-center text-white font-bold">
                    <button type="submit x">Register</button>
                </div>
                <div className="text-sm mt-3">
                    <Link
                        to="/login"
                        className="font-medium text-gray-900 hover:text-gray-700"
                    > Already Have  an account?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;