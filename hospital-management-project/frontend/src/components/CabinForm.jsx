// CabinForm.jsx

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from '../Styles/CabinForm.module.css';
import { apiURI } from '../utlis/api';

const CabinForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            category: '',
            room: '',
            floor: '',
            bed: '',
            price: '', // Add the "price" field
        },
        validationSchema: Yup.object({
            category: Yup.string().required('Category is required'),
            room: Yup.string().required('Room is required'),
            floor: Yup.string().required('Floor is required'),
            bed: Yup.string().required('Bed is required'),
            price: Yup.number().required('Price is required').positive('Price must be a positive number'),
        }),
        onSubmit: async (values, actions) => {
            try {
                console.log(values);
                // Make an API call using axios
                const response = await apiURI.post('/cabin/create', values);
                console.log('API Response:', response.data);
                console.log('API Status:', response.status);

                if (response.status === 201) {
                    alert('Cabin created successfully');
                }
                actions.resetForm({ values: formik.initialValues });
            } catch (error) {
                actions.resetForm({ values: formik.initialValues });
                console.error('API Error:', error);
                alert('Something went wrong');
            }
        },
    });

    return (
        <div className={Styles.cabinForm}>
            <h1 className={Styles.title}>Add Your New Cabin</h1>
            <form onSubmit={formik.handleSubmit} >
                <div className={Styles.formGroup}>
                    <label htmlFor="category">Category*</label>
                    <div className={Styles.selectWrapper}>
                        <select
                            id="category"
                            name="category"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                        >
                            <option value="" label="Select a category" />
                            <option value="premium" label="premium" />
                            <option value="standard" label="standard" />
                            <option value="icu" label="icu" />
                            <option value="ot" label='ot'/>
                            {/* Add more options as needed */}
                        </select>
                        
                    </div>
                    {formik.errors.category && formik.touched.category && (
                        <p className={Styles.formError}>{formik.errors.category}</p>
                    )}
                </div>

                <div className={Styles.formGroup}>
                    <label htmlFor="room">Room*</label>
                    <input
                        id="room"
                        name="room"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.room}
                    />
                    {formik.errors.room && formik.touched.room && (
                        <p className={Styles.formError}>{formik.errors.room}</p>
                    )}
                </div>

                <div className={Styles.formGroup}>
                    <label htmlFor="floor">Floor*</label>
                    <input
                        id="floor"
                        name="floor"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.floor}
                    />
                    {formik.errors.floor && formik.touched.floor && (
                        <p className={Styles.formError}>{formik.errors.floor}</p>
                    )}
                </div>

                <div className={Styles.formGroup}>
                    <label htmlFor="bed">Bed*</label>
                    <input
                        id="bed"
                        name="bed"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bed}
                    />
                    {formik.errors.bed && formik.touched.bed && (
                        <p className={Styles.formError}>{formik.errors.bed}</p>
                    )}
                </div>
                <div className={Styles.formGroup}>
                    <label htmlFor="price">Price*</label>
                    <input
                        id="price"
                        name="price"
                        type="text" // You can use "number" if you want to enforce a numeric input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.errors.price && formik.touched.price && (
                        <p className={Styles.formError}>{formik.errors.price}</p>
                    )}
                </div>
                {/* <div className={Styles.formGroup}>
                    <label htmlFor="availableTime">Available Time*</label>
                    <input
                        id="availableTime"
                        name="availableTime"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.availableTime}
                    />
                    {formik.errors.availableTime && formik.touched.availableTime && (
                        <p className={Styles.formError}>{formik.errors.availableTime}</p>
                    )}
                </div> */}

                <button type="submit" className={Styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>

    );
};

export default CabinForm;
