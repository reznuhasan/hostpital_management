import React, { useEffect, useState } from 'react';
import Styles from "../Styles/ShowReport.module.css";
import { jwtDecode } from 'jwt-decode';
import { apiURI } from '../utlis/api';
import Report from './Report';

const ShowReport = () => {
  const [reports, setReports] = useState([]); // Correct usage of useState
  const [name,setName]=useState("")
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const token = getToken.split(" ")[1];
    const decodeToken = jwtDecode(token);
    const user = {
      id: decodeToken._id
    };

    setName(decodeToken.name)
    if (user.id !== null) {
      const loadData = async () => {
        try {
          const res = await apiURI.post("/user/report/show", user);
          console.log(res.data.allReports);
          setReports(res.data.allReports); // Update the reports state with the fetched data
        } catch (error) {
          console.error('Error fetching reports:', error);
        }
      };

      loadData();
    }

  }, []); // Add user.id to the dependency array
  if(reports.length===0) return(
    <div style={{
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      color:"red"
    }}>
      <h1>Until No Reports Upload</h1>
    </div>
  )
  return (
    <div style={{
      height:"100vh",
    }}>
      <h1 style={{textAlign:"center"}}>Hello <span style={{color:"red",fontWeight:"bolder"}}>{name.toUpperCase()}</span>, Your All Report Here</h1>
      <div>
        {
          reports.map(report=><Report report={report} key={report}></Report>)
        }
      </div>
      
    </div>
  );
};

export default ShowReport;
