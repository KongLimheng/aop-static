import React from 'react'

const CustomInput = ({ register, label, icon, required = false }) => {
  return (
    <div className="inputbox">
      <img
        src={icon}
        alt={label}
        className="position-absolute"
        style={{
          height: 32,
          width: 32,
          top: 12,
          bottom: 0,
          left: 0,
          paddingLeft: 18,
        }}
        loading="lazy"
      />

      <input
        {...register}
        style={{ border: 'none' }}
        className="input"
        type="text"
        id={register.name}
        // name="firstName"
        required={required}
        autoComplete="false"
      />
      <label htmlFor={register.name}>
        {label}
        <div className="d-inline-flex" style={{ color: '#921d1d' }}>
          {required && '*'}
        </div>
      </label>
    </div>
  )
}

export default CustomInput
