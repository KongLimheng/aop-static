import React from 'react'
import { Outlet } from 'react-router-dom'

/**
 *
 * @param {Object} param
 * @param {JSX.Element} param.children
 * @returns
 */
const Layout = () => {
  return (
    <div className={`w-100 justify-content-center align-items-center`}>
      <div
        className={`wrap-container white-container`}
        style={{
          background: `${location.pathname.includes('/new') && '#fff'}`,
        }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
