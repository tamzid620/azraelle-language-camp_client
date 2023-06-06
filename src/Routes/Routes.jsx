import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Shared/Layout/Layout";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Shared/Home/Home";
import Instructors from "../Components/Pages/Instructors/Instructors";
import Classes from "../Components/Pages/classes/classes";
import DashBoard from "../Components/Pages/DashBoard/DashBoard";
  
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
        }
      ]
    },
    {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
    }
  ]);

export default router;