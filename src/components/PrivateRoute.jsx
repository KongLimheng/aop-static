import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { store } from '../contexts/store'

const PrivateRoute = () => {
  const formData = store((state) => state.formData)
  return Object.keys(formData).length ? (
    <Outlet />
  ) : (
    <Navigate to="/new" replace />
  )
}

export default PrivateRoute
