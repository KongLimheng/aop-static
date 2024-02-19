import React, { ReactNode } from 'react'
import { Container, Modal } from 'react-bootstrap'

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
      <Modal.Body className="grid-example">
        <Container>{children}</Container>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
