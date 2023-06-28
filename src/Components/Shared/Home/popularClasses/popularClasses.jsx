import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiousSecure";
import './popularClasses.css'


const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosSecure
            .get('/popularclasses')
            .then((res) => setClasses(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    return (
        <div className="my-20">
            <h1 className="flex justify-center font-bold text-3xl text-gray-400 uppercase">Popular Classes</h1>
            <div className="change bg-blue-100 p-5 rounded-e-xl mt-10 grid sm:grid-cols-1  lg:grid-cols-3">
                {
                    classes.map((classItem) => (
                        <div className=" p-2" key={classItem?._id}>
                            <div className="image-container">
                            <img className="rounded-xl" style={{ width: "550px", height: "300px" }} src={classItem?.class_image} alt="" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default PopularClasses;
