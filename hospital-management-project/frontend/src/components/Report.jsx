import React from 'react'
import Styles from "../Styles/Report.module.css"
const Report = ({report}) => {
    console.log(report)
  return (
    <div className={Styles.report}>
      <img src={report} alt="" />
    </div>
  )
}

export default Report