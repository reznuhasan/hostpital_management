import React from 'react'
import Style from '../Styles/CabinBox.module.css'
import { Link } from 'react-router-dom';
const CabinBox = ({ cabin }) => {
  const { _id,room, floor, availableTime, price, bed, facilities } = cabin;
  return (
    <div className={Style.cabinbox}>
      <div className="title">
        <h1>Room:{room}</h1>
      </div>
      <div>
        <h2>Floor:{floor}</h2>
      </div>
      <div>
        <div className={Style.facilities}>
          <h2>Bed:{bed}</h2>
        </div>
      </div>
      <div className={Style.price}>
        <h2>Price:{price} per hour</h2>
      </div>
      <div>
        <h2>Available Time:{availableTime}</h2>
      </div>
      <div>
        <Link to={`/cabin/appointment/${_id}`}>
          <button className={Style.bookBtn}>Book Now</button>
        </Link>
        <button className={Style.SeeMore}>See More...</button>
      </div>
    </div>
  )
}

export default CabinBox