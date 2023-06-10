import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiousSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();



     const {data: Admin, Loading: AdminLoading} = useQuery({
        queryKey: ['Admin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })



    return [Admin, AdminLoading]
}
export default useAdmin;