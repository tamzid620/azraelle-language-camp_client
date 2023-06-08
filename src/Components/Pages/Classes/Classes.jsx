import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useEffect } from "react";


const Classes = () => {

const [axiosSecure] = useAxiosSecure();
const [classesInfos, setClassesInfos] = useState([]);


useEffect(() => {
    axiosSecure
        .get('/course')
        .then((res) => setClassesInfos(res.data))
        .catch((error) => console.error(error));
}, [axiosSecure]);


return (
    <div>
    <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase my-10">Classes</h1>
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Photo</th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Available seats</th>
                    <th>Price</th>
                    <th>Tool</th>
                </tr>
            </thead>

            <tbody>
                {
                    classesInfos.map((classesInfo, index) =>
                        <tr key={classesInfo._id}>

                            <th>{index + 1}</th>
                            <td><img className="w-[40px] rounded-full" src={classesInfo?.instructor_image} alt="" /></td>
                            <td>{classesInfo?.class_name}</td>
                            <td>{classesInfo?.instructor_name}</td>
                            <td>{classesInfo?.available_seats}</td>
                            <td>{classesInfo?.class_price} $</td>
                            <td>
                                <button className="btn bg-blue-300 btn-xs font-bold">Select</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
</div>
);
};

export default Classes;