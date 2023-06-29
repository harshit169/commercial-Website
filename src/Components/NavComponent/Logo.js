import React from 'react'
import logo from './img/online-shop.png'
import { Link, useNavigate } from 'react-router-dom'

function Logo() {
  const navigate=useNavigate()
  return (
    <>
    
      <Link to='/'>
        <img src={logo} /><h1>JR<span>Shop</span></h1>
      </Link>
    </>
  )
}

export default Logo