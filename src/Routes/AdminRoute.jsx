import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [Admin, AdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || AdminLoading){
        <span className="flex justify-content items-center loading loading-dots loading-lg"></span>
    }

    if (user && Admin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;