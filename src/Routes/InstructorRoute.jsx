import { Navigate, useLocation } from "react-router";
import useInstructor from "../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [Instructor , InstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || InstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && Instructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;