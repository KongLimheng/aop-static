import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ isAuthenticated, isPublic }) => {
  return isAuthenticated || !!isPublic ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  )
}

export default PrivateRoute
