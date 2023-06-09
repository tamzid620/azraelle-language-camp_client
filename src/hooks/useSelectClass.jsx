import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiousSecure";
import { useQuery } from "react-query";


const useSelectClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectClass = [] } = useQuery({
        queryKey: ['classselect', user?.email],
        queryFn: async () => {
          const res = await axiosSecure(`/classselect/${user?.email}`);
          return res.data;
        }
      });
      

    return [selectClass, refetch]
}

export default useSelectClass;