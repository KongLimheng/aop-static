import React from 'react'
import { Outlet } from 'react-router-dom'

const MIniLayout = () => {
  return (
    <div
      className={`w-100 min-vh-100 justify-content-center align-items-center d-flex py-md-4 py-2`}
    >
      <div
        className={`wrap-container white-container`}
        style={{
          maxWidth: 600,
          background: '#ffffffb3',
          minWidth: 290,
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default MIniLayout
