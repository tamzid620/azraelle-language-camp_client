import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const [manageClasses, setManageClasses] = useState([])
    const [disabledButtons1, setDisabledButtons1] = useState([]);
    const [disabledButtons2, setDisabledButtons2] = useState([]);
    const [feedback, setFeedback] = useState("");



    useEffect(() => {
        axiosSecure
            .get('/manageclass')
            .then((res) => setManageClasses(res.data))
            .catch((error) => console.error(error));
    }, [axiosSecure])

    const handleAppproved = (index) => {
        setDisabledButtons1([...disabledButtons1, index]);
        Swal.fire({
          title: 'Approved Successfully!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      };
    const handleDenied = (index) => {
        setDisabledButtons2([...disabledButtons2, index]);
        Swal.fire({
          title: 'Denied Successfully!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      };

      const handleFeedbackSubmit = () => {
        Swal.fire({
            title: 'Feedback Submitted Successfully!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
        setFeedback("");
      }


    return (
        <div className="w-full ms-10 border rounded-lg p-5">
            <h3 className="font-semibold text-2xl mb-5"> Manage Classes : {manageClasses.length}</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Subject</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th> Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageClasses.map((manageClass, index) => (
                                    <tr key={manageClass._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={manageClass?.class_image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold uppercase">{manageClass?.class_name}</div></div>
                                            </div>
                                        </td>
                                        <td>{manageClass?.instructor_name}</td>
                                        <td>{manageClass?.instructor_email}</td>
                                        <td>{manageClass?.available_seats}</td>
                                        <td>{manageClass?.class_price} $</td>
                                        <td>
  <button
    className="btn btn-xs btn-success"
    disabled={disabledButtons1.includes(index)}
    onClick={() => handleAppproved(index)}
  >
    Approved
  </button>
</td>
<td>
  <button
    className="btn btn-xs btn-error"
    disabled={disabledButtons2.includes(index)}
    onClick={() => handleDenied(index)}
  >
    Denied
  </button>
</td>
<td>
<label htmlFor="my_modal_6" className="btn btn-xs btn-warning">send Feedback</label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">

  <h2>Submit Feedback</h2>
  <textarea
    type="text"
    placeholder="Enter your feedback here..."
    rows={4}
    className="w-full mb-3"
    value={feedback}
    onChange={(e) => setFeedback(e.target.value)}
></textarea>

      <button className="btn btn-success" onClick={handleFeedbackSubmit}>
        Submit
      </button>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-xs">Close!</label>
    </div>
  </div>
</div>
                                        </td>
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

export default ManageClasses;