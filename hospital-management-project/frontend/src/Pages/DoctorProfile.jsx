import React, { useEffect, useState } from 'react'
import Styles from "../Styles/DoctorProfile.module.css"
import jafer from "../assets/jafer.jpg"
import { Link, useParams } from 'react-router-dom'
import { apiURI } from '../utlis/api'
const DoctorProfile = () => {
    const [searchId,setSearchId]=useState()
    const [doctorData,setDoctorData]=useState()
    const {_id}=useParams()
    console.log(_id)
    useEffect(()=>{
        setSearchId(_id)
        const loadData=async()=>{
            const res=await apiURI.get(`/doctor/single/?id=${((_id)===undefined)?searchId:_id}`)
            setDoctorData(res.data.doctor)
        }
        loadData();
    },[])
    if(!doctorData) return <h1>Loading......</h1>
    const {name,profile,certification,department,description,position}=doctorData
    return (
        <div className={Styles.DoctorProfile}>
            <div className={Styles.doctorProfileBox}>
                <div>
                    <img src={profile} alt="" />
                </div>
                <div className={Styles.doctorContent}>
                    <div className={Styles.doctorDetails}>
                        <h1>{name.toUpperCase()}{certification.map(certificate=>certificate)}</h1>
                        <h2>{position}</h2>
                    </div>
                    <div>
                        <h1 style={{ "fontSize": "15px", "marginBottom": "20px", "marginTop": "35px" }}>Department: {department}</h1>
                    </div>
                    <div className={Styles.doctorButton}>
                       <Link to={`/appointment/${doctorData._id}`} ><button>Set up an appointment</button></Link>
                    </div>
                </div>
            </div>
            <div className={Styles.profileContent}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DoctorProfile