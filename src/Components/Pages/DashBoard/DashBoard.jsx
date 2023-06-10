import { NavLink, Outlet } from "react-router-dom";
// import { FaRegHandPointRight } from 'react-icons/fa';
import { FcHome, FcApproval, FcRefresh, FcMoneyTransfer ,FcManager , FcReading, FcAddDatabase, } from "react-icons/fc";

const DashBoard = () => {

    const Admin = true;
    const Instructor = true;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn bg-blue-300 drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-lg font-semibold">

                        <li><NavLink to="/"><FcHome /> Home </NavLink></li>

                        <div className="divider"></div>

                        {
                            Admin ? (
                                <>

                                    <li><NavLink to="/dashboard/manageclasses"><FcReading /> Manage Classes </NavLink></li>

                                    <li><NavLink to="/dashboard/manageusers"><FcManager /> Manage Users </NavLink></li>


                                </>
                            )
                                :
                                Instructor ? (
                                    <>

                                        <li><NavLink to="/dashboard/addaclass"><FcAddDatabase /> Add A Class </NavLink></li>

                                        <li><NavLink to="/dashboard/myclasses"><FcApproval /> My Classes </NavLink></li>


                                    </>
                                )
                                    : (
                                        <>

                                            <li><NavLink to="/dashboard/myselectedclass"><FcApproval /> MY Selected Classes </NavLink></li>

                                            <li><NavLink to="/dashboard/myenrolledclass"><FcRefresh /> My Enrolled Classes </NavLink></li>

                                            <li><NavLink to="/dashboard/paymenthistory"><FcMoneyTransfer /> Payment History </NavLink></li>


                                        </>

                                    )
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;