import React from 'react'
import Styles from "../Styles/Doctor.module.css"
import { Link } from 'react-router-dom'
const DoctorComp = ({doctor}) => {
    const {certification,department,name,profile,position,_id}=doctor
    return (
        <div className={Styles.doctorContentBox}>
            <div>
                <img src={profile} alt="" />
            </div>
            <div className={Styles.doctorContent}>
                <div className={Styles.doctorDetails}>
                    <h1>{name.toUpperCase()}</h1>
                    <p>{certification.map(certificate=>certificate)}</p>
                    <h2>{position}</h2>
                </div>
                <div>
                    <h1 style={{ "fontSize": "17px", "marginBottom": "20px", "marginTop": "35px" }}>Department: {department}</h1>
                </div>
                <div className={Styles.doctorButton}>
                    <Link to={`/appointment/${_id}`}><button>Set up an appointment</button></Link>
                    <Link to={`/doctors/${_id}`}>
                    <button style={{
                        "marginLeft": "30px"
                    }}>View Doctor Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DoctorComp