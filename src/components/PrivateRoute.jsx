import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ hasData, isPublic }) => {
  return hasData || !!isPublic ? <Outlet /> : <Navigate to="/new" replace />
}

export default PrivateRoute
