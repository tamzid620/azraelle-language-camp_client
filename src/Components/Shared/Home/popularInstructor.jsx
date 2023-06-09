
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useState } from "react";
import { useEffect } from "react";

const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const [instructors, setInstructors] = useState([]);



    useEffect(() => {
        axiosSecure
            .get('/popularinstructor')
            .then((res) => setInstructors(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    return (
        <div className="my-20">
            <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase">Popular Instructor</h1>
            <div className="bg-blue-100 p-5 rounded-e-xl mt-10 grid sm:grid-cols-1  lg:grid-cols-3">
                {instructors.map((instructorItem) => (
                    <div className=" p-2" key={instructorItem?.id}>
                        {/* <img className="rounded-xl" style={{width:"500px" , height:"400px"}} src={instructorItem?.instructor_image} alt=""/> 
                        */}
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img style={{width:"500px" , height:"400px"}} src={instructorItem?.instructor_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {instructorItem?.instructor_name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p> <span className="font-bold">Subject Instructor:</span> {instructorItem?.class_name}</p>
                                <p> <span className="font-bold">Email :</span> {instructorItem?.instructor_email}</p>
                                <p> <span className="font-bold">Ttotal Students :</span> {instructorItem?.total_students}</p>
                                </div>
                            </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PopularInstructor;