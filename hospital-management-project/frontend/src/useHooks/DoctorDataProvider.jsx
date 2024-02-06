import { createContext, useState } from "react";

export const doctorData=createContext();

const DoctorDataProvider=({children})=>{
    const [doctors,setDoctors]=useState([]);
    return(
        <doctorData.Provider value={{doctors,setDoctors}}>
            {children}
        </doctorData.Provider>
    )
}

export default DoctorDataProvider