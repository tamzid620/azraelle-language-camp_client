import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Shared/Layout/Layout";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Shared/Home/Home";
import Instructors from "../Components/Pages/Instructors/Instructors";
import DashBoard from "../Components/Pages/DashBoard/DashBoard";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import PrivateRoutes from "./PrivateRoute";
import Classes from "../Components/Pages/Classes/Classes";
import MySelectedClass from "../Components/Pages/DashBoard/DashBoardMenu/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Components/Pages/DashBoard/DashBoardMenu/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../Components/Pages/DashBoard/DashBoardMenu/PaymentHistory/PaymentHistory";
import MyClasses from "../Components/Pages/DashBoard/DashBoardMenu/MyClasses/MyClasses";
import AddAClass from "../Components/Pages/DashBoard/DashBoardMenu/AddAClass/AddAClass";
import ManageUsers from "../Components/Pages/DashBoard/DashBoardMenu/ManageUsers/ManageUsers";
import ManageClasses from "../Components/Pages/DashBoard/DashBoardMenu/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Components/Pages/DashBoard/DashBoardMenu/Payment/Payment";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/instructors",
            element:<Instructors></Instructors>,
        },
        {
            path: "/classes",
            element:<Classes></Classes>,
        },
        {
            path: "/login",
            element:<Login></Login>,
        },
        {
            path: "/register",
            element:<Register></Register>,
        },
      ]
    },
    {
        path:"dashboard",
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [

            // ADMIN ROUTES------------------------->
            {
                path:'manageclasses',
                element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
            },
            {
                path:'manageusers',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
            },

             // INSTRUCTOR ROUTES------------------------->
            {
                path:'addaclass',
                element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>,
            },
            {
                path:'myclasses',
                element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>,
            },

            // STUDENT ROUTES------------------------->
            {
                path:'myselectedclass',
                element:<MySelectedClass></MySelectedClass>,
            },
            {
                path:'myenrolledclass',
                element:<MyEnrolledClass></MyEnrolledClass>,
            },
            {
                path:'paymenthistory',
                element:<PaymentHistory></PaymentHistory>,
            },
            {
                path:'payment',
                element:<Payment></Payment>,
            },
        ]
    }
  ]);

export default router;