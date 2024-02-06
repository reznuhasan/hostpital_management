import { useEffect, useState } from "react";
import { apiURI } from "../utlis/api";
import AppointmentBox from "./AppointmentBox";

const DashBoardAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await apiURI.get("/user/appointment/all");
      if (res.status === 200) {
        console.log(res.data.allAppointments[0]);
        setAppointments(res.data.allAppointments);
      }
    };
    loadData();
  }, []);
  if (appointments.length === 0)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div style={{width: '80%',}}>
      <div style={{textAlign:"center"}}>
        <h1>Total Appointments: <span style={{color: 'red'}}>{appointments.length}</span></h1>
      </div>
      <div>
        {appointments.map((appointment) => (
          <AppointmentBox
            appointment={appointment}
            key={appointment._id}
          ></AppointmentBox>
        ))}
      </div>
    </div>
  );
};

export default DashBoardAppointment;
