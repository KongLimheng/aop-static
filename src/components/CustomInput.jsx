import React from 'react'

const CustomInput = ({ register, label, icon, required = false }) => {
  return (
    <div className="inputbox">
      <img
        src={icon}
        alt=""
        className="position-absolute"
        style={{
          height: 32,
          width: 32,
          top: 12,
          bottom: 0,
          left: 0,
          zIndex: 10,
          paddingLeft: 18,
        }}
      />

      <input
        {...register}
        style={{ border: 'none' }}
        className="input"
        type="text"
        id="firstName"
        // name="firstName"
        required={required}
      />
      <label>
        {label}
        <div className="d-inline-flex" style={{ color: '#921d1d' }}>
          *
        </div>
      </label>
    </div>
  )
}

export default CustomInput
