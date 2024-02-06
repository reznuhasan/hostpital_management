import React from 'react'
import Styles from '../Styles/Cabins.module.css'
import { NavLink, Outlet } from 'react-router-dom'
const Cabins = () => {
  return (
    <div className={Styles.cabins}>
      <div className={Styles.sidebar}>
         <NavLink to="">Premium Cabin</NavLink>
         <NavLink to="standard">Standard Cabin</NavLink>
         <NavLink to="icu">ICU</NavLink>
         <NavLink to="ot">Operation theater</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Cabins