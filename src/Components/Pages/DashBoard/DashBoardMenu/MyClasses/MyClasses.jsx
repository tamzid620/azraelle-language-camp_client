import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";
import useTitle from "../../../../../hooks/useTitle";


const MyClasses = () => {
  useTitle('MyClasses')

    const [axiosSecure] = useAxiosSecure();
    const [myclasses, setMyclasses] = useState([])
    const [class_name, setClassName] = useState("");
    const [available_seats, setAvailableSeats] = useState("");
    const [class_price, setClassPrice] = useState("");
  

    useEffect(() => {
        axiosSecure
            .get('/myclasses')
            .then((res) => setMyclasses(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure])
   
    const handleSubmit = (data ,myclass) =>{
        console.log({class_name, available_seats, class_price});
        console.log(data);
      
        fetch(`https://azraelle-language-camp-server.vercel.app/updateclass/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    const updateclass = myclasses.map(myclass => {
                      
                        if (myclass._id === myclass._id) {
                          return myclass;
                        }
                        return myclass;
                      });
                      setMyclasses(updateclass);
                    Swal.fire({
                        icon: 'success',
                        title: 'Class Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(result);
                console.log(myclass)
            })
            .catch(error => {
                console.error(error);

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Updated Operation UnSuccessful!',
                })
            });
            
    }

    return (
        <div className="w-full ms-10 border rounded-lg p-5">
            <h2 className="text-lg font-bold mb-4">My Classes :{myclasses.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Subject</th>
                                <th>Avaiable Seats</th>
                                <th>Price</th>
                                <th> Total Enrolled Students</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myclasses.map((myclass) => (
                                    <tr key={myclass._id}>
                                        <th>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={myclass?.class_image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold uppercase">{myclass?.class_name}</div></div>
                                            </div>
                                        </td>
                                        <td>{myclass?.available_seats}</td>
                                        <td>{myclass?.class_price} $</td>
                                        <td>0</td>
                                        <td>...</td>
                                        <th>
<label htmlFor="my_modal_6" className="btn bg-green-300 btn-xs">Update</label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Class </h3>
    <div>
        {/* form data 0-------------------> */}
        <div>
        <form>
                              <div>
                                <label htmlFor="class-name">Class Name:</label>
                                <input
                                  id="class-name"
                                  type="text"
                                  value={class_name}
                                  onChange={(e) =>
                                    setClassName(e.target.value)
                                  }
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="available-seats">
                                  Available Seats:
                                </label>
                                <input
                                  id="available-seats"
                                  type="number"
                                  value={available_seats}
                                  onChange={(e) =>
                                    setAvailableSeats(e.target.value)
                                  }
                                  required
                                />
                              </div>
                              <div>
                                <label htmlFor="class-price">Class Price:</label>
                                <input
                                  id="class-price"
                                  type="number"
                                  value={class_price}
                                  onChange={(e) =>
                                    setClassPrice(e.target.value)
                                  }
                                  required
                                />
                              </div>
                              <button onClick={(e) => { e.preventDefault(); handleSubmit(myclass); }} className="btn-xs bg-green-300 text-black" type="submit">Submit</button>

                            </form>
        </div>
    </div>
        {/* <button onClick={() => handleUpdate(myclass)} className="btn bg-green-300 btn-xs">Update</button> */}
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn bg-green-300 btn-xs">Close!</label>
    </div>
  </div>
</div>
                                        </th>
                                        <td>...</td>
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

export default MyClasses;