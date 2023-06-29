import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useAuth } from '../Auth'
import { useNavigate } from 'react-router-dom'

let Flag = 0
function Login() {
  const [user, setUser] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setMobile] = useState('')
  const [DOB, setDOB] = useState('')

  const Auth = useAuth()
  const NaviGate = useNavigate()
  const LoginHandler = (e) => {
    e.preventDefault()
    Auth.Login(user)
    Auth.SetAllData(Lname, Email, Mobile, DOB)
    NaviGate('/')
    Flag = 1
  }
  if (!Auth.User) Flag = 0
  useEffect(() => {
    const HisClear = (Auth.User && Flag == 1) && NaviGate('/profile', { replace: true })
    return () => {
      clearInterval(HisClear)
    }
  }, [])

  const CloseHandler = () => {
    NaviGate('/')
  }
  const SeePass = () => {

    let a = document.querySelectorAll('.Pass')
    let b = document.getElementsByClassName('TPass')
    if (a[0].className === 'fa-solid fa-lock Pass') {
      a[0].className = 'fa-solid fa-lock-open Pass'
      b[0].type = 'text'
    }
    else {
      a[0].className = 'fa-solid fa-lock Pass'
      b[0].type = 'password'
    }

  }
  return (
    <>
      {/* <Navbar /> */}
      <div className='Loginpage'>
        <div className='close' onClick={CloseHandler}>
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
        <form onSubmit={LoginHandler}>
          <div className='LoginForm'>
            <p>START FOR FREE</p>
            <h1>Create new Account</h1>
            <p>Already A Member ? <span>Log In</span></p>
            <div className='FormName'>
              <div className='First Name'>
                <input type='text' onChange={(e) => setUser(e.target.value)} required></input>
                <label>First name</label>
                <i className="fa-solid fa-address-card"></i>
              </div>
              <div className='Second Name'>
                <input type='text' onChange={(e) => setLname(e.target.value)} required></input>
                <label>Last name</label>
                <i className="fa-solid fa-address-card"></i>
              </div>
            </div>
            <div className='FormEmail'>
              <input type='email' onChange={(e) => setEmail(e.target.value)} required></input>
              <label>Email</label>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className='FPassword'>
              <input type='password' className='TPass' required></input>
              <label>Password</label>
              <i className="fa-solid fa-lock Pass" onClick={SeePass}></i>
            </div>
            <div className='FAdData'>
              <div className='FMobile Data'>
                <input type='text' onChange={(e) => setMobile(e.target.value)} required></input>
                <label>Mobile</label>
                <i className="fa-solid fa-phone "></i>
              </div>
              <div className='FDOB Data'>
                <input type='date' onChange={(e) => setDOB(e.target.value)} required></input>
                <label>DOB</label>
              </div>
            </div>
            <button type='submit' >Submit</button>
            {/* <input type='text' onChange={(e) => setUser(e.target.value)} />
          <button onClick={LoginHandler}>Login</button> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default Login