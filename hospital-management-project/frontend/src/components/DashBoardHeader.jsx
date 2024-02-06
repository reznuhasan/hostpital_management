import Styles from "../Styles/DashBoardHeader.module.css";
import { FaAlignJustify, FaBell, FaEnvelope } from "react-icons/fa6";
import defaultImage from "../assets/defaultImage.png";
import { brown } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
const DashBoardHeader = () => {
    const handleLogout=()=>{
        
    }
  return (
    <div className={Styles.dashboardHeader}>
      <div className={Styles.cmsLogo}>
        <h3>CMS</h3>
        <FaAlignJustify />
      </div>
      <div className={Styles.adminProfile}>
        <div className={Styles.fontIcon}>
          <FaEnvelope size={22} color="brown" />
        </div>
        <div className={Styles.fontIcon}>
          <FaBell size={22} color="brown" />
        </div>
        <div className={Styles.userAdminProfile}>
          <div className={Styles.profileCircle}>
            <img src={defaultImage} alt="" />
          </div>
          <div className={Styles.dropdownMenu}>
            <NavLink>Change Profile</NavLink>
            <NavLink>Upload Report</NavLink>
            <NavLink>Show Report</NavLink>
            <button className={Styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
