import React, { useEffect, useRef } from 'react'

const CaptureImageSection = ({ label }) => {
  const videoRef = useRef(null)
  const capturePhoto = () => {
    const canvas = document.createElement('canvas')
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 300, 150)
    setImage(canvas.toDataURL('image/jpg'))
    // hideCapture(false)
  }

  useEffect(() => {
    let stream = new MediaStream()
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })

      videoRef.current.srcObject = stream
    }

    startCamera()

    return () => {
      stream?.getTracks().forEach((track) => track.stop())
    }
  }, [])
  return (
    <div>
      <video
        id="video"
        // width={400}
        autoPlay
        ref={videoRef}
        className="rounded-lg"
      ></video>
    </div>
  )
}

export default CaptureImageSection
