import useAxiosSecure from "../../../../hooks/useAxiousSecure";
import { useState } from "react";
import { useEffect } from "react";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/popularinstructor")
      .then((res) => setInstructors(res.data))
      .catch((error) => console.error(error));
  }, [axiosSecure]);

  return (
    <div style={{fontFamily: "Nunito Sans, serif"}} className="lg:mx-0 md:mx-4 sm: mx-6 mt-20">
      <h1  className="flex justify-center font-extrabold text-3xl uppercase mb-10">
        Popular Instructor
      </h1>
      <div  className=" grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5">
        {instructors.map((instructorItem) => (
          <div key={instructorItem?._id}>
            {/* <img className="rounded-xl" style={{width:"500px" , height:"400px"}} src={instructorItem?.instructor_image} alt=""/>
             */}
            <div className="w-full rounded-sm text-white bg-[#004C7F] shadow-gray-500 shadow-lg hover:shadow-xl">
              <figure>
                <img
                className="w-full h-[300px] px-12 rounded-t-sm bg-black"
                  src={instructorItem?.instructor_image}
                  alt= {instructorItem?.instructor_name}
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">
                  {instructorItem?.instructor_name}
                  <div className="badge border-[#C5F5FF] border-2 bg-[#C5F5FF] ">NEW</div>
                </h2>
                <p>
                  {" "}
                  <span className="font-bold">Subject Instructor:</span>{" "}
                  {instructorItem?.class_name}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Email :</span>{" "}
                  {instructorItem?.instructor_email}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Ttotal Students :</span>{" "}
                  {instructorItem?.total_students}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
