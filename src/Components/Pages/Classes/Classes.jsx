
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Classes = () => {

    const [axiosSecure] = useAxiosSecure();
    const [classesInfos, setClassesInfos] = useState([]);
    const {user} =useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    // const { instructor_image, class_name, instructor_name, available_seats, class_price, _id } = select;


    useEffect(() => {
        axiosSecure
            .get('/allclasses')
            .then((res) =>setClassesInfos(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure]);

    const handleSelect =data => {
        console.log(data);
        if(user && user.email){
            const email = user.email;
            fetch(`http://localhost:5000/classselect/${email}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
            else{
                Swal.fire({
                    title: 'Please login to select class',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login now!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/login', {state: {from: location}})
                    }
                  })
            }
        }
    


    return (
        <div>
            <h1 className="flex justify-center font-bold text-3xl text-blue-900 uppercase my-10">Classes</h1>
            <div className="overflow-x-auto my-10">
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
                                        <button
                                            onClick={() => handleSelect(classesInfo)}
                                            className="btn bg-blue-300 btn-xs font-bold"
                                        >Select
                                        </button>
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