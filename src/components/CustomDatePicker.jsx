import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'
import { CalenderIcon } from '../assets'

const CustomDatePicker = ({ label, control, getValues, name }) => {
  const hasDob = getValues(name)
  const [focus, setFocus] = useState(false)

  return (
    <div className="inputbox">
      <img
        src={CalenderIcon}
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

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            className="input"
            autoComplete="none"
            selected={field.value}
            onChange={(d) => field.onChange(d)}
            dateFormat="dd/MM/YYYY"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        )}
      />

      <label className={`${(focus || hasDob) && 'flotingLabelDate'}`}>
        {label}
        <div className="d-inline-flex" style={{ color: '#921d1d' }}>
          *
        </div>
      </label>
    </div>
  )
}

export default CustomDatePicker
