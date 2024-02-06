import { createContext, useEffect, useState } from "react";
import { checkUser, findName } from "../customHook/userHook";

export const authProvider=createContext();

const UserAuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [userName,setUserName]=useState("");
    const login=(token)=>{
        localStorage.setItem('token',token);
        const userCheck=checkUser();
        if(userCheck===true){
           const name=findName();
           setUserName(name)
           setUser({token})
        }
    }
    const logout=()=>{
        localStorage.removeItem('');
        setUser(null)
        setUserName("")
    }
    return <authProvider.Provider value={{user,login,logout,userName}}>
        {children}
    </authProvider.Provider>
}

export default UserAuthProvider;