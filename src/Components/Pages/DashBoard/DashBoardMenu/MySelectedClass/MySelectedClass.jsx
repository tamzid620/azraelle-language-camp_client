import { Link } from "react-router-dom";
import useSelectClass from "../../../../../hooks/useSelectClass";
import Swal from "sweetalert2";


const MySelectedClass = () => {
    const [selectClass, refetch] = useSelectClass();

    const handleDelete = selectClassItem => {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {

                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/classselect/${selectClassItem.email}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your selected class has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }


    return (
        <div className="w-full ms-10 border rounded-lg p-5">
            <div className="flex justify-between mb-5">
                <h2 className="font-semibold text-2xl">My Selected Class</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Subject</th>
                                <th>Instructor</th>
                                <th>Available Sits</th>
                                <th>price</th>
                                <th>Tool</th>
                                <th>Tool</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectClass.map((selectClassItem, index) => (
                                    <tr key={selectClassItem._id}>

                                        <th>{index + 1}</th>
                                        <td><img className="w-[100px] rounded-lg" src={selectClassItem?.class_image} alt="" /></td>
                                        <td>{selectClassItem?.class_name}</td>
                                        <td>{selectClassItem?.instructor_name}</td>
                                        <td>{selectClassItem?.available_seats}</td>
                                        <td>{selectClassItem?.class_price}</td>
                                        <th>
                                            <Link to="/dashboard/payment">
                                                <button className="btn bg-green-300 ">PAY</button>
                                            </Link>
                                        </th>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(selectClassItem)}
                                                className="btn bg-blue-300 "
                                            >DELETE</button>
                                        </th>

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

export default MySelectedClass;