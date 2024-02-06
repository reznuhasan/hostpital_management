import React, { useContext, useEffect, useState } from 'react'
import Styles from "../Styles/DoctorSearch.module.css"
import { apiURI } from '../utlis/api';
import { doctorData } from '../useHooks/DoctorDataProvider';
const DoctorSearch = () => {
   const [doctor, setDoctor] = useState("");
   const [specialty, setSpecialty] = useState("");
   const [departmentData,setDepartmentData]=useState([])
   const {doctors,setDoctors}=useContext(doctorData)

   useEffect(()=>{
      const loadDepartment=async()=>{
         const res=await apiURI.get('/doctor/department/')
         if(res.status===200){
            setDepartmentData(res.data.department)
         }
      }
      loadDepartment()
   },[])
   const handleSpecialty = async(e) => {
      e.preventDefault();
      setDoctor("")
      try {
        const res=await apiURI.get(`/doctor/${specialty}`) 
        setDoctors(res.data.allDoctor)
      } catch (error) {
         alert("something wrong")
      }
   }
   const hanldeDoctor =async (e) => {
      e.preventDefault()
      setSpecialty("")
      try {
         const res=await apiURI.get(`/doctor/search/?name=${doctor}`) 
         setDoctors(res.data.doctor)
       } catch (error) {
          alert("something wrong")
       }
   }
   return (
      <div className={Styles.doctorSearch}>
         <div className={Styles.searchBox}>
            <div className={Styles.department}>
               <h2>Department</h2>
               <select name="department" onChange={(e) => setSpecialty(e.target.value)} id="">
                  <option value="">Select Specialty</option>
                  {
                     departmentData && departmentData.map(element=>(
                        <option value={element.name}>{element.name}</option>
                     ))
                  }
               </select>
               <button onClick={handleSpecialty}>Request</button>
            </div>
            <div className={Styles.department}>
               <h2>Doctor</h2>
               <input type="text" name='doctor' value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder='Search Doctor....' />
               <button onClick={hanldeDoctor}>Search</button>
            </div>

         </div>
      </div>
   )
}

export default DoctorSearch