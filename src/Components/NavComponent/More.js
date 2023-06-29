import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth'

function More() {
    const Auth = useAuth()
    return (
        <div className='more'>
            <div className='cart more-set'>
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
            <Link to='/profile'>
                <div className='profile more-set'>
                    <i className="fa-solid fa-user"></i>
                    Profile
                </div>
            </Link>
            {
                (!Auth.User) && <Link to='/login'>
                    <div className='login more-set'>
                        <i className="fa-solid fa-user"></i>
                        Login
                    </div>
                </Link>
            }
        </div>
    )
}

export default More