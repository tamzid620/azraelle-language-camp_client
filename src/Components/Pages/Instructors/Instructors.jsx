import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";


const Instructors = () => {
    useTitle('Instructor')
    const [axiosSecure] = useAxiosSecure();
    const [intructorInfos, setIntructorInfos] = useState([]);

    useEffect(() => {
        axiosSecure
            .get('/allinstructors')
            .then((res) => setIntructorInfos(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    const handleSeeClasses = () => {
        Swal.fire({
          icon: 'warning',
          title: 'Access Denied!',
        });
      };

    return (
        <div>
            <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase my-10">All Instructors</h1>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Classes taken</th>
                            <th>Classes Name</th>
                            <th>Tool</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            intructorInfos.map((intructorInfo, index) =>
                                <tr key={intructorInfo._id}>

                                    <th>{index + 1}</th>
                                    <td><img className="w-[40px] rounded-full" src={intructorInfo?.instructor_image} alt="" /></td>
                                    <td>{intructorInfo?.instructor_name}</td>
                                    <td>{intructorInfo?.instructor_email}</td>
                                    <td>{intructorInfo?.num_classes_taken}</td>
                                    <td>{intructorInfo?.classes_taken} ...etc</td>
                                    <td>
                                        <button onClick={handleSeeClasses} className="btn bg-blue-300 btn-xs font-bold">See Classes</button>
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

export default Instructors;