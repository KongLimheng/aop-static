import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo'
import { setModalData, setOpenModal } from '../contexts/store'

const Body = ({ setDataImage, facingMode }) => {
  const handleTakePhoto = (dataUri) => {
    setDataImage(dataUri)
    setOpenModal(false)
  }
  return (
    <>
      <Camera
        idealFacingMode={facingMode}
        imageType={IMAGE_TYPES.JPG}
        idealResolution={{
          width: 640,
          height: 480,
        }}
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri)
        }}
      />
    </>
  )
}

const CaptureComponent = ({ label, placeholder, icon, id }) => {
  const [dataImage, setDataImage] = useState(null)
  const [facingMode, setFacingMode] = useState('environment')
  /**
   *
   * @param {MouseEvent} e
   */
  const handleCapture = (e) => {
    setOpenModal(true)
    setModalData({
      modalBody: <Body setDataImage={setDataImage} facingMode={facingMode} />,
    })
  }

  return (
    <Col md="6" xs="12" className="px-0" lg="4">
      <div className="mx-2">
        <div style={{ fontSize: 12 }}>
          {label}
          <div className="d-inline-flex" style={{ color: '#921d1d' }}>
            *
          </div>
        </div>
        <label
          onClick={handleCapture}
          className="mt-2 rounded-3 d-flex flex-column justify-content-center align-items-center overflow-hidden file-upload-container position-relative"
          data-id={id}
        >
          {dataImage ? (
            <img
              src={dataImage}
              className="h-auto rounded-2"
              style={{
                maxWidth: 'calc(100% - 10px)',
              }}
            />
          ) : (
            <>
              <img
                loading="lazy"
                src={icon}
                alt="empty-img"
                style={{
                  width: '15%',
                }}
              />
              <span
                className="pt-2 text-center px-4 "
                style={{ fontSize: 14, color: '#797979' }}
              >
                {placeholder}
              </span>
            </>
          )}
        </label>
        <input
          className="form-control"
          type="file"
          id={id}
          accept="image/*"
          name={id}
        />
      </div>
    </Col>
  )
}

export default CaptureComponent
