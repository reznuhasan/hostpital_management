import React from 'react'
import Styles from "../Styles/HelpPart.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const HelpPart = () => {
  return (
    <div className={Styles.HelpPart}>
        <h1 className={Styles.title}>How Can We Help?</h1>
        <div className={Styles.menu}>
          <div>
            <Link to="/appointment"><h1>Request an Appointment</h1></Link>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <Link to="/doctors"><h1>Find A Doctor</h1></Link>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>Patients & Visitor Guide</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <Link to="/register"><h1>Patient Register</h1></Link>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
          <div>
            <h1>EverSmile Hotline</h1>
            <FontAwesomeIcon icon={faArrowRight} className={Styles.fontIcon} />
          </div>
        </div>
    </div>
  )
}

export default HelpPart