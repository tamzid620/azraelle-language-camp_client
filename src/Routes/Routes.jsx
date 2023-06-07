import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Shared/Layout/Layout";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Shared/Home/Home";
import Instructors from "../Components/Pages/Instructors/Instructors";
import Classes from "../Components/Pages/classes/classes";
import DashBoard from "../Components/Pages/DashBoard/DashBoard";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
  
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
        path:"/dashboard",
        element:<DashBoard></DashBoard>
    }
  ]);

export default router;