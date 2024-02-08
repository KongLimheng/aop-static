import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="p-4 w-100">
      <div className="wrap-container white-container">{children}</div>
    </div>
  )
}

export default Layout
