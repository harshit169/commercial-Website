import React from 'react'
import { useAuth } from '../Auth'
import { Navigate } from 'react-router-dom'

export const ProfileReqAuth = ({ children }) => {
  const Auth = useAuth()
  if (!Auth.User) {
    return <Navigate to='/login' />

  }
  return children
}

