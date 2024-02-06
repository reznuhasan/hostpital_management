import React, { useState } from 'react'
import { apiURI } from '../utlis/api';
import Styles from "../Styles/Department.module.css"

const Position = () => {
    const [position, setPosition] = useState("");
    const handlePosition = (e) => {
        setPosition(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const doctorPosition = {
            name: position,
        }
        setPosition("")
        try {
            const res = await apiURI.post('/doctor/position/', doctorPosition)
            if (res.status === 200) {
                alert("add position successfully")
            } else if (res.status === 403) {
                alert("already add position")
            } else {
                alert("something wrong")
            }
        } catch (error) {
            alert("something wrong")
        }
    }
    return (
        <div className={Styles.department}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={position} onChange={handlePosition} placeholder="enter doctor's position name" className={Styles.departmentInput} />
                <button type='submit' className={Styles.departmentBtn}>Add Position</button>
            </form>
        </div>
    )
}

export default Position