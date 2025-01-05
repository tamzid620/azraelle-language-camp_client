import { NavLink, Outlet } from "react-router-dom";
import {
  FcHome,
  FcApproval,
  FcRefresh,
  FcMoneyTransfer,
  FcManager,
  FcReading,
  FcAddDatabase,
} from "react-icons/fc";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";
import useTitle from "../../../hooks/useTitle";

const DashBoard = () => {
  useTitle("DashBoard");

  const [Admin] = useAdmin();
  const [Instructor] = useInstructor();

  return (
    <div style={{ fontFamily: "Nunito Sans, serif" }} >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-[#c5d5df] text-white drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  text-lg font-semibold bg-[#004C7F] text-white">
            <Fade direction="down">
              <li>
                <NavLink to="/">
                  <FcHome /> Home{" "}
                </NavLink>
              </li>
            </Fade>

            <div className="divider"></div>
            <Fade direction="left">
              {Admin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/manageclasses">
                      <FcReading /> Manage Classes{" "}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/manageusers">
                      <FcManager /> Manage Users{" "}
                    </NavLink>
                  </li>
                </>
              ) : 
              Instructor ? (
                <>
                  <li>
                    <NavLink to="/dashboard/addaclass">
                      <FcAddDatabase /> Add A Class{" "}
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/myclasses">
                      <FcApproval /> My Classes{" "}
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/myselectedclass">
                      <FcApproval /> MY Selected Classes
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/myenrolledclass">
                      <FcRefresh /> My Enrolled Classes
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/paymenthistory">
                      <FcMoneyTransfer /> Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
