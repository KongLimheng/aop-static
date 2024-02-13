import React from 'react'

function OptionGroup({ register, label }) {
  return (
    <>
      <label htmlFor="" style={{ fontSize: 14, color: '#6a6a6a' }}>
        {label}
      </label>
      <div className="cnb-radio">
        <input
          {...register}
          defaultValue="m"
          defaultChecked
          // name="gender"
          id="male"
          type="radio"
          label="Male"
          className="toggle-btn"
        />
        <input
          {...register}
          defaultValue="f"
          // name="gender"
          id="female"
          type="radio"
          label="Female"
          className="toggle-btn"
        />
      </div>
    </>
  )
}

export default OptionGroup
