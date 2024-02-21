import React, { useEffect } from 'react'
import {
  setFlexiBg,
  setIsMini,
  setMaxWidth,
  setOpenModal,
  store,
} from '../contexts/store'
import CustomModal from './CustomModal'

/**
 *
 * @param {Object} param
 * @param {JSX.Element} param.children
 * @returns
 */
const Layout = ({ children }) => {
  const maxWidth = store((state) => state.maxWidth)
  const isMini = store((state) => state.isMini)
  const openModal = store((state) => state.openModal)
  const modalData = store((state) => state.modalData)
  const flexiBg = store((state) => state.flexiBg)
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
  }, [location.pathname])

  return (
    <div
      className={`w-100 justify-content-center align-items-center ${
        isMini && 'd-flex'
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
        {children}

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
