import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/smileLogo.png"
import Styles from "../Styles/Header.module.css"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import defaultImage from "../assets/defaultImage.png"
import { checkUser } from '../customHook/userHook'
import { authProvider } from '../useHooks/UserAuthProvider'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const {user,userName,logout,login}=useContext(authProvider);
    useEffect(()=>{
        const loadData=()=>{
          const userCheck=checkUser()
          if(userCheck===true){
            const token=localStorage.getItem("token");
            login(token)
          }
        }
        loadData();
    },[])
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout()
        navigate("/login")
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.header}>
                <Link to="/">
                <div className={Styles.logo}>
                 <img src={logo} alt="" />
                    <h1>EverSmile</h1>
                </div>
                </Link>
                
                <div className={Styles.menu}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/doctors">Find Doctor</NavLink>
                    <NavLink to="/cabins">Cabins</NavLink>
                    <NavLink to="/test">Tests</NavLink>
                    <NavLink to="/nurses">Find Nurses</NavLink>
                </div>
            </div>
            <div className={Styles.auth}>
                {
                    (user === null) ? <Link to="/login">
                        <div className={Styles.icon}>
                            <FontAwesomeIcon icon={faUser} style={{ "fontSize": "25px" }} />
                            <FontAwesomeIcon icon={faSignInAlt} style={{ "fontSize": "20px" }} />
                        </div>
                    </Link> :
                        <div className={Styles.userProfile}>
                            <div className={Styles.profileCircle}>
                                <img src={defaultImage} alt="" />
                            </div>      
                            <div className={Styles.dropdownMenu}>
                              <NavLink >Change Profile</NavLink>
                              <NavLink to="/upload-report">Upload Report</NavLink>
                              <NavLink to="/show-report">Show Report</NavLink>
                              <button className={Styles.logout} onClick={handleLogout}>Logout</button>
                            </div>
                            <p>{userName}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Header