import React from 'react'
import Styles from "../Styles/Register.module.css"
const ImportantLabel = ({name,text}) => {
  return (
    <div className={Styles.impLabel}>
      <label htmlFor={name}>{text}: <span className={Styles.star}>*</span></label>
    </div>
  )
}

export default ImportantLabel

