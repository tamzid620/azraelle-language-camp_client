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
        <div  className="lg:mx-0 md:mx-4 sm: mx-6 mt-20">
            <h1 style={{ fontFamily: "Nunito Sans, serif" }}
             className="flex justify-center font-extrabold text-3xl uppercase">Popular Classes</h1>
            <div className="p-5 rounded-e-sm grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5">
                {
                    classes.map((classItem) => (
                        <div className=" p-2" key={classItem?._id}>
                            <div className="image-container bg-[#004C7F] p-3">
                            <img className="rounded-sm" style={{ width: "550px", height: "300px" }} src={classItem?.class_image} alt="" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default PopularClasses;
