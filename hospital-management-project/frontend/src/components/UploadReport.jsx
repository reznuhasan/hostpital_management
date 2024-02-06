import React, { useContext, useEffect, useRef, useState } from 'react'
import Styles from "../Styles/UploadReport.module.css"
import { apiURI } from '../utlis/api';
import { jwtDecode } from 'jwt-decode';
const UploadReport = () => {
    const [inputs, setInputs] = useState({
        profileUrl: "",
        email: "",
    })

    const imageRef = useRef(null)
    const handleImageChanged = async (e) => {
        const profile = e.target.files[0];
        const imageFormate = new FormData();
        imageFormate.append("profile", profile);
        const token = localStorage.getItem('token').split(" ")[1]
        const decodeToken = jwtDecode(token);
        setInputs(prev => ({
            ...prev,
            email: decodeToken.email
        }))
        try {
            const res = await apiURI.post("upload/image/", imageFormate, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            setInputs(prev => ({
                ...prev,
                profileUrl: res.data.imageUrl
            }))

        } catch (error) {
            console.log("")
        }
    }
    const handleImagedClick = () => {
        imageRef.current.click();
    }

    const handleUploadReport = async (e) => {
        e.preventDefault();
        try {
            const res = await apiURI.post(`/user/report`, inputs);
            if (res.status === 200) {
                alert("report upload successfully")
            }
        } catch (error) {
            alert("Something wrong here")
        }
        setInputs({
            profileUrl: "",
            email: "",
        })

    }
    return (
        <div className={Styles.uploadReport}>
            <div className={Styles.uploadBox} onClick={handleImagedClick}>
                {inputs.profileUrl ? <img src={inputs.profileUrl} /> : <p>Upload Your Report</p>}
                <input ref={imageRef} type="file" name='profile' onChange={handleImageChanged} style={{ display: "none" }} />
            </div>
            <button onClick={handleUploadReport} className={Styles.uploadBtn}>Submit</button>
        </div>
    )
}

export default UploadReport