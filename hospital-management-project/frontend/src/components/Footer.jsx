import React from 'react'
import Styles from "../Styles/Footer.module.css"
import logo from "../assets/smileLogo.png"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaLinkedinIn, FaSquareInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div className={Styles.logo}>
                <img src={logo} alt="" />
                <h1>EverSmile</h1>
            </div>
            <div className={Styles.allDetails}>
                <div className={Styles.footerDetails}>
                    <div className={Styles.menu}>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/doctors">Find Doctor</NavLink>
                        <NavLink to="/cabin">Cabins</NavLink>
                        <NavLink to="/test">Tests</NavLink>
                        <NavLink to="/magazine">Magazine</NavLink>
                        <NavLink to="/nurses">Find Nurses</NavLink>
                    </div>
                    <div className={Styles.contact}>
                        <div className={Styles.inqury}>
                            <p>Send Inqury</p>
                        </div>
                        <div className={Styles.hotline}>
                            <FontAwesomeIcon icon={faPhone} className={Styles.icon}></FontAwesomeIcon><p>10678</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.line}>

                </div>
                <div className={Styles.socialMedia}>
                    <div className={Styles.socialBox}>
                        <FaFacebookF className={Styles.socialIcon} />
                    </div>
                    <div className={Styles.socialBox}>
                        <FaSquareInstagram className={Styles.socialIcon} />
                    </div>
                    <div className={Styles.socialBox}>
                        <FaXTwitter className={Styles.socialIcon} />
                    </div>
                    <div className={Styles.socialBox}>
                        <FaYoutube className={Styles.socialIcon} />
                    </div>
                    <div className={Styles.socialBox}>
                        <FaLinkedinIn className={Styles.socialIcon} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer