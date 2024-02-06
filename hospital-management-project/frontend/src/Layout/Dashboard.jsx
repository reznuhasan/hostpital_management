import { Outlet } from "react-router-dom";
import DashBoardHeader from "../components/DashBoardHeader";
import DashBoardSidebar from "../components/DashBoardSidebar";

const Dashboard = () => {
  return (
    <div>
      <DashBoardHeader />
      <div style={{
        display:"flex",
      }}>
        <DashBoardSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
