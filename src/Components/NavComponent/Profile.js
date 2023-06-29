import React, { useEffect } from 'react'

import { useAuth } from '../Auth'
import { useNavigate } from 'react-router-dom'

import order from '../NavComponent/img/order.png'
import bill from '../NavComponent/img/bill.png'



function Profile() {
  const Auth = useAuth()
  const NaviGate = useNavigate()
  const logoutHandle = () => {
    Auth.Logout()
    NaviGate('/')
  }
  const BackHandler = () => {
    NaviGate('/')
  }
  const LogbtnHandle = () => {
    let a = document.querySelectorAll('#logoutbtn')
    let b = document.getElementsByClassName('Logoutbtn')
    if (a[0].className === 'fa-solid fa-caret-down') {
      a[0].className = 'fa-solid fa-caret-up'
      b[0].style.display = 'flex'
    }
    else {
      a[0].className = 'fa-solid fa-caret-down'
      b[0].style.display = 'none'
    }
  }

  return (
    <div className='PProfile'>
      <div className='PfNav'>
        <div className='back' >
          <i className="fa-solid fa-arrow-left" onClick={BackHandler}></i>
        </div>

        <div className='Logout'>
          <img src={require(`../NavComponent/img/U3.png`)} alt='png'>
          </img>
          <p>{Auth.User}</p>
          <i className="fa-solid fa-caret-down"
            onClick={LogbtnHandle} id='logoutbtn'></i>
          <div className='Logoutbtn'>
            <button onClick={logoutHandle}>Logout</button>
          </div>
        </div>
      </div>
      <div className='UserD'>
        <div className='Left'>
          <p><i className="fa-solid fa-gauge-simple"></i>My Dashboard</p>
          <p><i className="fa-solid fa-user"></i>Account</p>
          <p><i className="fa-solid fa-mobile"></i>Mobile</p>
          <p><i className="fa-solid fa-credit-card"></i>Payments</p>
          <p><i className="fa-solid fa-comments"></i>Complaints</p>
          <p><i className="fa-solid fa-phone"></i>Support</p>
        </div>
        <div className='Right'>
          <div className='Top'>
            <div className='UserPic'>
              <img src={require(`../NavComponent/img/U3.png`)} alt='png'></img>
            </div>

            <div className='Details'>
              <div className='Name'>
                <div className='FName'>
                  <p><i className="fa-solid fa-address-card"></i>{Auth.User}</p>
                </div>
                <div className='LName'>
                  <p><i className="fa-solid fa-address-card"></i>{Auth.Lname}</p>
                </div>
              </div>
              <div className='Email'>
                <p><i className="fa-solid fa-envelope"></i> {Auth.Email}</p>
              </div>
              <div className='Mobile'>
                <div className='No'>
                  <p><i className="fa-solid fa-phone"></i> {Auth.Mobile}</p>
                </div>
                <div className='MF'>
                  <p>Gender : </p>
                  <input type='radio' value='Male' name='Gen' id='male'></input>
                  <label>Male</label>
                  <input type='radio' value='Male' name='Gen' id='female'></input>
                  <label>Female</label>
                </div>
              </div>
              <button>Save</button>
            </div>

          </div>
          <div className='Bottom'>
            <div className='Order past'>
              <p>Recent Orders</p>
              <div className='icon'>
                <img src={order} alt='ong'></img>
              </div>
            </div>
            <div className='Bill past'>
              <p>Billings</p>
              <div className='icon'>
                <img src={bill} alt='png'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile