import React, { useEffect, useState } from 'react'
import CabinBox from '../components/CabinBox'
import Style from "../Styles/Premium.module.css"
import { apiURI } from '../utlis/api';
const PremiumCabin = () => {
  const [cabins,setCabins]=useState([]);
  useEffect(()=>{
    const loadData=async()=>{
      const res=await apiURI.get('/cabin/all');
      const PremiumCabin=res.data.allCabins.filter(cabin=>cabin.category==="premium")
      console.log(PremiumCabin)
      setCabins(PremiumCabin)
    }
    loadData()
  },[])
  return (
    <div className={Style.premium}>
      <div>
        <h1 style={{
          textAlign:"center",
          textDecoration:'underline',
          color:"#9b1f4b"
        }}>Premium Cabins</h1>
      </div>
      {
        cabins.map(cabin=><CabinBox key={cabin._id} cabin={cabin}/>)
      }
    </div>
  )
}

export default PremiumCabin