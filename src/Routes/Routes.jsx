import { createBrowserRouter } from "react-router-dom";
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: (
          <PrivateRoutes>
            <Instructors />
          </PrivateRoutes>
        ),
      },
      {
        path: "/classes",
        element: (
          <PrivateRoutes>
            <Classes />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
    children: [
      // ADMIN ROUTES------------------------->
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },

      // INSTRUCTOR ROUTES------------------------->
      {
        path: "addaclass",
        element: (
          <InstructorRoute>
            <AddAClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },

      // STUDENT ROUTES------------------------->
      {
        path: "myselectedclass",
        element: (
          <PrivateRoutes>
            <MySelectedClass />
          </PrivateRoutes>
        ),
      },
      {
        path: "myenrolledclass",
        element: (
          <PrivateRoutes>
            <MyEnrolledClass />
          </PrivateRoutes>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRoutes>
            <PaymentHistory />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
