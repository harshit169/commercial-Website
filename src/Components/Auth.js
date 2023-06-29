import { createContext, useContext, useState } from "react";


const AuthContext=createContext(null)

export const AuthProvider=({children})=>{
  
  const [User,setUser]=useState('')
  const [Lname,setLname]=useState('')
  const [Email,setEmail]=useState('')
  const [Mobile,setMobile]=useState('')
  const [DOB,setDOB]=useState('')
  const Login=(User)=>{
    setUser(User)
    
  }
  const SetAllData=(Lname,Email,Mobile,DOB)=>{
      setLname(Lname)
      setEmail(Email)
      setMobile(Mobile)
      setDOB(DOB)
  }
  const Logout=()=>{
    setUser(null)
    
  }

  return(
    <AuthContext.Provider value={{User,Lname,Email,Mobile,DOB,Login,Logout,SetAllData}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
     return useContext(AuthContext)   
}