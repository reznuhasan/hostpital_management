import React, { useState } from 'react';
import Styles from '../Styles/Register.module.css';
import ImportantLabel from './ImportantLabel';
import { Link } from 'react-router-dom';
import { apiURI } from '../utlis/api';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        mobile: '',
    });
    const navigate=useNavigate();
    const [show, setShow] = useState("true");
    const handlePassword = (e) => {
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    const handleChanged = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            const response = await apiURI.post("/users/register", user);
            if(response.status===200){
                navigate('/login')
            }else{
                alert("create account failed")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={Styles.register}>
            <div className={Styles.formContainer}>
                <h1 className={Styles.title}>PATIENT REGISTRATION</h1>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="name" text="NAME"></ImportantLabel>
                        <input type="text" name="name" value={user.name} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="email" text="EMAIL"></ImportantLabel>
                        <input type="email" name="email" value={user.email} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="password" text="PASSWORD"></ImportantLabel>
                        <input type={show ? "password" : "text"} name="password" value={user.password} onChange={handleChanged} />
                        <p onClick={handlePassword} className={Styles.checkPassword}>{show ? "show" : "hidden"}</p>
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="age" text="AGE"></ImportantLabel>
                        <input type="text" name="age" value={user.age} onChange={handleChanged} />
                    </div>
                    <div className={Styles.inputDiv}>
                        <ImportantLabel name="mobile" text="MOBILE"></ImportantLabel>
                        <input type="text" name="mobile" value={user.mobile} onChange={handleChanged} />
                    </div>
                    <button type="submit" className={Styles.submitBtn}>Submit</button>
                </form>
                <p className={Styles.para}>Already have an account?<Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
