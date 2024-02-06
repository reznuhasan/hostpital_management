import { NavLink, useLocation } from "react-router-dom";
import Styles from "../Styles/DashBoardSidebar.module.css";
import { useEffect, useState } from "react";
const DashBoardSidebar = () => {
  const [doctorStyle, setDoctorStyle] = useState("none");
  const [appointmentStyle, setAppointmentStyle] = useState("none");
  const location = useLocation();
  const doctorRoutes = [
    "/dashboard/doctor",
    "/dashboard/add-doctor",
    "/dashboard/add-department",
    "/dashboard/add-certification",
    "/dashboard/add-position",
  ];
  const appointmentRoutes = [
    "/dashboard/appointment",
    "/dashboard/appointment/approved",
    "/dashboard/appointment/pending",
  ];
  useEffect(() => {
    const isDoctorRoute = doctorRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    setDoctorStyle(isDoctorRoute ? "block" : "none");
    const isAppointmentRoute = appointmentRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    setAppointmentStyle(isAppointmentRoute ? "block" : "none");
  }, [location.pathname]);
  const handleMouseEnter = () => {
    setDoctorStyle("block");
  };
  const handleMouseLeave = () => {
    if (!doctorRoutes.some((route) => location.pathname.startsWith(route))) {
      setDoctorStyle("none");
    }
  };
  const handleAppointmentMouseEnter = () => {
    setAppointmentStyle("block");
  };
  const handleAppointmentMouseLeave = () => {
    if (!appointmentRoutes.some((route) => location.pathname.startsWith(route))) {
      setAppointmentStyle("none");
    }
  };
  return (
    <div className={Styles.dashboardSidebar}>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div
        className={Styles.dashboardNav}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <NavLink>Doctor</NavLink>
        </div>
        <div
          className={Styles.dashboardDropdownMenu}
          style={{ display: doctorStyle }}
        >
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/add-doctor">Add Doctor</NavLink>
          </div>
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/add-department">Add Department</NavLink>
          </div>
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/add-certification">
              Add Certification
            </NavLink>
          </div>
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/add-position">Add Position</NavLink>
          </div>
        </div>
      </div>
      <div
        className={Styles.dashboardNav}
        onMouseEnter={handleAppointmentMouseEnter}
        onMouseLeave={handleAppointmentMouseLeave}
      >
        <div>
          <NavLink>Appointment</NavLink>
        </div>
        <div
          className={Styles.dashboardDropdownMenu}
          style={{ display: appointmentStyle }}
        >
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/appointment">All</NavLink>
          </div>
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/appointment/pending">Pending </NavLink>
          </div>
          <div className={Styles.dashboardDropdownMenuNav}>
            <div className={Styles.dashboardDropdownCircle}></div>

            <NavLink to="/dashboard/appointment/approved">Approved</NavLink>
          </div>
        </div>
      </div>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard/appointment">Users</NavLink>
      </div>
      <div className={Styles.dashboardNav}>
        <NavLink to="/dashboard/cabin">Cabin</NavLink>
      </div>
      
    </div>
  );
};

export default DashBoardSidebar;
