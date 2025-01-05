import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiousSecure";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const Instructors = () => {
  useTitle("Instructor");
  const [axiosSecure] = useAxiosSecure();
  const [intructorInfos, setIntructorInfos] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/allinstructors")
      .then((res) => setIntructorInfos(res.data))
      .catch((error) => console.error(error));
  }, [axiosSecure]);

  const handleSeeClasses = () => {
    Swal.fire({
      icon: "warning",
      title: "No Data Found!",
    });
  };

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-4 sm: mx-4">
      <h1
        style={{ fontFamily: "Nunito Sans, serif" }}
        className="flex justify-center font-extrabold text-3xl text-[#004C7F] uppercase mt-20"
      >
        All Instructors
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
              <th>Name</th>
              <th>Email</th>
              <th>Classes taken</th>
              <th>Classes Name</th>
              <th>Tool</th>
            </tr>
          </thead>

          <tbody>
            {intructorInfos.map((intructorInfo, index) => (
              <tr key={intructorInfo._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={intructorInfo?.instructor_image}
                    alt=""
                  />
                </td>
                <td>{intructorInfo?.instructor_name}</td>
                <td>{intructorInfo?.instructor_email}</td>
                <td>{intructorInfo?.num_classes_taken}</td>
                <td>{intructorInfo?.classes_taken} ...etc</td>
                <td>
                  <button
                    onClick={handleSeeClasses}
                    className="text-sm bg-[#004C7F] text-white hover:bg-[#C5F5FF] hover:text-black hover:shadow-xl px-3 py-2 rounded-sm"
                  >
                    Class Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
