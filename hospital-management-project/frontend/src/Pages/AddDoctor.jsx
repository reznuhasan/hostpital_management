import React, { useEffect, useRef, useState } from 'react'
import ImportantLabel from '../components/ImportantLabel'
import Styles from "../Styles/AddDoctor.module.css"
import Multiselect from 'multiselect-react-dropdown'
import { times } from '../ConstantData/DatePart'
import { apiURI } from '../utlis/api'
const AddDoctor = () => {
  const [departmentData,setDepartmentData]=useState([]);
  const [certificationData,setCertificationData]=useState([]);
  const [positionData,setPositionData]=useState([]);
  const multiSelect=useRef(null)
  const imageRef=useRef(null);
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    department: "",
    position: "",
    mobile: "",
    serial: "",
    startTime: "",
    finishTime: "",
    description: "",
  });

  //load data start 
  useEffect(()=>{
    const loadDepartment=async()=>{
      const res=await apiURI.get('/doctor/department/');
      setDepartmentData(res.data.department)
    }
    const loadCertification=async()=>{
      const res=await apiURI.get('/doctor/certification/');
      const myData=res.data.certification
      setCertificationData(myData)
    }
    const loadPosition=async()=>{
      const res=await apiURI.get('/doctor/position/');
      setPositionData(res.data.position)
    }
    loadPosition();
    loadCertification();
    loadDepartment();
  },[])
  //*******load data finish */
  const [certification, setCertification] = useState([])
  const [profile, setProfile] = useState("")
  const handleChanged = (e) => {
    setDoctor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleCertification = (e) => {
    const selectCertification=e.map(element=>element.name)
    setCertification(selectCertification)
  }
  const handleImageChanged=(e)=>{
    setProfile(e.target.files[0])
  }
  const handleImageClick=()=>{
    imageRef.current.click();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatData= new FormData()
    formatData.append('name',doctor.name)
    formatData.append('email',doctor.email)
    formatData.append('department',doctor.department)
    formatData.append('position',doctor.position)
    formatData.append('mobile',doctor.mobile)
    formatData.append('serial',doctor.serial)
    formatData.append('startTime',doctor.startTime)
    formatData.append('finishTime',doctor.finishTime)
    formatData.append('description',doctor.description)
    formatData.append('profile',profile)
    formatData.append('certification',certification)
    setProfile(null)
    setDoctor({
      name: '',
      email: '',
      department: "",
      position: "",
      mobile: "",
      serial: "",
      startTime: "",
      finishTime: "",
      description: "",
    })
    setCertification([])
    if(multiSelect.current){
      multiSelect.current.resetSelectedValues()
    }
    try {
      const res=await apiURI.post('http://localhost:8000/api/v1/doctor',formatData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      if(res.status===200){
        alert("Data Send Successfully")
      }else{
        alert("api error")
      }
      
    } catch (error) {
      alert("something wrong")
    }
 
  };
  return (
    <div className={Styles.addDoctor}>
      <div className={Styles.formContainer}>
        <h1 className={Styles.title}>Add Doctors</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="name" text="Doctor Name"></ImportantLabel>
            <input type="text" name="name" value={doctor.name} onChange={handleChanged} />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="email" text="Doctor Email"></ImportantLabel>
            <input type="email" name="email" value={doctor.email} onChange={handleChanged} />
          </div>
          {/* Add Doctor Image Part */}
          <ImportantLabel name="image" text="Upload's Doctor Image"></ImportantLabel>
          <div className={Styles.imagePart}>
            <div className={Styles.imageUpload} onClick={handleImageClick}>
                {profile?<img src={URL.createObjectURL(profile)}></img>:<h3>Select Doctor Image</h3>}
                <input type='file' ref={imageRef} onChange={handleImageChanged} style={{display:"none"}}/>
            </div>
          </div>
          {/* Select Doctor Department Part */}
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="department" text="Department"></ImportantLabel>
            <select name="department" value={doctor.department} onChange={handleChanged} className={Styles.selectInput}>
              <option value="">Choose One</option>
              {
                departmentData.map(data=>(
                  <option value={data.name}>{data.name}</option>
                ))

              }
            </select>
          </div>
          {/* MultiSelect Certification Part Start */}
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="certification" text="Certification"></ImportantLabel>
            <Multiselect ref={multiSelect} displayValue='name' options={certificationData} isObject={true} onRemove={handleCertification} onSelect={handleCertification} />
          </div>
           {/* MultiSelect Certification Part Finish*/}
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="position" text="Position"></ImportantLabel>
            <select name="position" value={doctor.position} onChange={handleChanged} className={Styles.selectInput}>
              <option value="">Choose One</option>
              {
                positionData.map(data=>(
                  <option value={data.name}>{data.name}</option>
                ))

              }
            </select>
          </div>
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="startTime" text="Starting Time"></ImportantLabel>
            <select name="startTime" value={doctor.startTime} onChange={handleChanged} className={Styles.selectInput}>
              <option value="">Choose One</option>
              {
                times.map(time => (
                  <option value={time}>{time}</option>
                ))
              }
            </select>
          </div>
          <div className={Styles.inputDiv} style={{
            "margin": "6px 0"
          }}>
            <ImportantLabel name="finishTime" text="Finishing Time"></ImportantLabel>
            <select name="finishTime" value={doctor.finishTime} onChange={handleChanged} className={Styles.selectInput}>
              <option value="">Choose One</option>
              {
                times.map(time => (
                  <option value={time}>{time}</option>
                ))
              }
            </select>
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="mobile" text="Mobile"></ImportantLabel>
            <input type="text" name="mobile" value={doctor.mobile} onChange={handleChanged} />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="serial" text="Total Serial's No"></ImportantLabel>
            <input type="text" name="serial" value={doctor.serial} onChange={handleChanged} />
          </div>
          <div className={Styles.inputDiv}>
            <ImportantLabel name="description" text="Doctor's Description"></ImportantLabel>
            <textarea cols="60" rows="10" name='description' value={doctor.description} onChange={handleChanged} />
          </div>

          <button type="submit" className={Styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddDoctor