import React, { useState } from 'react'
import { apiURI } from '../utlis/api';
import Styles from "../Styles/Department.module.css"

const Certification = () => {
    const [certification, setCertification] = useState("");
    const handleCertification = (e) => {
        setCertification(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const doctorCertification = {
            name: certification,
        }
        setCertification("")
        try {
            const res = await apiURI.post('/doctor/certification/', doctorCertification)
            if (res.status === 200) {
                alert("add certification successfully")
            } else if (res.status === 403) {
                alert("already add certification")
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
                <input type="text" name="name" value={certification} onChange={handleCertification} placeholder="enter doctor's certification name" className={Styles.departmentInput} />
                <button type='submit' className={Styles.departmentBtn}>Add Certification</button>
            </form>
        </div>
    )
}

export default Certification