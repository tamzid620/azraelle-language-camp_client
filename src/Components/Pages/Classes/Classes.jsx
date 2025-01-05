
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";


const Classes = () => {
    useTitle('Classes')

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
            fetch(`https://azraelle-language-camp-server.vercel.app/classselect/${email}`, {
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
        <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-4 sm: mx-4">
        <h1
          style={{ fontFamily: "Nunito Sans, serif" }}
          className="flex justify-center font-extrabold text-3xl text-[#004C7F] uppercase mt-20"
        >
          All Classes
        </h1>
        <div
        style={{ fontFamily: "PT Sans, serif" }}
        className="overflow-x-auto my-10 "
      >
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-[#C5F5FF] text-[#004C7F] font-bold uppercase">
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
                                    <td><img className="w-[40px] rounded-full" src={classesInfo?.class_image} alt="" /></td>
                                    <td>{classesInfo?.class_name}</td>
                                    <td>{classesInfo?.instructor_name}</td>
                                    <td>{classesInfo?.available_seats}</td>
                                    <td>{classesInfo?.class_price} $</td>
                                    <td>
                                        <button
                                        onClick={() => handleSelect(classesInfo)}
                    className="text-sm bg-[#004C7F] text-white hover:bg-[#C5F5FF] hover:text-black hover:shadow-xl px-3 py-2 rounded-sm"
                  >
                    
                    Select Class
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