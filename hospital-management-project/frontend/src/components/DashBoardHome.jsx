import { useEffect, useState } from "react"
import Styles from "../Styles/DashBoardHome.module.css"
import { apiURI } from "../utlis/api";
const DashBoardHome = () => {
  const [appointments,setAppointments]=useState(0);
  const [doctors,setDoctors] = useState(0);
  const [users,setUsers] = useState(0);
  useEffect(()=>{
    const loadAppointmentData=async()=>{
        const res=await apiURI.get('/user/appointment/all')
        if(res.status===200){
          setAppointments(res.data.allAppointments.length)
        }
    }
    loadAppointmentData();
    const loadDoctorData=async()=>{
      const res=await apiURI.get('/doctor/all');
      if(res.status===200){
        setDoctors(res.data.allDoctor.length)
      }
    }
    loadDoctorData()
    const loadUsersData=async()=>{
      const res=await apiURI.get('/users/all');
      if(res.status===200){
        setUsers(res.data.user.length)
      }
    }
    loadUsersData();
  },[])
  return (
    <div className={Styles.dashboardHome}>
      <div className={Styles.box}>
          <h3>Appointments</h3>
          <h2>{appointments}</h2>
      </div>
      <div className={Styles.box}>
          <h3>Doctors</h3>
          <h2>{doctors}</h2>
      </div>
      <div className={Styles.box}>
          <h3>Users</h3>
          <h2>{users}</h2>
      </div>
    </div>
  )
}

export default DashBoardHome