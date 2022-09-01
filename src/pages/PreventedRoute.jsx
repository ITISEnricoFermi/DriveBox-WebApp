import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

// Prevent the user from accessing pages if they are already logged in
const PreventedRoute = ({children}) => {
    const {user} = UserAuth()
    if (user?.email? true : false) {
      return <Navigate to='/' />
    }
    return children 
  }
  
  export default PreventedRoute