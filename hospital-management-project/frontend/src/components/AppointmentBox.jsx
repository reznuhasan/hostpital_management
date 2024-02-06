import { useEffect, useState } from "react";
import { apiURI } from "../utlis/api";
import Styles from "../Styles/AppointmentBox.module.css";
const AppointmentBox = ({ appointment }) => {
  const [serial, setSerial] = useState();
  const {
    doctor,
    name,
    status,
    date,
    month,
    year,
    specialtyConsultation,
    _id,
  } = appointment;
  const [newStatus, setNewStatus] = useState(status);
  useEffect(() => {
    if (doctor) {
      const loadData = async () => {
        const res = await apiURI(`/doctor/search/?name=${doctor}`);
        setSerial(res.data.doctor[0].serial);
      };
      loadData();
    }
  }, [doctor]);
  const handleApproved = async () => {
    try {
      const user = {
        id: _id,
        doctorName: doctor,
      };
      const res = await apiURI.patch(`/user/appointment/update`, user);
      if (res.status === 200) {
        alert("approved successfully");
        console.log(res.data.savedAppointment.status);
        setNewStatus(res.data.savedAppointment.status);
        setSerial(serial-1)
      }
    } catch (error) {
      console.log(error);
      alert("something wrong");
    }
  };
  return (
    <div className={Styles.appointmentBox}>
      <div className={Styles.doctorParts}>
        <h1 className={Styles.doctorName}>
          Doctor:{doctor}-({specialtyConsultation})
        </h1>
      </div>
      <div>
        <h1 className={Styles.patientName}>Patient:{name}</h1>
      </div>
      <div>
        <h2>Available:{serial}</h2>
      </div>
      <div className={Styles.times}>
        <p>Date:{date}</p>
        <p>Month:{month}</p>
        <p>Year:{year}</p>
      </div>
      <div>
        <p>Status:{newStatus}</p>
      </div>

      {newStatus === "approve" ? (
        <div>
          <button className={Styles.deleteBtn}>Delete</button>
          <button className={Styles.SeeMore}>See More...</button>
        </div>
      ) : (
        <div>
          <button onClick={handleApproved} className={Styles.approvedBtn}>
            Approved
          </button>
          <button className={Styles.deleteBtn}>Delete</button>
          <button className={Styles.SeeMore}>See More...</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentBox;
