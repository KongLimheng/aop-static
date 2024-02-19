import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { setFlexiBg, setOpenModal, store } from '../contexts/store'
import CustomModal from './CustomModal'

const Layout = () => {
  const maxWidth = store((state) => state.maxWidth)
  const isMini = store((state) => state.isMini)
  const openModal = store((state) => state.openModal)
  const modalData = store((state) => state.modalData)
  const flexiBg = store((state) => state.flexiBg)

  useEffect(() => {
    if (location.pathname === '/new') {
      setFlexiBg('#fff')
    } else {
      setFlexiBg('#ffffffb3')
    }
  }, [location.pathname])

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
          background: flexiBg,
        }}
      >
        {/* {children} */}
        <Outlet />
        <CustomModal
          title={modalData.modalTitle}
          show={openModal}
          onHide={() => setOpenModal(false)}
        >
          {modalData.modalBody}
        </CustomModal>
      </div>
    </div>
  )
}

export default Layout
