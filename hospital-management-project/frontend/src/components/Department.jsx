import React, { useState } from 'react'
import { apiURI } from '../utlis/api';
import Styles from "../Styles/Department.module.css"

const Department = () => {
    const [department, setDepartment] = useState("");
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const doctorDepartment = {
            name: department,
        }
        setDepartment("")
        try {
            const res = await apiURI.post('/doctor/department/', doctorDepartment)
            if (res.status === 200) {
                alert("add department successfully")
            } else if (res.status === 403) {
                alert("already add department")
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
                <input type="text" name="name" value={department} onChange={handleDepartment} placeholder="enter doctor's department name" className={Styles.departmentInput} />
                <button type='submit' className={Styles.departmentBtn}>Add Department</button>
            </form>
        </div>
    )
}

export default Department