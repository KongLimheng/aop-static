import { getMonth, getYear } from 'date-fns'
import { range } from 'lodash'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'
import { CalenderIcon } from '../assets'

const CustomDatePicker = ({ label, control, getValues, name }) => {
  const hasDob = getValues(name)
  const [focus, setFocus] = useState(false)
  const years = range(1990, getYear(new Date()) + 11, 1)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <div className="inputbox">
      <img
        src={CalenderIcon}
        alt={name}
        className="position-absolute"
        style={{
          height: 32,
          width: 32,
          top: 12,
          bottom: 0,
          left: 0,
          zIndex: 1,
          paddingLeft: 18,
        }}
      />

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            className="input"
            autoComplete="off"
            selected={field.value}
            onChange={(d) => field.onChange(d)}
            dateFormat="dd/MM/yyyy"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            id={name}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <button
                  type="button"
                  style={{
                    border: 'none',
                  }}
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {'<'}
                </button>

                <div>
                  <select
                    style={{
                      outline: 'none',
                    }}
                    className="px-2 py-1 border-0"
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    className="px-2 py-1 border-0"
                    style={{
                      outline: 'none',
                    }}
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  style={{
                    border: 'none',
                  }}
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {'>'}
                </button>
              </div>
            )}
          />
        )}
      />

      <label
        className={`${(focus || hasDob) && 'flotingLabelDate'}`}
        htmlFor={name}
      >
        {label}
        <div className="d-inline-flex" style={{ color: '#921d1d' }}>
          *
        </div>
      </label>
    </div>
  )
}

export default CustomDatePicker
