import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

const img_token = import.meta.env.VITE_IMGBB_TOKEN;

const AddAClass = () => {


    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`
    const [status, setStatus] = useState("");

    const onSubmit = (data) => {
        const file = data.class_image[0]
        setStatus("pending");

        const formData = new FormData();
        formData.append("image", file);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log('imgResponse', imgResponse)

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
// const { class_name, available_seats, class_price } = data;
// const newclass = { class_name, class_price: parseFloat(class_price), available_seats, class_image: imgURL ,instructor_name: user.displayName,instructor_email: user.email };
const { class_name, available_seats, class_price, instructor_name: displayName, instructor_email: email } = data;
const newclass = { class_name, class_price: parseFloat(class_price), available_seats, class_image: imgURL, instructor_name: displayName, instructor_email: email };

                    
                    console.log(newclass);
                    axiosSecure.post('/addaclass', newclass)
                        .then(data => {
                            console.log('class added successfully', data.data)
                            if (data.data.insertedId) {
                                reset();
                                setStatus("success");
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            }
            );
    };
    return (
        <div className="w-full mx-10 border rounded-lg p-10 me-5">
            <h3 className="text-lg font-bold mb-4">Add A Class</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex ">
                    <div className="mb-3">
                        <label htmlFor="className">Class Name</label>
                        <input className="input input-bordered input-info w-full max-w-xs"
                            id="className" {...register('class_name')} />
                    </div>

                    <div className="mb-3 ms-5">
                        <label htmlFor="classImage">Class Image</label>
                        <input className="file-input file-input-bordered file-input-info w-full max-w-xs"
                            id="classImage" type="file" {...register('class_image')} />
                    </div>
                </div>

                <div className="flex">
                    <div className="mb-3">
                        <label htmlFor="instructorName">Instructor Name</label>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            id="instructorName"
                            type="text"
                            value={user.displayName}
                            readOnly
                            {...register('instructor_name')}
                        />
                    </div>

                    <div className="mb-3 ms-5">
                        <label htmlFor="instructorEmail">Instructor Email</label>
                        <input
                            className="input input-bordered input-info w-full max-w-xs"
                            id="instructorEmail"
                            type="email"
                            value={user.email}
                            readOnly
                            {...register('instructor_email')}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="availableSeats">Available Seats</label>
                    <input
                        className="input input-bordered input-info w-full max-w-xs"
                        id="availableSeats"
                        type="number"
                        {...register('available_seats')}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price">Price</label>
                    <input className="input input-bordered input-info w-full max-w-xs"
                        id="price" type="number" step="0.01" {...register('class_price')} />
                </div>

                <div className="mb-3">
                    <label htmlFor="status">Status</label>
                    {status === "pending" && <p>Pending...</p>}
                    {status === "success" && <p>Success!</p>}
                </div>

                <button className="btn bg-blue-300" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddAClass;
