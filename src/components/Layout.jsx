import React from 'react'
import { store } from '../contexts/store'

const Layout = ({ children }) => {
  const maxWidth = store((state) => state.maxWidth)
  const isMini = store((state) => state.isMini)

  return (
    <div
      className={`p-4 w-100  justify-content-center align-items-center ${
        isMini && 'd-flex '
      }`}
    >
      <div
        className={`wrap-container white-container `}
        style={{
          maxWidth: maxWidth,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
