import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  setFlexiBg,
  setIsMini,
  setMaxWidth,
  setOpenModal,
  store,
} from '../contexts/store'
import CustomModal from './CustomModal'

const Layout = () => {
  const maxWidth = store((state) => state.maxWidth)
  const isMini = store((state) => state.isMini)
  const openModal = store((state) => state.openModal)
  const modalData = store((state) => state.modalData)
  const flexiBg = store((state) => state.flexiBg)
  const formData = store((state) => state.formData)
  const navigate = useNavigate()
  const mainPath = ['/', '/e-services', '/new']

  useEffect(() => {
    if (location.pathname === '/new') {
      setFlexiBg('#fff')
    } else {
      setFlexiBg('#ffffffb3')
    }

    if (mainPath.includes(location.pathname)) {
      setMaxWidth('100%')
      setIsMini(false)
    } else {
      setMaxWidth('640px')
      setIsMini(true)
    }

    if (
      location.pathname === '/success' &&
      Object.keys(formData).length === 0
    ) {
      navigate('/new')
    }
  }, [location.pathname])

  return (
    <div
      className={`w-100 justify-content-center align-items-center ${
        isMini && 'd-flex '
      }`}
    >
      <div
        className={`wrap-container white-container`}
        style={{
          maxWidth: maxWidth,
          background: flexiBg,
          minWidth: 290,
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
