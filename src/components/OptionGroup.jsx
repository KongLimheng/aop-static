import React from 'react'

function OptionGroup({ register, label, opt1, opt2 }) {
  return (
    <>
      <label htmlFor="" style={{ fontSize: 14, color: '#6a6a6a' }}>
        {label}
      </label>
      <div className="cnb-radio">
        <input
          {...register}
          defaultValue={opt1}
          defaultChecked
          // name="gender"
          type="radio"
          label={opt1}
          className="toggle-btn"
        />
        <input
          {...register}
          defaultValue={opt2}
          // name="gender"
          type="radio"
          label={opt2}
          className="toggle-btn"
        />
      </div>
    </>
  )
}

export default OptionGroup
