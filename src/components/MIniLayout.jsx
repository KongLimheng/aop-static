import React from 'react'
import { Outlet } from 'react-router-dom'
import { store } from '../contexts/store'

const MIniLayout = () => {
  const flexiBg = store((state) => state.flexiBg)
  return (
    <div
      className={`w-100 min-vh-100 justify-content-center align-items-center d-flex p-md-4 p-2`}
    >
      <div
        className={`wrap-container white-container`}
        style={{
          maxWidth: 600,
          background: flexiBg,
          minWidth: 290,
          opacity: flexiBg === '#fff' && 0.85,
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default MIniLayout
