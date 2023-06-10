import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiousSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useInstructor = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();



     const {data: Instructor, Loading: InstructorLoading} = useQuery({
        queryKey: ['Instructor', user?.email],

        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })


    
    return [Instructor, InstructorLoading]
}
export default useInstructor;