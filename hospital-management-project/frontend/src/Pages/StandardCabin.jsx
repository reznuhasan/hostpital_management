import React, { useEffect, useState } from 'react'
import Styles from "../Styles/Premium.module.css"
import CabinBox from '../components/CabinBox'
import { apiURI } from '../utlis/api';
const StandardCabin = () => {
  const [cabins,setCabins]=useState([]);
  useEffect(()=>{
    const loadData=async()=>{
      const res=await apiURI.get('/cabin/all');
      const PremiumCabin=res.data.allCabins.filter(cabin=>cabin.category==="standard")
      console.log(PremiumCabin)
      setCabins(PremiumCabin)
    }
    loadData()
  },[])
  return (
    <div className={Styles.premium}>
      <div>
        <h1 style={{
          textAlign:"center",
          textDecoration:'underline',
          color:"#9b1f4b"
        }}>Standard Cabins</h1>
      </div>
      {
        cabins.map(cabin=><CabinBox key={cabin._id} cabin={cabin}/>)
      }
    </div>
  )
}

export default StandardCabin