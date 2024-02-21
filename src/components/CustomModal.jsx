import React, { ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

/**
 *
 * @param {Object} param
 * @param {ReactNode} param.children
 * @returns
 */
const CustomModal = ({ show, onHide, children, title }) => {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header
        closeButton
        style={{
          borderBottom: '0',
        }}
      >
        <Modal.Title id="contained-modal-title-center">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{children}</div>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
