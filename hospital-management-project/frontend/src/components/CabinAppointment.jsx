import React, { useEffect, useState } from 'react'
import { dates, days, months, years } from "../ConstantData/DatePart";
import Styles1 from "../Styles/Appointment.module.css";
import Styles from "../Styles/Register.module.css";
import ImportantLabel from './ImportantLabel';
import { useNavigate, useParams } from 'react-router-dom';
import { apiURI } from '../utlis/api';

const CabinAppointment = () => {
  const [doctorDepartmentInfo, setDoctorDepartmentInfo] = useState([]);
  const [doctorNameInfo, setDoctorNameInfo] = useState([]);
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    mobile: "",
    room:"",
    floor:"",
    specialtyConsultation: "",
    doctor: "",
    month: "",
    date: "",
    day: "",
    year: "",
  });
  const { _id } = useParams();
  useEffect(() => {
    const loadDoctorDepartments = async () => {
      const res = await apiURI.get(`/doctor/department/`);
      const allDepartments = (res.data.department);
      setDoctorDepartmentInfo(allDepartments.map(department => department.name))
      console.log(allDepartments)
    }
    loadDoctorDepartments();
  }, []);
  useEffect(() => {
    if (patient.specialtyConsultation !== "") {
      const loadDoctorName = async () => {
        const res = await apiURI.get(`/doctor/${patient.specialtyConsultation}`)
        setDoctorNameInfo(res.data.allDoctor.map(element => element.name))
      }
      loadDoctorName()
    }

  }, [patient.specialtyConsultation])
  const handleChanged = (e) => {
    setPatient((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => { }
  return (
    <div className={Styles1.appointment}>
      <div className={Styles.formContainer}>
        <h1 className={Styles.title} style={{margin:"20px 0"}}>Request For A CABIN Appointment</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="name" text="PATIENT'S NAME"></ImportantLabel>
            <input
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChanged}
            />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="email" text="EMAIL"></ImportantLabel>
            <input
              type="email"
              name="email"
              value={patient.email}
              onChange={handleChanged}
            />
          </div>
          <div className={Styles1.gender}>
            <label htmlFor="gender">Gender:</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={patient.gender === "male"}
              onChange={handleChanged}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={patient.gender === "female"}
              onChange={handleChanged}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={patient.gender === "other"}
              onChange={handleChanged}
            />
            <label>Other</label>
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="age" text="PATIENT AGE"></ImportantLabel>
            <input
              type="text"
              name="age"
              value={patient.age}
              onChange={handleChanged}
            />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel
              name="mobile"
              text="PATIENT MOBILE"
            ></ImportantLabel>
            <input
              type="text"
              name="mobile"
              value={patient.mobile}
              onChange={handleChanged}
            />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="room" text="Room"></ImportantLabel>
            <input
              type="text"
              name="room"
              value={patient.room}
              onChange={handleChanged}
            />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="floor" text="Floor"></ImportantLabel>
            <input
              type="text"
              name="floor"
              value={patient.floor}
              onChange={handleChanged}
            />
          </div>
          <div
            className={Styles.inputDiv}
            style={{
              margin: "6px 0",
            }}
          >
            <ImportantLabel
              name="specialtyConsultation"
              text="SPECIALTY FOR CONSULTATION"
            ></ImportantLabel>
            {doctorDepartmentInfo.length > 1 ? (
              <select
                name="specialtyConsultation"
                value={patient.specialtyConsultation}
                onChange={handleChanged}
                className={Styles1.selectInput}
              >
                <option value="">Choose One</option>
                {doctorDepartmentInfo.map((element) => (
                  <option value={element} key={element}>
                    {element}
                  </option>
                ))}
              </select>
            ) : (
              <select
                name="specialtyConsultation"
                value={patient.specialtyConsultation}
                onChange={handleChanged}
                className={Styles1.selectInput}
              >
                {doctorDepartmentInfo.map((element) => (
                  <option value={element} key={element}>
                    {element}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div
            className={Styles.inputDiv}
            style={{
              margin: "6px 0",
            }}
          >
            <ImportantLabel name="doctor" text="DOCTOR"></ImportantLabel>
            {
              (patient.specialtyConsultation === "") ? <select
                name="doctor"
                value={patient.doctor}
                onChange={handleChanged}
                className={Styles1.selectInput}
              >
                <option value="">Choose One</option>
              </select> : (doctorDepartmentInfo.length !== 1) ? <select
                name="doctor"
                value={patient.doctor}
                onChange={handleChanged}
                className={Styles1.selectInput}
              >
                <option value="">Choose One</option>
                {doctorNameInfo.map(name => (
                  <option value={name} key={name}>{name}</option>
                ))}
              </select> :
                <select
                  name="doctor"
                  value={patient.doctor}
                  onChange={handleChanged}
                  className={Styles1.selectInput}
                >
                  {doctorNameInfo.map((element) => (
                    <option value={element} key={element}>
                      {element}
                    </option>
                  ))}
                </select>
            }
          </div>
          <div className={Styles1.appointmentSchedule}>
            <ImportantLabel
              name=""
              text="Appointment Termination Date"
            />
            <div className={Styles1.datePart}>
              <select
                name="month"
                value={patient.month}
                onChange={handleChanged}
                className={Styles1.dateInput}
              >
                <option value="">MONTH</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="date"
                value={patient.date}
                onChange={handleChanged}
                className={Styles1.dateInput}
              >
                <option value="">Date</option>
                {dates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select
                name="year"
                value={patient.year}
                onChange={handleChanged}
                className={Styles1.dateInput}
              >
                <option value="">YEAR</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className={Styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CabinAppointment