import React from 'react'
import DoctorSearch from '../components/DoctorSearch'
import Doctors from '../components/Doctors'
import Styles from "../Styles/Doctors.module.css"
const DoctorPage = () => {
  
  return (
    <div className={Styles.doctors}>
      <DoctorSearch/>
      <Doctors/>
    </div>
  )
}

export default DoctorPage