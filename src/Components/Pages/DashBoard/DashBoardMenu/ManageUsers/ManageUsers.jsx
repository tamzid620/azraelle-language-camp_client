import { useQuery } from "react-query";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import { FcFullTrash } from "react-icons/fc";
import Swal from "sweetalert2";


const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    
    const handleDelete = user => {
               
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
                fetch(`http://localhost:5000/users/${user.email}`, {
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
            <h4> Manage Users :{users.length} </h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-blue-100  text-white">
                                        <FcFullTrash/>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;