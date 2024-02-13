import React from 'react'
import { store } from '../contexts/store'

const Layout = ({ children }) => {
  const maxWidth = store((state) => state.maxWidth)
  const mainFlex = store((state) => state.mainFlex)

  return (
    <div
      className={`p-4 w-100  justify-content-center align-items-center ${
        mainFlex && 'd-flex '
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
