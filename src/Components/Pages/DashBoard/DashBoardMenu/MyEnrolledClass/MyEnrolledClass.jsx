import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import useTitle from "../../../../../hooks/useTitle";


const MyEnrolledClass = () => {
    useTitle('MyEnrolledClass')

    const [axiosSecure] = useAxiosSecure();
    const [enrolled, setEnrolled] = useState([]);

    useEffect(() => {
        axiosSecure
            .get('/enrolledclass')
            .then((res) => setEnrolled(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure])


    return (
        <div className="w-full ms-10 border rounded-lg p-5">
            <h2 className="font-semibold text-2xl ">My Enrolled Class </h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Class Name</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                enrolled.map((enrolleditem , index) => (
                                    <tr key={enrolleditem._id}>
                                        <th>{index + 1}</th>
                                        <td>{enrolleditem.email}</td>
                                        <td>{enrolleditem.transactionId}</td>
                                        <td>{enrolleditem.className}</td>
                                        <td>{enrolleditem.class_price} $</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClass;